var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'fijo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 544;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/blackboard-2618793.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 769px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">Tiene un trabajo fijo con buenos beneficios.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">La mirada fija en el horizonte revelaba su determinación.</div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">El precio es fijo, no hay posibilidad de negociación.</div>`;
vt[vt.length]=`<div id="text_24" class="textshirt mergershirt" style="top: 530px; left: 1007px; font-size: 49px; font-family: Amatic_bold; color: rgb(255, 255, 255);">fijo</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">He has a permanent job with good benefits.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">His fixed gaze on the horizon revealed his determination.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">The price is fixed, there is no possibility of negotiation.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="text-align: right; white-space: normal; width: 500px; top: 513px; left: 627px; font-size: 17px; font-family: MetropolLightLight; color: rgb(255, 255, 255);">Fixed; permanent; steady — Not moving or changing; stable and constant; established or set firmly in place.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}