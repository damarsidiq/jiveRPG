var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Obtuvo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 378;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 18px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 18px; font-family: AvenirLight;">'Obtuvo' el primer lugar en</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 18px; font-family: AvenirLight;">la competencia.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 19px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 19px; font-family: AvenirBook;">Ella 'obtuvo' su título universitario el</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 19px; font-family: AvenirBook;">año pasado.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 18px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 18px;">El equipo 'obtuvo' buenos resultados</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 18px; font-family: AvenirBook;">este mes.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 588px; left: 697px; font-size: 39px; font-family: Amatic_bold;">Obtuvo</div>`;

vte[vte.length]=`<div id="text_28" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 18px;"><div id="text_31" class="textshirt class" style="top: 171px; left: 455px; font-size: 18px; font-family: AvenirLight;">He got first place in</div><div id="text_32" class="textshirt class" style="top: 196px; left: 454px; font-size: 18px; font-family: AvenirLight;">the competition.</div></div>`;
vte[vte.length]=`<div id="text_33" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 19px;"><div id="text_36" class="textshirt class" style="top: 288px; left: 452px; font-size: 19px; font-family: AvenirBook;">She obtained her university degree</div><div id="text_37" class="textshirt class" style="top: 314px; left: 452px; font-size: 19px; font-family: AvenirBook;">last year.</div></div>`;
vte[vte.length]=`<div id="text_38" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 18px;"><div id="text_41" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 18px;">The team obtained good results</div><div id="text_42" class="textshirt class" style="top: 429px; left: 454px; font-size: 18px; font-family: AvenirBook;">this month.</div></div>`;
vte[vte.length]=`<div id="text_43" class="textshirt mergershirt`+transws+`" style="top: 597px; left: 456px; font-size: 15px; font-family: AvenirLight;">He/she obtained; he/she got; he/she received.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}