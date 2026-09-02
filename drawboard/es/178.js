var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Vinculante';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 178;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 15px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 15px; font-family: AvenirLight;">El acuerdo firmado es legalmente 'vinculante'</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 15px; font-family: AvenirLight;">para ambas partes</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 15px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 15px; font-family: AvenirBook;">Esta decisión es 'vinculante' para todos los</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 15px; font-family: AvenirBook;">miembros del comité</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 14px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">El contrato incluye cláusulas 'vinculantes' que no</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 14px; font-family: AvenirBook;">se pueden modificar</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 586px; left: 653px; font-size: 39px; font-family: Amatic_bold;">Vinculante</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 15px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 15px; font-family: AvenirLight;">The signed agreement is legally binding</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 15px; font-family: AvenirLight;">for both parties</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 15px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 15px; font-family: AvenirBook;">This decision is binding for all members</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 15px; font-family: AvenirBook;">of the committee</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 14px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">The contract includes binding clauses that</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 14px; font-family: AvenirBook;">cannot be modified</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 586px; left: 476px; font-size: 36px; font-family: Amatic_bold;">binding (e.g., legally binding)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}