var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const defaultspeed = 25;
const drabindex = 24;
const transws = ' wspeed_10';

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
export const dbtitle = 'Estando';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:722px;transform:rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 252px; left: 360px; font-size: 18px; font-family: SourceSansProItalic;">Estando enfermo, decidió quedarse en casa y descansar todo el fin de semana</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 346px; left: 400px; font-size: 15px; font-family: SourceSansProItalic;">Estando de vacaciones en París, visitaron la Torre Eiffel tres veces</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">Estando tan cerca del océano, no pudimos resistir la tentación de nadar</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 556px; left: 840px; font-size: 25px; font-family: OswaldRegular;">estando</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 252px; left: 360px; font-size: 18px; font-family: SourceSansProItalic;">Being sick, he decided to stay home and rest all weekend</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 346px; left: 400px; font-size: 15px; font-family: SourceSansProItalic;">While being on vacation in Paris, they visited the Eiffel Tower three times</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">Being so close to the ocean, we couldn't resist the temptation to swim</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 553px; left: 750px; font-size: 25px; font-family: OswaldRegular;">being / while being</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
