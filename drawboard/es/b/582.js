var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'conexión';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 582;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/stickies-725930.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 854px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_53" class="textshirt mergershirt" style="top: 221px; left: 434px; font-size: 21px; font-family: NotoSans_Condensed_SemiBoldItalic; transform: rotate(-2deg);">Siento una profunda conexión con esta música.</div>`;
vt[vt.length]=`<div id="text_54" class="textshirt mergershirt" style="top: 315px; left: 441px; font-size: 18px; font-family: MetropolLightLight; transform: rotate(-2deg);">La conexión a internet es muy lenta en esta zona.</div>`;
vt[vt.length]=`<div id="text_55" class="textshirt mergershirt" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 15px; transform: rotate(-2deg);">Hay una conexión directa entre el estrés y la salud física.</div>`;
vt[vt.length]=`<div id="text_56" class="textshirt mergershirt" style="top: 582px; left: 734px; font-size: 49px; font-family: Amatic_bold; transform: rotate(-2deg);">conexión</div>`;
vte[vte.length]=`<div id="text_53" class="textshirt mergershirt`+transws+`" style="top: 221px; left: 434px; font-size: 20px; font-family: MetropolLightLight; transform: rotate(-2deg);">I feel a deep connection with this music.</div>`;
vte[vte.length]=`<div id="text_54" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 441px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">The internet connection is very slow in this area.</div>`;
vte[vte.length]=`<div id="text_55" class="textshirt mergershirt`+transws+`" style="top: 397px; left: 446px; font-family: OpenSansSemiboldItalic; font-size: 14px; transform: rotate(-2deg);">There is a direct connection between stress and physical health.</div>`;
vte[vte.length]=`<div id="text_56" class="textshirt mergershirt`+transws+`" style="width: 398px; white-space: normal; top: 503px; left: 449px; font-size: 17px; font-family: MetropolLightItalic; transform: rotate(-2deg);">Connection; link; bond — A relationship or association between people, things, or ideas; also the act of connecting or being connected.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}