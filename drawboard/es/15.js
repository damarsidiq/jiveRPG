var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'empujan';
const defaultspeed = 25;
const drabindex = 15;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 197px; left: 232px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(71, 40, 10);">Los aficionados empujan con fuerza para entrar al estadio antes del concierto.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 324px; left: 245px; font-size: 21px; font-family: Gotham; color: rgb(38, 27, 101);">Sus padres siempre la empujan a dar lo mejor de sí en la escuela.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 443px; left: 258px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(109, 8, 75);">Las olas empujan los barcos pequeños hacia la orilla durante la tormenta.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 593px; left: 811px; font-size: 39px; font-family: OpenSansSemiboldItalic;">empujan</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 195px; left: 431px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(71, 40, 10);">The fans push hard to get into the stadium before the concert.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 324px; left: 306px; font-size: 21px; font-family: Gotham; color: rgb(38, 27, 101);">Her parents always push her to do her best in school.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 443px; left: 222px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(109, 8, 75);">The waves push the small boats toward the shore during the storm.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 593px; left: 811px; font-size: 39px; font-family: OpenSansSemiboldItalic;">they push</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
