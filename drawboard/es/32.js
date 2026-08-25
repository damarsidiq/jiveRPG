var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
export const dbtitle = 'Comportamiento';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 32;

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">El profesor felicitó al estudiante por su excelente comportamiento en clase</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">El comportamiento del mercado financiero es difícil de predecir</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">Estudian el comportamiento de los elefantes en su hábitat natural</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 513px; left: 859px; font-size: 47px; font-family: RalewayMedium; color: rgb(255, 253, 251);">comportamiento</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">The teacher praised the student for his excellent behavior in class</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">The behavior of the financial market is difficult to predict</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">They study the behavior of elephants in their natural habitat</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 513px; left: 859px; font-size: 38px; font-family: RalewayMedium; color: rgb(255, 253, 251);">behavior / conduct</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
