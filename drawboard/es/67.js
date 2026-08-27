var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Donde la antorcha falla';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 67;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/coffee-2425303_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 718px; top: 0px; left: 0px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 73px; left: 397px; font-size: 29px; font-family: Amatic; color: rgb(255, 255, 255);">Nos adentramos donde la antorcha falla y reina la oscuridad</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">En esa parte de la cueva, es donde la antorcha falla</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 236px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 14px; color: rgb(255, 255, 255);">Necesitamos donde la antorcha falla un sistema de iluminación de respaldo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 341px; left: 661px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Donde la antorcha falla</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 397px; font-size: 29px; font-family: Amatic; color: rgb(255, 255, 255);">We go where the torch fails and darkness reigns.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">In that part of the cave, it's where the torch fails</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 236px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 14px; color: rgb(255, 255, 255);">We need a backup lighting system where the torch fails</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 337px; left: 694px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">where the torch fails</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
