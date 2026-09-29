var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'empujones';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1092;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">Los empujones en el metro eran inevitables cada mañana.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 206px; font-size: 24px; font-family: MetropolRegular; color: rgb(255, 255, 255);">Los niños avanzaban a empujones hacia la salida.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 22px; color: rgb(255, 255, 255);">Recibió varios empujones durante el concierto abarrotado.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 510px; left: 1013px; font-size: 59px; font-family: Amatic_bold; color: rgb(255, 255, 255);">empujones</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 124px; left: 198px; font-size: 43px; font-family: Amatic; color: rgb(255, 255, 255);">The pushing and shoving on the subway was inevitable every morning.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 206px; font-size: 19px; font-family: MetropolMedium; color: rgb(255, 255, 255);">The children moved forward with shoves toward the exit.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 21px; color: rgb(255, 255, 255);">He received several pushes during the crowded concert.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="max-width: 600px; white-space: normal; top: 496px; left: 634px; font-size: 23px; font-family: Carlito; color: rgb(255, 255, 255);">Pushes, shoves, or jolts; plural of "empujón," describing forceful physical pushes or rough movements through a crowd.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}