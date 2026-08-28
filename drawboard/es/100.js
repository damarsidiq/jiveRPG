var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'la soportas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 100;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 14px; font-family: FuturaBookItalic;">No importa cuánto aumente la presión; sé que tú la soportas con elegancia</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 12px; font-family: AvenirBook;">Muchos emprendedores fallan porque no pueden la soportas cuando las ventas caen</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Admiro la paciencia con la que la soportas durante sus berrinches</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 604px; left: 864px; font-size: 48px; font-family: Amatic_bold;">la soportas</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 556px; font-size: 11px; font-family: MontserratItalic;">No matter how much the pressure increases; I know you withstand it with elegance</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 557px; font-size: 15px; font-family: AvenirBook;">Many entrepreneurs fail because they cannot bear it when sales drop</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 558px; font-family: OpenSansSemiboldItalic; font-size: 14px;">I admire the patience with which you tolerate her during her tantrums</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 596px; left: 574px; font-size: 29px; font-family: Amatic_bold;">You withstand it / You endure it / You bear it  - Soportar</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
