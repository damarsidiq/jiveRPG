var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
export const dbtitle = 'Derribaría';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 27;

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 138px; left: 199px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(255, 253, 251);">Un golpe tan fuerte derribaría a cualquier boxeador del ring</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 238px; left: 201px; font-size: 21px; font-family: Gotham; color: rgb(255, 253, 251);">La tormenta derribaría el viejo árbol si los vientos siguieran aumentando</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 355px; left: 201px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(255, 253, 251);">El gobierno derribaría el edificio histórico para construir una autopista</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 520px; left: 928px; font-size: 39px; font-family: OpenSansSemiboldItalic; color: rgb(255, 253, 251);">derribaría</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 199px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(255, 253, 251);">Such a strong blow would knock down any boxer from the ring</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 238px; left: 201px; font-size: 21px; font-family: Gotham; color: rgb(255, 253, 251);">The storm would knock down the old tree if the winds kept increasing</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 355px; left: 201px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(255, 253, 251);">The government would demolish the historic building to build a highway</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 520px; left: 584px; font-size: 31px; font-family: OpenSansSemiboldItalic; color: rgb(255, 253, 251);">he/she/it would knock down / would demolish</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
