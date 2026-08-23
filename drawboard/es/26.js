var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const defaultspeed = 25;
const drabindex = 26;
const transws = ' wspeed_10';

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
export const dbtitle = 'el peso corporal';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:722px;transform:rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 252px; left: 360px; font-size: 18px; font-family: SourceSansProItalic;">El peso corporal ideal varía según la altura y la edad de cada persona</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 351px; left: 389px; font-size: 15px; font-family: SourceSansProItalic;">Muchos ejercicios de calistenia utilizan el peso corporal como resistencia</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">El médico le recomendó monitorear el peso corporal semanalmente</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 539px; left: 768px; font-size: 25px; font-family: OswaldRegular;">el peso corporal</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 252px; left: 360px; font-size: 18px; font-family: SourceSansProItalic;">Ideal body weight varies according to each person's height and age</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 351px; left: 389px; font-size: 15px; font-family: SourceSansProItalic;">Many calisthenics exercises use body weight as resistance</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">The doctor recommended monitoring body weight weekly</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 537px; left: 809px; font-size: 25px; font-family: OswaldRegular;">body weight</div>`;




dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
