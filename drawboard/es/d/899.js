var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'ebriedad';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 899;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 330px; left: 849px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 331px; left: 850px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 339px; left: 858px;"></div></div>`;
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/ipad-645564.png';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 909.645px; height: 700px;"><img style="width: 909.645px; height: 700px;" src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 95px; font-size: 26px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">La ebriedad es un factor común en muchos accidentes de tráfico.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 200px; left: 97px; font-size: 25px; font-family: Carlito; color: rgb(255, 255, 255);">Su ebriedad era evidente por su voz arrastrada y paso inseguro.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 327px; left: 98px; font-family: OswaldLight; font-size: 27px; color: rgb(255, 255, 255);">La policía lo detuvo por ebriedad en la vía pública.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 567px; left: 663px; font-size: 65px; font-family: Amatic_bold; color: rgb(255, 255, 255);">ebriedad</div>`;
vte[vte.length]=`<div id="text_87" class="textshirt mergershirt`+transws+`" style="top: 91px; left: 100px; font-size: 27px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">Drunkenness is a common factor in many traffic accidents.</div>`;
vte[vte.length]=`<div id="text_88" class="textshirt mergershirt`+transws+`" style="top: 205px; left: 101px; font-size: 24px; font-family: Carlito; color: rgb(255, 255, 255);">His intoxication was evident from his slurred speech and unsteady gait.</div>`;
vte[vte.length]=`<div id="text_89" class="textshirt mergershirt`+transws+`" style="top: 325px; left: 104px; font-family: OswaldLight; font-size: 25px; color: rgb(255, 255, 255);">The police arrested him for public drunkenness.</div>`;
vte[vte.length]=`<div id="text_90" class="textshirt mergershirt`+transws+`" style="white-space: normal; text-align: right; width: 596px; top: 519px; left: 216px; font-size: 28px; font-family: BarlowLight; color: rgb(255, 255, 255);">Drunkenness, intoxication; the state of being under the influence of alcohol to the point of impaired physical and mental faculties.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}