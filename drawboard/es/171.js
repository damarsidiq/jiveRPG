var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Afinado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 171;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 454px; font-size: 17px; font-family: AvenirLight;">El piano está 'afinado' y suena perfecto</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 453px; font-size: 14px; font-family: AvenirBook;">Tiene un oído 'afinado' para detectar falsedades</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 13px;">El nuevo instrumento llegó bien 'afinado' de la fábrica</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 591px; left: 704px; font-size: 29px; font-family: Amatic_bold;">Afinado</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 454px; font-size: 17px; font-family: AvenirLight;">The piano is tuned and sounds perfect</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 453px; font-size: 14px; font-family: AvenirBook;">He has a sharpened ear for detecting lies</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 12px;">The new instrument arrived well-tuned from the factory</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 587px; left: 587px; font-size: 29px; font-family: Amatic_bold;">tuned; refined; in tune</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}