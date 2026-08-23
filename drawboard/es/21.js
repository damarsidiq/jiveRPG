var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;


//to adjust
const defaultspeed = 25;
const drabindex = 22;
const transws = ' wspeed_10';

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
export const dbtitle = 'se debilita';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:722px;transform:rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';




vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic;">La señal del wifi se debilita cuanto más nos alejamos del router</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic;">Se debilita su resistencia física después de semanas sin entrenar</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">A medida que la tormenta se debilita, los vientos comienzan a calmarse</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 566px; left: 794px; font-size: 31px; font-family: OswaldRegular;">se debilita</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic;">The wifi signal weakens the farther we get from the router</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic;">His physical resistance weakens after weeks without training</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">As the storm weakens, the winds begin to calm down</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 557px; left: 648px; font-size: 25px; font-family: OswaldRegular;">it weakens / he/she weakens</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
