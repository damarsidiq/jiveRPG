var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Lisa';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 101;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 29px; font-family: Amatic;">La superficie de la mesa quedó 'lisa y plana' después de lijarla bien</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 288px; left: 400px; font-size: 19px; font-family: AvenirBook;">Necesito una pared 'lisa y plana' para instalar el estante</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 17px;">La superficie de la mesa de madera es totalmente lisa y plana</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 612px; left: 768px; font-size: 40px; font-family: Amatic_bold;">Lisa y plana</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 29px; font-family: Amatic;">The table's surface was left 'smooth and flat' after sanding it well</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 395px; font-size: 17px; font-family: AvenirBook;">I need a 'smooth and flat' wall to install the shelf</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 17px;">The surface of the wooden table is completely smooth and flat</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 611px; left: 737px; font-size: 40px; font-family: Amatic_bold;">smooth and flat</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
