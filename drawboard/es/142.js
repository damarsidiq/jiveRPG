var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Enfocar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 142;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 339px; left: 148px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Enfocar</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">Necesito 'enfocar' la cámara para que la foto salga nítida. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 216px; left: 561px; font-size: 14px; font-family: AvenirBook;">Debemos 'enfocar' nuestros esfuerzos en el proyecto más importante. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">El telescopio no logró 'enfocar' la estrella lejana. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 637px; left: 913px; font-size: 40px; font-family: Amatic_bold;">enfocar</div>`;


vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 344px; left: 147px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">to focus</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">I need to focus the camera so the photo comes out sharp</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">We must focus our efforts on the most important project</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">The telescope failed to focus on the distant star</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 644px; left: 825px; font-size: 40px; font-family: Amatic_bold;">to focus; to aim</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}