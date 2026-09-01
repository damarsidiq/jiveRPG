var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Disminuye';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 137;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 25px; font-family: FuturaBookItalic;">El frío 'disminuye' la visibilidad. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 21px; font-family: AvenirBook;">Si estudias más, la dificultad 'disminuye'. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 18px;">La empresa 'disminuye' los costos con tecnología. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 604px; left: 864px; font-size: 48px; font-family: Amatic_bold;">Disminuye</div>`;
vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 339px; left: 120px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Disminuye</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 25px; font-family: FuturaBookItalic;">The cold decreases visibility</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 21px; font-family: AvenirBook;">If you study more, the difficulty decreases</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 18px;">The company reduces costs with technology</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 616px; left: 632px; font-size: 48px; font-family: Amatic_bold;">decreases; diminishes; lessens</div>`;
vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 339px; left: 120px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">decreases</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}