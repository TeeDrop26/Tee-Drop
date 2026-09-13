import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { rateSourceAllowed } from './source-publication.mjs';
import { getReviewedRateView } from './new-philadelphia-prototype.mjs';
import { refineCourseDetail } from './course-detail-refinements.mjs';
const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8').replaceAll('\r\n', '\n');
const source = read('app.js');
const courses = vm.runInNewContext(source.slice(0, source.indexOf('\n];') + 3) + ';courses');
const registry = JSON.parse(read('seo/course-registry.json'));
const manifest = JSON.parse(read('seo/pages.json'));
const previewDirectory = manifest.previewDirectory || 'planning/checkpoint-1/site';
const get = id => { const r = registry.find(r => r.id === id); return {...courses.find(c => c.name === r.name && c.city === r.city), id}; };
test('selected published output and both build modes are reproducible', () => {
  for (const args of [[], ['--preview']]) execFileSync(process.execPath, [new URL('scripts/build-seo.mjs',root).pathname.replace(/^\/(\w:)/,'$1'), ...args, '--check']);
  const published = [...read('sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  const preview = [...read(previewDirectory+'/sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(published.length, manifest.existingPages.length + manifest.courses.filter(c=>c.state==='published').length + manifest.areas.filter(a=>a.state==='published').length); assert.equal(preview.length, manifest.existingPages.length + manifest.courses.length + manifest.areas.length);
  assert(published.every(u => preview.includes(u)));
  assert([...manifest.courses,...manifest.areas].every(p=>['draft','published'].includes(p.state)));
  assert.equal(courses.length,124);
});
test('protected sources remain suppressed in future detail rendering', () => {
  for (const id of ['td-0007','td-0073','td-0035']) {
    const c=get(id); assert.equal(rateSourceAllowed(c),false);
    const body='Independent course information from Tee Drop<p class="seo-status">old</p><p class="rate-info seo-full-rate">old</p><p class="seo-review">old</p><section class="seo-facts seo-section">old</section>Nearby Tee Drop courses Nearby suggestions use the directory’s recorded coordinates, not driving times. Check each course’s own information before making plans.';
    const rendered=refineCourseDetail(c,body,{esc:String,external:(url,text)=>`<a href="${url}">${text}</a>`});
    assert(!rendered.includes(c.rateInfo.sourceUrl));
    assert(rendered.includes('Rates reviewed'));
  }
});
test('changed or unreviewed sources and rate summaries fail closed', () => {
  const c=get('td-0051');
  assert.equal(rateSourceAllowed(c),true);
  assert.throws(()=>rateSourceAllowed({...c,id:'td-unreviewed'}),/explicitly review/);
  assert.throws(()=>rateSourceAllowed({...c,rateInfo:{...c.rateInfo,sourceUrl:'https://example.com/'}}),/source destination changed/);
  assert.throws(()=>getReviewedRateView({...c,rateInfo:{...c.rateInfo,summary:'changed'}}),/review rate presentation/);
  assert.throws(()=>getReviewedRateView({...c,rateInfo:{...c.rateInfo,status:'stale'}}));
});
test('preview date and explicit hub relationships match the rendered output', () => {
  for(const page of manifest.courses){
    const r=registry.find(r=>r.id===page.id);
    const html=read(`${previewDirectory}/courses/${r.slug}/index.html`);
    const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(schema['@graph'][0].dateModified,page.previewModified||page.modified);
    const parent=page.previewPrimaryHub||page.primaryHub;
    const crumbs=schema['@graph'].find(g=>g['@type']==='BreadcrumbList').itemListElement;
    if(parent)assert.equal(crumbs[1].item,`https://www.playteedrop.com/golf-courses/${parent}/`);
    else assert.equal(crumbs.length,2);
    assert(html.includes('name="robots" content="noindex, nofollow"'));
    assert(!/<script(?! type="application\/ld\+json")/.test(html));
  }
});
