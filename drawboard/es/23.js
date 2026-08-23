var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const defaultspeed = 25;
const drabindex = 23;
const transws = ' wspeed_10';

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
export const dbtitle = 'se vuelve';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:722px;transform:rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic;">El agua se vuelve hielo cuando la temperatura baja de cero grados</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 382px; font-size: 15px; font-family: SourceSansProItalic;">Se vuelve más difícil concentrarse cuando la oficina está llena de ruido</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">Carlos se vuelve muy serio cuando habla de su familia</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 562px; left: 837px; font-size: 25px; font-family: OswaldRegular;">se vuelve</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic;">Water becomes ice when the temperature drops below zero</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 15px; font-family: SourceSansProItalic;">It becomes harder to concentrate when the office is full of noise</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">Carlos becomes very serious when he talks about his family</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 559px; left: 651px; font-size: 25px; font-family: OswaldRegular;">it becomes / he/she becomes</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
