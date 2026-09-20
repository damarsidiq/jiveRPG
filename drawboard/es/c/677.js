var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Apresurados';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 677;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/chalkboard-2495162_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:740px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 155px; left: 137px; font-size: 19px; font-family: SourceSansProItalic;">Salieron apresurados para no perder el tren.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 279px; left: 141px; font-size: 21px; font-family: SourceSansProItalic;">Los pasos apresurados resonaban en el pasillo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 144px; font-family: RalewayRegular; font-size: 19px;">Escribieron unos apuntes apresurados antes del examen.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 561px; left: 889px; font-size: 52px; font-family: OpenSansSemiboldItalic; color: rgb(165, 201, 169);">Apresurados</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 155px; left: 137px; font-size: 19px; font-family: SourceSansProItalic;">They left in a hurry so as not to miss the train.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 279px; left: 141px; font-size: 21px; font-family: SourceSansProItalic;">The hurried footsteps echoed in the hallway.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 144px; font-family: RalewayRegular; font-size: 19px;">They wrote some hurried notes before the exam.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 483px; white-space: normal; top: 546px; left: 704px; font-size: 22px; font-family: OpenSansSemiboldItalic; color: rgb(165, 201, 169);">Hurried, rushed; done quickly or in a hurry.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}