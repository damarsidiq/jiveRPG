var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'Capas';
const defaultspeed = 25;
const drabindex = 13;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 199px; left: 218px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(210, 110, 15);">Para el frío extremo, es mejor vestirse con ropa en 'capas' que usar un solo abrigo grueso.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 319px; left: 234px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">El pastel de chocolate tiene 'capas' de bizcocho, crema y ganache.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 206px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(8, 91, 109);">El geólogo estudió las 'capas' de roca sedimentaria para entender la historia del valle.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 596px; left: 900px; font-size: 34px; font-family: Museo_Slab_100italic;">capas</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 199px; left: 218px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(210, 110, 15);">For extreme cold, it's better to dress in layered clothing than to wear one thick coat.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 234px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">The chocolate cake has layers of sponge, cream, and ganache.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 207px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(8, 91, 109);">The geologist studied the sedimentary rock layers to understand the valley's history.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 595px; left: 748px; font-size: 34px; font-family: Museo_Slab_100italic;">layered / layers</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
