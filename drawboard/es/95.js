var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'inutiles';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 95;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 15px; font-family: FuturaBookItalic;">Esos esfuerzos fueron inútiles porque el mercado ya había cambiado</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 14px; font-family: AvenirBook;">No gastes tiempo en herramientas inútiles; busca soluciones que escalen</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Esos aparatos viejos son inútiles y solo ocupan espacio</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 622px; left: 875px; font-size: 48px; font-family: Amatic_bold;">inutiles</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 26px; font-family: Amatic;">Those efforts were useless because the market had already changed</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 15px; font-family: AvenirBook;">Don't waste time on useless tools; look for solutions that scale</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 15px;">Those old devices are useless and only take up space.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 590px; left: 705px; font-size: 31px; font-family: Amatic_bold;">Useless / Futile / Pointless -- inútil</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
