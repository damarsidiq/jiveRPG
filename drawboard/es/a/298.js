var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Entero';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 298;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 17px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 17px; font-family: AvenirLight;">Me comí el pastel</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 17px; font-family: AvenirLight;">entero.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 18px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 18px; font-family: AvenirBook;">El edificio entero quedó sin</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 18px; font-family: AvenirBook;">electricidad.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 18px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 18px;">Quiero pasar el día entero</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 18px; font-family: AvenirBook;">contigo.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 581px; left: 686px; font-size: 46px; font-family: Amatic_bold;">Entero</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 20px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 20px; font-family: AvenirLight;">I ate the entire</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 20px; font-family: AvenirLight;">cake.</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 18px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 18px; font-family: AvenirBook;">The entire building was left</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 18px; font-family: AvenirBook;">without electricity.</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 18px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 18px;">I want to spend the whole</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 18px; font-family: AvenirBook;">day with you.</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 582px; left: 476px; font-size: 43px; font-family: Amatic_bold;">Whole, entire, complete.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}