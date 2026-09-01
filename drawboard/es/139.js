var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Relajan';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 139;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 337px; left: 158px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Relajan</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">Estos masajes 'relajan' los músculos</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">Los sonidos del mar 'relajan' la mente</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Las vacaciones te 'relajan' después de un año difícil</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 639px; left: 907px; font-size: 40px; font-family: Amatic_bold;">Relajan</div>`;


vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 349px; left: 123px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">they relax</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">These massages relax the muscles</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">The sounds of the sea relax the mind</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Vacations relax you after a difficult year</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 638px; left: 818px; font-size: 40px; font-family: Amatic_bold;">they relax; loosen</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}