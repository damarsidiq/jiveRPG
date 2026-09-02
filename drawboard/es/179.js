var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Desvía';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 179;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 15px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 15px; font-family: AvenirLight;">El camión 'desvía' el tráfico hacia</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 15px; font-family: AvenirLight;">otra calle</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 15px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 15px; font-family: AvenirBook;">El gerente 'desvía' fondos para un</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 15px; font-family: AvenirBook;">proyecto secreto</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 14px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Ella 'desvía' la conversación cuando le preguntan</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 14px; font-family: AvenirBook;">por su pasado</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 589px; left: 703px; font-size: 36px; font-family: Amatic_bold;">Desvía</div>`;


vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 15px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 15px; font-family: AvenirLight;">The truck diverts traffic to</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 15px; font-family: AvenirLight;">another street</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 15px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 15px; font-family: AvenirBook;">The manager diverts funds to a</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 15px; font-family: AvenirBook;">secret project</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 14px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">She steers the conversation away when they</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 14px; font-family: AvenirBook;">ask about her past</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 586px; left: 492px; font-size: 36px; font-family: Amatic_bold;">diverts; deflects; turns away</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}