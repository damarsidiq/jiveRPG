var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'Crepúsculo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 720;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 24px; font-family: Sueellenfrancisco;">El crepúsculo tiñó el cielo de naranja y violeta.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 19px; font-family: SourceSansProRegular;">Caminamos por la playa al crepúsculo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 19px;">Los pájaros cantan al crepúsculo de la mañana.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 499px; left: 765px; font-size: 44px; font-family: Amatic_bold;">Crepúsculo</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 24px; font-family: Sueellenfrancisco;">The twilight tinted the sky orange and violet.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 21px; font-family: NotoSans_Condensed_LightItalic;">We walked along the beach at dusk.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 22px;">The birds sing at dawn.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 505px; left: 409px; font-size: 16px; font-family: NotoSans_ExtraCondensed_Light;">Twilight, dusk, dawn; the soft glowing light after sunset or before sunrise.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}