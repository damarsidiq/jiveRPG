var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Alaba';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 163;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 439px; font-size: 14px; font-family: AvenirLight;">El profesor 'alaba' a los estudiantes que se esfuerzan. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 285px; left: 438px; font-size: 14px; font-family: AvenirBook;">Todo el mundo 'alaba' la calidad de su trabajo. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 438px; font-family: OpenSansSemiboldItalic; font-size: 15px;">La crítica 'alaba' su voz en cada concierto. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 586px; left: 702px; font-size: 40px; font-family: Amatic_bold;">Alaba</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 439px; font-size: 14px; font-family: AvenirLight;">The teacher praises students who make an effort</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 285px; left: 438px; font-size: 14px; font-family: AvenirBook;">Everyone praises the quality of his work</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 406px; left: 438px; font-family: OpenSansSemiboldItalic; font-size: 15px;">The critics praise her voice at every concert</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 585px; left: 586px; font-size: 40px; font-family: Amatic_bold;">praises; glorifies</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}