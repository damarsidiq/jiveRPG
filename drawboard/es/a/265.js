var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Revela';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 265;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:826px;top:-92px;left:-38px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 88px; left: 666px; font-size: 23px; font-family: DINRegular;">El estudio revela nuevos datos sobre el tema.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 233px; left: 667px; font-size: 21px; font-family: DINRegular;">Ella revela sus secretos a nadie.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 369px; left: 670px; font-family: RalewayMedium; font-size: 22px;">Esta foto revela la belleza del lugar.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 633px; left: 1030px; font-size: 48px; font-family: Amatic_bold;">Revela</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 88px; left: 666px; font-size: 23px; font-family: DINRegular;">The study reveals new data on the topic.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 233px; left: 667px; font-size: 21px; font-family: DINRegular;">She reveals her secrets to no one.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 369px; left: 670px; font-family: RalewayMedium; font-size: 22px;">This photo reveals the beauty of the place.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 632px; left: 943px; font-size: 48px; font-family: Amatic_bold;">He/She reveals</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}