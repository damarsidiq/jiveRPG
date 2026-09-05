var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Estaba';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 299;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 20px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 20px; font-family: AvenirLight;">Estaba muy cansado después del</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 20px; font-family: AvenirLight;">trabajo.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 23px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 23px; font-family: AvenirBook;">Ella estaba en casa cuando</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 23px; font-family: AvenirBook;">llegué.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 21px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 21px;">El restaurante estaba lleno de</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 21px; font-family: AvenirBook;">gente.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 585px; left: 626px; font-size: 43px; font-family: Amatic_bold;">Estaba; estar</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 24px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 24px; font-family: AvenirLight;">I was very tired after</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 24px; font-family: AvenirLight;">work.</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 23px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 23px; font-family: AvenirBook;">She was at home when</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 23px; font-family: AvenirBook;">I arrived.</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 21px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 21px;">The restaurant was full of</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 21px; font-family: AvenirBook;">people.</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 589px; left: 511px; font-size: 32px; font-family: Amatic_bold;">Was / was being / was located.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}