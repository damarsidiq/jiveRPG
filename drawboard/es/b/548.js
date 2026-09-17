var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'enredarse';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 548;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/blackboard-2618793.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 769px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">Se enredarse en las sábanas mientras dormía.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">No quiero enredarse en este conflicto político.</div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">El pescador se enredarse en las redes.</div>`;
vt[vt.length]=`<div id="text_24" class="textshirt mergershirt" style="top: 523px; left: 983px; font-size: 49px; font-family: Amatic_bold; color: rgb(255, 255, 255);">enredarse</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">He got tangled in the sheets while sleeping.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">I don't want to get entangled in this political conflict.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">The fisherman got caught in the nets.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="white-space: normal; width: 500px; top: 513px; left: 627px; font-size: 17px; font-family: MetropolLightLight; color: rgb(255, 255, 255);">To get tangled; to get entangled — (Reflexive form) To become twisted or caught in something; to become involved in a complicated or difficult situation.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}