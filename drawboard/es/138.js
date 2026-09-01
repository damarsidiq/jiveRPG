var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Filtra';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 138;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">La aplicación 'filtra' los mensajes no deseados. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">El café se 'filtra' lentamente por la máquina. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Esa red 'filtra' las impurezas del agua. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 625px; left: 917px; font-size: 48px; font-family: Amatic_bold;">filtra</div>`;
vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 337px; left: 158px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Filtra</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">The app filters unwanted messages</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">The coffee filters slowly through the machine</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">That net filters impurities from the water</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 642px; left: 647px; font-size: 40px; font-family: Amatic_bold;">filters; leaks (e.g., information)</div>`;
vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 337px; left: 158px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">filters</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}