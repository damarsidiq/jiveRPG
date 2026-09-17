var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'roca';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 569;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/stickies-725930.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 854px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_53" class="textshirt mergershirt" style="top: 221px; left: 434px; font-size: 18px; font-family: MetropolLightLight; transform: rotate(-2deg);">La roca gigante bloqueaba el camino hacia la cima.</div>`;
vt[vt.length]=`<div id="text_54" class="textshirt mergershirt" style="top: 315px; left: 441px; font-size: 15px; font-family: MetropolLightLight; transform: rotate(-2deg);">Se sentó sobre una roca junto al río a contemplar el paisaje.</div>`;
vt[vt.length]=`<div id="text_55" class="textshirt mergershirt" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 14px; transform: rotate(-2deg);">La banda de rock tocó su canción más famosa, "La Roca."</div>`;
vt[vt.length]=`<div id="text_56" class="textshirt mergershirt" style="top: 585px; left: 773px; font-size: 49px; font-family: Amatic_bold; transform: rotate(-2deg);">roca</div>`;
vte[vte.length]=`<div id="text_53" class="textshirt mergershirt`+transws+`" style="top: 221px; left: 434px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">The giant rock blocked the path to the summit.</div>`;
vte[vte.length]=`<div id="text_54" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 441px; font-size: 15px; font-family: MetropolLightLight; transform: rotate(-2deg);">She sat on a rock by the river to contemplate the landscape.</div>`;
vte[vte.length]=`<div id="text_55" class="textshirt mergershirt`+transws+`" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 15px; transform: rotate(-2deg);">The rock band played their most famous song, "The Rock."</div>`;
vte[vte.length]=`<div id="text_56" class="textshirt mergershirt`+transws+`" style="width: 398px; white-space: normal; top: 477px; left: 453px; font-size: 21px; font-family: MetropolLightItalic; transform: rotate(-2deg);">Rock; stone; boulder — A naturally occurring solid aggregate of minerals or mineraloids; a large, hard mass of stone; also used colloquially for rock music.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}