var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Tembloresdesmayos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 862;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:826px;top:-92px;left:-38px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 88px; left: 666px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Los síntomas incluían temblores y desmayos frecuentes.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 233px; left: 667px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Tras el susto sufrió temblores y un breve desmayo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 369px; left: 670px; font-family: BarlowLight; font-size: 20px;">El médico le preguntó si había tenido temblores o desmayos.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 632px; left: 859px; font-size: 53px; font-family: Amatic_bold;">Tembloresdesmayos</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 88px; left: 666px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">The symptoms included tremors and frequent fainting spells.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 233px; left: 667px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">After the fright he suffered tremors and a brief faint.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 369px; left: 670px; font-family: NotoSans_Condensed_LightItalic; font-size: 20px;">The doctor asked whether he had experienced tremors or fainting.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 595px; left: 820px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Tremors and fainting spells (compound reference to physical symptoms of shaking and loss of consciousness).</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}