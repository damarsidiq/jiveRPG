var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Captan';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 150;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 337px; left: 146px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Captan</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">Las cámaras 'captan' imágenes de alta calidad. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 216px; left: 561px; font-size: 16px; font-family: AvenirBook;">Los niños 'captan' las ideas rápidamente. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Esos sensores 'captan' movimientos sutiles. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 642px; left: 914px; font-size: 44px; font-family: Amatic_bold;">Captan</div>`;

vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 334px; left: 108px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">they capture</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">The cameras capture high-quality images</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 216px; left: 561px; font-size: 16px; font-family: AvenirBook;">Children grasp ideas quickly</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Those sensors detect subtle movements</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 647px; left: 650px; font-size: 37px; font-family: Amatic_bold;">they capture; catch; detect; perceive</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}