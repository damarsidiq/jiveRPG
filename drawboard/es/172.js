var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Taquígrafo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 172;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 442px; font-size: 12px; font-family: AvenirLight;">El 'taquígrafo' tomó nota de todo el juicio palabra por palabra</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 443px; font-size: 15px; font-family: AvenirBook;">Mi tía trabaja como 'taquígrafa' en el parlamento</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 440px; font-family: OpenSansSemiboldItalic; font-size: 11px;">El 'taquígrafo' necesitaba escribir con una velocidad impresionante</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 589px; left: 681px; font-size: 29px; font-family: Amatic_bold;">Taquígrafo</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 442px; font-size: 13px; font-family: AvenirLight;">The stenographer recorded the whole trial word for word</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 443px; font-size: 15px; font-family: AvenirBook;">My aunt works as a stenographer in the parliament</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 440px; font-family: OpenSansSemiboldItalic; font-size: 13px;">The stenographer needed to write at an impressive speed</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 588px; left: 527px; font-size: 29px; font-family: Amatic_bold;">shorthand writer; stenographer</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}