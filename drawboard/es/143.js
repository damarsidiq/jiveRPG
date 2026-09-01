var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Comprender';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 143;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 344px; left: 102px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Comprender</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">Necesito tiempo para 'comprender' esta lección. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 216px; left: 561px; font-size: 14px; font-family: AvenirBook;">Es importante 'comprender' las reglas antes de jugar. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">No puedo 'comprender' por qué hizo eso. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 638px; left: 885px; font-size: 40px; font-family: Amatic_bold;">Comprender</div>`;


vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 339px; left: 95px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">to understand</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">I need time to understand this lesson</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">It's important to understand the rules before playing</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">I can't understand why he did that</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 644px; left: 607px; font-size: 36px; font-family: Amatic_bold;">to understand; to comprehend; to include</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}