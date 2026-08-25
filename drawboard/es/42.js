var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Plantear';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 42;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;
var dbbg= `<div id="dbbackg" class="textshirt imageshirt" style="top: 0px; left: 0px; width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 182px; left: 209px; font-size: 38px; font-family: Amatic; color: rgb(0, 114, 3);">El profesor va a 'plantear' un problema difícil en el examen</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 315px; left: 213px; font-size: 24px; font-family: AvenirBook; color: rgb(49, 77, 8);">Me gustaría 'plantear' una nueva estrategia para el proyecto</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 17px; color: rgb(35, 105, 14);">El diputado 'planteó' la cuestión del presupuesto en la reunión</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 590px; left: 813px; font-size: 50px; font-family: OswaldRegular; color: rgb(32, 73, 48);">Plantear</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 182px; left: 209px; font-size: 41px; font-family: Amatic; color: rgb(0, 114, 3);">The teacher is going to 'pose' a difficult problem on the exam</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 313px; left: 212px; font-size: 24px; font-family: AvenirBook; color: rgb(49, 77, 8);">I would like to 'suggest' a new strategy for the project</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(95, 9, 105);">The congressman 'raised' the budget issue in the meeting</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 605px; left: 549px; font-size: 48px; font-family: OswaldRegular; color: rgb(67, 17, 26);">to pose / suggest / raise</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
