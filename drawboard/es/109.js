var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'mania';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 109;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 15px; font-family: SourceSansProLight;">Ella tiene la manía de organizar sus libros por color</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 383px; font-size: 15px; font-family: OpenSansItalic;">María tiene la manía de limpiar la casa todos los días, aunque no esté sucia</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 15px;">Juan tiene la manía de corregir a todos cuando hablan, incluso en conversaciones informales</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 610px; left: 831px; font-size: 40px; font-family: Amatic_bold;">mania</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 32px; font-family: Amatic;">She has the habit of organizing her books by color</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 386px; font-size: 16px; font-family: DINRegular;">María has a habit of cleaning the house every day, even when it isn't dirty</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 13px;">Juan has a habit of correcting everyone when they speak, even in casual conversations</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 605px; left: 504px; font-size: 40px; font-family: Amatic_bold;">habit, obsession,mania, craze, hobby</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
