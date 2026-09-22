var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'adelante';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 942;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/blackboard-2618793.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 769px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">Puede pasar adelante; la reunión ya ha comenzado.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">El proyecto continúa adelante a pesar de los obstáculos.</div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">Dé un paso adelante y presente su propuesta con claridad.</div>`;
vt[vt.length]=`<div id="text_24" class="textshirt mergershirt" style="top: 538px; left: 972px; font-size: 49px; font-family: Amatic_bold; color: rgb(255, 255, 255);">adelante</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">You may come in; the meeting has already begun.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">The project continues to move forward despite the obstacles.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">Take a step forward and present your proposal clearly.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="white-space: normal; width: 500px; top: 476px; left: 639px; font-size: 17px; font-family: MetropolLightLight; color: rgb(255, 255, 255);">Adverb meaning “forward,” “ahead,” or “onward.” It can also function as an interjection inviting someone to enter or proceed (“come in” or “go ahead”). The term indicates progression in space, time, or action, or grants permission to continue.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}