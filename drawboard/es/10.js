var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'Secuestra';
const defaultspeed = 25;
const drabindex = 10;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 188px; left: 202px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(150, 133, 5);">Un grupo armado 'secuestra' a dos periodistas en la zona rural.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 318px; left: 237px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">El virus 'secuestra' el sistema operativo y pide un rescate</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 211px; font-family: DOTCIRFULBold; font-size: 25px; color: rgb(8, 91, 109);" courier="" new";="" font-size:="" 19px;="" color:="" rgb(88,="" 10,="" 10);"="">Secuestra a Lauren, las cosas salen mal, aún intenta conseguir el dinero...</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt wspeed_90" style="top: 606px; left: 798px; font-size: 34px; font-family: Museo_Slab_100italic;">Secuestra</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 192px; left: 223px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(150, 133, 5);">An armed group 'kidnaps' two journalists in the rural area.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 318px; left: 237px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">The virus 'hijacks' the operating system and demands a ransom.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 211px; font-family: DOTCIRFULBold; font-size: 25px; color: rgb(8, 91, 109);" courier="" new";="" font-size:="" 19px;="" color:="" rgb(88,="" 10,="" 10);"="">She kidnaps Lauren, things goes wrong, she still tries to get the money...</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt wspeed_90" style="top: 599px; left: 595px; font-size: 34px; font-family: Museo_Slab_100italic;">kidnaps / abducts, hijacks</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
