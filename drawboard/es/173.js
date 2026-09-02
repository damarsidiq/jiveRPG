var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Apariencia';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 173;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 452px; font-size: 16px; font-family: AvenirLight;">No juzgues a las personas por su 'apariencia'</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 443px; font-size: 13px; font-family: AvenirBook;">Cuida mucho su 'apariencia' en las entrevistas de trabajo</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 440px; font-family: OpenSansSemiboldItalic; font-size: 13px;">Bajo su 'apariencia' tranquila, se escondía un gran enojo</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 589px; left: 682px; font-size: 29px; font-family: Amatic_bold;">Apariencia</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 465px; font-size: 16px; font-family: AvenirLight;">Don't judge people by their appearance</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 443px; font-size: 14px; font-family: AvenirBook;">He cares a lot about his appearance in job interviews</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 440px; font-family: OpenSansSemiboldItalic; font-size: 13px;">Beneath his calm appearance, a great anger was hidden</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 587px; left: 543px; font-size: 29px; font-family: Amatic_bold;">appearance; looks; semblance</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}