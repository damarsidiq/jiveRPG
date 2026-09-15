var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'despliegue';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 481;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;top:-37px;left:3px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 67px; left: 635px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">El despliegue militar comenzó a las primeras horas de la mañana.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 161px; left: 635px; font-size: 16px; font-family: NotoSansSemiCondensedLight;">El despliegue de la tecnología 5G transformará las comunicaciones.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 264px; left: 636px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Su despliegue de habilidades impresionó a todos.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 574px; left: 979px; font-size: 49px; font-family: Amatic_bold;">despliegue</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 75px; left: 637px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">The military deployment began in the early hours of the morning.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 635px; font-size: 16px; font-family: NotoSansSemiCondensedLight;">The rollout of 5G technology will transform communications.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 637px; font-family: OpenSansSemiboldItalic; font-size: 16px;">His display of skills impressed everyone.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 666px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">Deployment; display; rollout — The act of spreading out or arranging forces or resources; an exhibition or demonstration of abilities, features, or equipment.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}