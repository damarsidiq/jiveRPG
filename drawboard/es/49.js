var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Teme';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 49;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;
var dbbg= `<div id="dbbackg" class="textshirt imageshirt" style="top: 0px; left: 0px; width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 182px; left: 209px; font-size: 38px; font-family: Amatic; color: rgb(0, 114, 3);">Teme que nadie entienda su decisión</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 315px; left: 213px; font-size: 26px; font-family: AvenirBook; color: rgb(49, 77, 8);">Mi madre teme a las alturas</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 22px; color: rgb(35, 105, 14);">Ella teme que la tormenta arruine los planes de la boda al aire libre</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 625px; left: 872px; font-size: 50px; font-family: OswaldRegular; color: rgb(32, 73, 48);">Teme</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 182px; left: 209px; font-size: 41px; font-family: Amatic; color: rgb(0, 114, 3);">He/she fears that no one will understand his decision</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 313px; left: 212px; font-size: 24px; font-family: AvenirBook; color: rgb(49, 77, 8);">My mother fears heights</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 24px; color: rgb(95, 9, 105);">She fears that the storm will ruin the outdoor wedding plans</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 604px; left: 640px; font-size: 48px; font-family: OswaldRegular; color: rgb(67, 17, 26);">fears / he/she fears</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
