var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'salvaje';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 882;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 330px; left: 849px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 331px; left: 850px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 339px; left: 858px;"></div></div>`;
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/ipad-645564.png';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 909.645px; height: 700px;"><img style="width: 909.645px; height: 700px;" src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 95px; font-size: 26px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">El león es un animal salvaje que habita en las sabanas.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 200px; left: 97px; font-size: 21px; font-family: Carlito; color: rgb(255, 255, 255);">Encontraron una isla remota cubierta por una naturaleza salvaje.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 327px; left: 98px; font-family: OswaldLight; font-size: 27px; color: rgb(255, 255, 255);">Ese equipo de fútbol mostró un estilo de juego salvaje y agresivo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 558px; left: 671px; font-size: 65px; font-family: Amatic_bold; color: rgb(255, 255, 255);">salvaje</div>`;
vte[vte.length]=`<div id="text_87" class="textshirt mergershirt`+transws+`" style="top: 91px; left: 100px; font-size: 26px; font-family: BarlowExtraLight; color: rgb(255, 255, 255);">The lion is a wild animal that lives in the savannas.</div>`;
vte[vte.length]=`<div id="text_88" class="textshirt mergershirt`+transws+`" style="top: 205px; left: 101px; font-size: 22px; font-family: Carlito; color: rgb(255, 255, 255);">They found a remote island covered in wild nature.</div>`;
vte[vte.length]=`<div id="text_89" class="textshirt mergershirt`+transws+`" style="top: 325px; left: 104px; font-family: OswaldLight; font-size: 25px; color: rgb(255, 255, 255);">That soccer team showed a wild and aggressive style of play.</div>`;
vte[vte.length]=`<div id="text_90" class="textshirt mergershirt`+transws+`" style="white-space: normal; text-align: right; width: 596px; top: 521px; left: 216px; font-size: 28px; font-family: BarlowLight; color: rgb(255, 255, 255);">Adjective. Means "wild," "savage," "untamed," or "feral." It can refer to undomesticated animals, uncultivated landscapes, or untamed behavior.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}