var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Bloqueado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 110;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 158px; left: 354px; font-size: 25px; font-family: Amatic;">Mi cuenta quedó 'bloqueada' después de tres intentos fallidos de inicio de sesión.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 354px; font-size: 16px; font-family: AvenirBook;">El tráfico está totalmente 'bloqueado' en la autopista debido a un accidente.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 17px;">El progreso del proyecto está 'bloqueado' por falta de presupuesto.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 504px; left: 788px; font-size: 40px; font-family: Amatic_bold;">Bloqueado</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 158px; left: 354px; font-size: 34px; font-family: Amatic;">My account got blocked after three failed login attempts.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 354px; font-size: 18px; font-family: AvenirBook;">Traffic is totally blocked on the highway due to an accident.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 17px;">The project progress is blocked due to lack of budget.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 501px; left: 811px; font-size: 40px; font-family: Amatic_bold;">Blocked</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
