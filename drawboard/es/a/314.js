var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Apretón';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 314;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">Le dio un fuerte apretón de manos.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 206px; font-size: 18px; font-family: AvenirBook; color: rgb(255, 255, 255);">Sentí un apretón en el pecho.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">Un apretón de la mano puede transmitir confianza.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 481px; left: 881px; font-size: 72px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Apretón; apretar</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">He gave him a firm handshake.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 206px; font-size: 18px; font-family: AvenirBook; color: rgb(255, 255, 255);">I felt a tightness in my chest.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">A squeeze of the hand can convey trust.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 481px; left: 688px; font-size: 30px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Squeeze, grip, tightness, handshake. apretar. to squeeze/to tighten</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}