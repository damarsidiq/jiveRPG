var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Agitó';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 181;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 25px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 25px; font-family: AvenirLight;">'Agitó' la botella antes de</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 25px; font-family: AvenirLight;">abrirla</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 23px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 23px; font-family: AvenirBook;">El viento 'agitó' las hojas de</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 23px; font-family: AvenirBook;">los árboles</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 20px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 20px;">La noticia 'agitó' a toda</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 20px; font-family: AvenirBook;">la comunidad</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 591px; left: 702px; font-size: 35px; font-family: Amatic_bold;">Agitó</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 23px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 23px; font-family: AvenirLight;">He shook the bottle before</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 23px; font-family: AvenirLight;">opening it</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 22px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 22px; font-family: AvenirBook;">The wind stirred the leaves of</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 22px; font-family: AvenirBook;">the trees</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 23px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 23px;">The news stirred up the</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 23px; font-family: AvenirBook;">entire community</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 587px; left: 456px; font-size: 32px; font-family: Amatic_bold;">shook; stirred; agitated (past tense)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}