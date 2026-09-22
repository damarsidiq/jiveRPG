var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'apruebo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 914;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 330px; left: 849px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 331px; left: 850px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 339px; left: 858px;"></div></div>`;
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/ipad-645564.png';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 909.645px; height: 700px;"><img style="width: 909.645px; height: 700px;" src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 95px; font-size: 26px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">Yo 'apruebo' totalmente esta decisión del comité.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 200px; left: 97px; font-size: 25px; font-family: Carlito; color: rgb(255, 255, 255);">Como profesor, 'apruebo' el esfuerzo y la originalidad.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 327px; left: 98px; font-family: OswaldLight; font-size: 29px; color: rgb(255, 255, 255);">Solo 'apruebo' gastos que están dentro del presupuesto.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 570px; left: 676px; font-size: 65px; font-family: Amatic_bold; color: rgb(255, 255, 255);">apruebo</div>`;
vte[vte.length]=`<div id="text_87" class="textshirt mergershirt`+transws+`" style="top: 91px; left: 100px; font-size: 28px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">I 'approve' of this committee decision completely.</div>`;
vte[vte.length]=`<div id="text_88" class="textshirt mergershirt`+transws+`" style="top: 205px; left: 101px; font-size: 25px; font-family: Carlito; color: rgb(255, 255, 255);">As a professor, I 'approve' of the effort and originality.</div>`;
vte[vte.length]=`<div id="text_89" class="textshirt mergershirt`+transws+`" style="top: 325px; left: 104px; font-family: OswaldLight; font-size: 29px; color: rgb(255, 255, 255);">I only 'approve' expenses that are within the budget.</div>`;
vte[vte.length]=`<div id="text_90" class="textshirt mergershirt`+transws+`" style="white-space: normal; text-align: right; width: 596px; top: 553px; left: 219px; font-size: 28px; font-family: BarlowLight; color: rgb(255, 255, 255);">I approve; the first-person singular present tense of *aprobar*, meaning to sanction, agree to, or pass a test.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}