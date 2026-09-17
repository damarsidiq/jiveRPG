var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'confinamiento';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 563;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/stickies-725930.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 854px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_53" class="textshirt mergershirt" style="top: 221px; left: 434px; font-size: 15px; font-family: MetropolLightLight; transform: rotate(-2deg);">El confinamiento durante la pandemia fue difícil para muchos.</div>`;
vt[vt.length]=`<div id="text_54" class="textshirt mergershirt" style="top: 315px; left: 441px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">Pasó meses en confinamiento solitario en la prisión.</div>`;
vt[vt.length]=`<div id="text_55" class="textshirt mergershirt" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 15px; transform: rotate(-2deg);">El confinamiento del animal en una jaula pequeña era cruel.</div>`;
vt[vt.length]=`<div id="text_56" class="textshirt mergershirt" style="top: 587px; left: 660px; font-size: 49px; font-family: Amatic_bold; transform: rotate(-2deg);">confinamiento</div>`;
vte[vte.length]=`<div id="text_53" class="textshirt mergershirt`+transws+`" style="top: 221px; left: 434px; font-size: 15px; font-family: MetropolLightLight; transform: rotate(-2deg);">The lockdown during the pandemic was difficult for many.</div>`;
vte[vte.length]=`<div id="text_54" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 441px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">He spent months in solitary confinement in prison.</div>`;
vte[vte.length]=`<div id="text_55" class="textshirt mergershirt`+transws+`" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 16px; transform: rotate(-2deg);">The confinement of the animal in a small cage was cruel.</div>`;
vte[vte.length]=`<div id="text_56" class="textshirt mergershirt`+transws+`" style="width: 398px; white-space: normal; top: 482px; left: 450px; font-size: 21px; font-family: MetropolLightItalic; transform: rotate(-2deg);">Confinement; lockdown; imprisonment — The state of being restricted to a certain place; isolation or restriction of movement, whether voluntary or imposed.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}