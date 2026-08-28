var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'restablecen';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 108;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 15px; font-family: SourceSansProLight;">Extractos herbales remueven impurezas, aclaran y 'restablecen' el balance de la piel</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 383px; font-size: 15px; font-family: OpenSansItalic;">Eliminan el líquido del oído medio y 'restablecen' la audición</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 16px;">Las contraseñas se 'restablecen' regularmente para garantizar la seguridad de la cuenta</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 621px; left: 787px; font-size: 40px; font-family: Amatic_bold;">restablecen</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 26px; font-family: Amatic;">Herbal extracts remove impurities, clarify, and restore the skin's balance</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 386px; font-size: 16px; font-family: DINRegular;">They eliminate fluid from the middle ear and restore hearing</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 15px;">Passwords are reset regularly to ensure account security</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 604px; left: 760px; font-size: 40px; font-family: Amatic_bold;">restore, reset</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
