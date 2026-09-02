var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Esquizofrénico';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 175;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 585px; left: 607px; font-size: 40px; font-family: Amatic_bold;">Esquizofrénico</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 194px; left: 452px; width: 228px; height: 55px;"><div id="text_14" class="textshirt class" style="top: 194px; left: 453px; font-size: 14px; font-family: AvenirLight;">El paciente 'esquizofrénico' sigue un</div><div id="text_15" class="textshirt class" style="top: 219px; left: 452px; font-size: 14px; font-family: AvenirLight;"> tratamiento con medicamentos</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 287px; left: 452px; width: 299px; height: 56px;"><div id="text_4" class="textshirt class" style="top: 287px; left: 452px; font-size: 14px; font-family: AvenirBook;">Es difícil convivir con un familiar 'esquizofrénico'</div><div id="text_17" class="textshirt class" style="top: 313px; left: 452px; font-size: 14px; font-family: AvenirBook;"> sin apoyo médico</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 407px; left: 452px; width: 307px; height: 54px;"><div id="text_8" class="textshirt class" style="top: 407px; left: 452px; font-family: OpenSansSemiboldItalic; font-size: 12px;">El caso presentaba un comportamiento 'esquizofrénico', </div><div id="text_19" class="textshirt class" style="top: 431px; left: 452px; font-size: 14px; font-family: AvenirBook;">lleno de contradicciones</div></div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 194px; left: 452px; width: 228px; height: 55px;"><div id="text_14" class="textshirt class" style="top: 194px; left: 453px; font-size: 14px; font-family: AvenirLight;">The schizophrenic patient follows</div><div id="text_15" class="textshirt class" style="top: 219px; left: 452px; font-size: 14px; font-family: AvenirLight;">a treatment with medication</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 452px; width: 299px; height: 56px;"><div id="text_4" class="textshirt class" style="top: 287px; left: 452px; font-size: 14px; font-family: AvenirBook;">It's hard to live with</div><div id="text_17" class="textshirt class" style="top: 313px; left: 452px; font-size: 14px; font-family: AvenirBook;">a schizophrenic relative without medical support</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 452px; width: 307px; height: 54px;"><div id="text_8" class="textshirt class" style="top: 407px; left: 452px; font-family: OpenSansSemiboldItalic; font-size: 12px;">The case presented schizophrenic</div><div id="text_19" class="textshirt class" style="top: 431px; left: 452px; font-size: 14px; font-family: AvenirBook;">behavior, full of contradictions</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 579px; left: 549px; font-size: 40px; font-family: Amatic_bold;">schizophrenic (male)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}