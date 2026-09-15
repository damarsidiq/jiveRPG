var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'vetada';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 392;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">La película fue 'vetada' en varios países por su contenido político.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 258px; left: 206px; font-size: 18px; font-family: NotoSansSemiCondensedLight; color: rgb(255, 255, 255);">La candidata fue 'vetada' por el comité electoral.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">Esa propuesta ya está 'vetada', no podemos discutirla.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 495px; left: 843px; font-size: 59px; font-family: Amatic_bold; color: rgb(255, 255, 255);">vetada</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">The film was banned in several countries for its political content.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 206px; font-size: 18px; font-family: NotoSansSemiCondensedLight; color: rgb(255, 255, 255);">The candidate was vetoed by the electoral committee.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">That proposal is already vetoed, we cannot discuss it.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 495px; left: 843px; font-size: 59px; font-family: Amatic_bold; color: rgb(255, 255, 255);">banned / vetoed</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}