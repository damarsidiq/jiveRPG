var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'apegos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 580;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/stickies-725930.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 854px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_53" class="textshirt mergershirt" style="top: 221px; left: 434px; font-size: 13px; font-family: MetropolLightLight; transform: rotate(-2deg);">Los apegos emocionales de la infancia moldean nuestra personalidad.</div>`;
vt[vt.length]=`<div id="text_54" class="textshirt mergershirt" style="top: 315px; left: 441px; font-size: 15px; font-family: MetropolLightLight; transform: rotate(-2deg);">Tiene muchos apegos materiales que le dificultan mudarse.</div>`;
vt[vt.length]=`<div id="text_55" class="textshirt mergershirt" style="top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 15px; transform: rotate(-2deg);">Los apegos familiares son difíciles de romper.</div>`;
vt[vt.length]=`<div id="text_56" class="textshirt mergershirt" style="top: 581px; left: 763px; font-size: 49px; font-family: Amatic_bold; transform: rotate(-2deg);">apegos</div>`;
vte[vte.length]=`<div id="text_53" class="textshirt mergershirt`+transws+`" style="top: 221px; left: 434px; font-size: 16px; font-family: MetropolLightLight; transform: rotate(-2deg);">Childhood emotional attachments shape our personality.</div>`;
vte[vte.length]=`<div id="text_54" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 441px; font-size: 15px; font-family: MetropolLightLight; transform: rotate(-2deg);">He has many material attachments that make moving difficult.</div>`;
vte[vte.length]=`<div id="text_55" class="textshirt mergershirt`+transws+`" style="top: 397px; left: 446px; font-family: OpenSansSemiboldItalic; font-size: 16px; transform: rotate(-2deg);">Family attachments are hard to break.</div>`;
vte[vte.length]=`<div id="text_56" class="textshirt mergershirt`+transws+`" style="width: 398px; white-space: normal; top: 503px; left: 449px; font-size: 17px; font-family: MetropolLightItalic; transform: rotate(-2deg);">Attachments; bonds; fixations — Strong emotional connections or dependencies on people, objects, or ideas; the state of being emotionally tied to something or someone.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}