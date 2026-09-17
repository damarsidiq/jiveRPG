var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'reían';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 570;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/stickies-725930.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 854px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_53" class="textshirt mergershirt" style="top: 221px; left: 434px; font-size: 16px; font-family: MetropolLightLight; transform: rotate(-2deg);">Los niños reían a carcajadas mientras jugaban en el parque.</div>`;
vt[vt.length]=`<div id="text_54" class="textshirt mergershirt" style="top: 315px; left: 441px; font-size: 18px; font-family: MetropolLightLight; transform: rotate(-2deg);">Reían tanto de la película que les dolía el estómago.</div>`;
vt[vt.length]=`<div id="text_55" class="textshirt mergershirt" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 15px; transform: rotate(-2deg);">Aunque la situación era difícil, ellos reían para no llorar.</div>`;
vt[vt.length]=`<div id="text_56" class="textshirt mergershirt" style="top: 585px; left: 773px; font-size: 49px; font-family: Amatic_bold; transform: rotate(-2deg);">reían</div>`;
vte[vte.length]=`<div id="text_53" class="textshirt mergershirt`+transws+`" style="top: 221px; left: 434px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">The children laughed heartily while playing in the park.</div>`;
vte[vte.length]=`<div id="text_54" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 441px; font-size: 15px; font-family: MetropolLightLight; transform: rotate(-2deg);">They laughed so much at the movie that their stomachs hurt.</div>`;
vte[vte.length]=`<div id="text_55" class="textshirt mergershirt`+transws+`" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 14px; transform: rotate(-2deg);">Although the situation was difficult, they laughed so as not to cry.</div>`;
vte[vte.length]=`<div id="text_56" class="textshirt mergershirt`+transws+`" style="width: 398px; white-space: normal; top: 477px; left: 453px; font-size: 20px; font-family: MetropolLightItalic; transform: rotate(-2deg);">They laughed; they were laughing — (Third person plural imperfect of *reír*) To express amusement, joy, or scorn through vocal sounds and facial expressions; to make sounds indicating happiness or humor.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}