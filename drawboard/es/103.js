var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'apilados';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 103;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 25px; font-family: Amatic;">Cada estantería de la oficina estaba llena de archivos y documentos apilados</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 288px; left: 388px; font-size: 18px; font-family: AvenirBook;">Los crayones apilados en la caja eran un arcoíris de colores</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Había papeles a montones, apilados sobre cada escritorio de la oficina</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 626px; left: 805px; font-size: 40px; font-family: Amatic_bold;">apilados</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 29px; font-family: Amatic;">Every office shelf was filled with stacked files and documents</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 386px; font-size: 17px; font-family: AvenirBook;">The crayons stacked in the box were a rainbow of colors.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 17px;">There were piles of papers stacked on every desk in the office.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 609px; left: 550px; font-size: 40px; font-family: Amatic_bold;">amontonados, gestapeld (stacked)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
