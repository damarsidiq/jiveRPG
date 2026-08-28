var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'se plantea';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 98;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 14px; font-family: FuturaBookItalic;">Cuando se plantea esta duda, debemos revisar toda la estrategia anterior</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 14px; font-family: AvenirBook;">La pregunta de cómo escalar se plantea con urgencia tras el éxito inicial</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Se plantea una nueva estrategia para resolver el problema financiero</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 604px; left: 876px; font-size: 48px; font-family: Amatic_bold;">se plantea</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 558px; font-size: 26px; font-family: Amatic;">When this doubt arises, we must review the entire previous strategy</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 557px; font-size: 13px; font-family: AvenirBook;">The question of how to scale is posed with urgency after the initial success</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 558px; font-family: OpenSansSemiboldItalic; font-size: 14px;">A new strategy is being considered to solve the financial problem</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 595px; left: 581px; font-size: 31px; font-family: Amatic_bold;">Is raised / Is proposed / Is posed / Arises. -- plantear</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
