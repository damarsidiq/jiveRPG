var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'pisaras';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 888;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 330px; left: 849px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 331px; left: 850px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 339px; left: 858px;"></div></div>`;
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/ipad-645564.png';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 909.645px; height: 700px;"><img style="width: 909.645px; height: 700px;" src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 95px; font-size: 26px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">Si pisaras esa tabla floja, podrías caerte al vacío.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 200px; left: 97px; font-size: 21px; font-family: Carlito; color: rgb(255, 255, 255);">Me gustaría que pisaras este suelo con más cuidado para no ensuciarlo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 327px; left: 98px; font-family: OswaldLight; font-size: 27px; color: rgb(255, 255, 255);">Si pisaras el acelerador un poco más, llegaríamos a tiempo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 563px; left: 683px; font-size: 65px; font-family: Amatic_bold; color: rgb(255, 255, 255);">pisaras</div>`;
vte[vte.length]=`<div id="text_87" class="textshirt mergershirt`+transws+`" style="top: 91px; left: 100px; font-size: 26px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">If you were to step on that loose board, you could fall.</div>`;
vte[vte.length]=`<div id="text_88" class="textshirt mergershirt`+transws+`" style="top: 205px; left: 101px; font-size: 22px; font-family: Carlito; color: rgb(255, 255, 255);">I would like you to step on this floor more carefully so as not to get it dirty.</div>`;
vte[vte.length]=`<div id="text_89" class="textshirt mergershirt`+transws+`" style="top: 325px; left: 104px; font-family: OswaldLight; font-size: 25px; color: rgb(255, 255, 255);">If you were to step on the gas a bit more, we would arrive on time.</div>`;
vte[vte.length]=`<div id="text_90" class="textshirt mergershirt`+transws+`" style="white-space: normal; text-align: right; width: 596px; top: 519px; left: 217px; font-size: 28px; font-family: BarlowLight; color: rgb(255, 255, 255);">Verb. Second-person singular (tu) imperfect subjunctive form of "pisar," meaning "if you were to step on," "if you trod upon," or "if you walked on."</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}