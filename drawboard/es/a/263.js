var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Ocurre';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 263;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:826px;top:-92px;left:-38px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 88px; left: 666px; font-size: 23px; font-family: DINRegular;">¿Qué ocurre aquí?</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 233px; left: 667px; font-size: 21px; font-family: DINRegular;">No ocurre nada de importancia.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 369px; left: 670px; font-family: RalewayMedium; font-size: 22px;">Cuando ocurre algo malo, aprendemos.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 625px; left: 1027px; font-size: 48px; font-family: Amatic_bold;">Ocurre</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 88px; left: 666px; font-size: 23px; font-family: DINRegular;">What is happening here?</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 233px; left: 667px; font-size: 21px; font-family: DINRegular;">Nothing important occurs.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 369px; left: 670px; font-family: RalewayMedium; font-size: 22px;">When something bad happens, we learn.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 630px; left: 857px; font-size: 48px; font-family: Amatic_bold;">It happens / It occurs</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}