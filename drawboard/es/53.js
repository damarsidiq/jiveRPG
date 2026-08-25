var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
export const dbtitle = 'Despejar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 53;


var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">Necesitamos despejar el camino de rocas</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 206px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">Voy a despejar mi mente antes de emprender el viaje</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">El viento fuerte comenzó a despejar las nubes del cielo</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 495px; left: 843px; font-size: 52px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Despejar</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">We need to clear the path of rocks</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 206px; font-size: 18px; font-family: AvenirBook; color: rgb(255, 255, 255);">I'm going to clear my mind before undertaking the journey</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">The strong wind began to clear the clouds from the sky</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 495px; left: 843px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">to clear</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
