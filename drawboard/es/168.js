var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Dictados';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 168;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 454px; font-size: 12px; font-family: AvenirLight;">Los 'dictados' del profesor ayudan a mejorar la ortografía</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 453px; font-size: 13px; font-family: AvenirBook;">Los 'dictados' de la conciencia no se pueden ignorar</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Hicimos tres 'dictados' durante la clase de español</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 591px; left: 688px; font-size: 35px; font-family: Amatic_bold;">Dictados</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 454px; font-size: 15px; font-family: AvenirLight;">The teacher's dictations help improve spelling</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 453px; font-size: 15px; font-family: AvenirBook;">The dictates of conscience cannot be ignored</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">We did three dictations during Spanish class</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 588px; left: 492px; font-size: 35px; font-family: Amatic_bold;">dictations; dictates; precepts</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}