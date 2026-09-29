var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'asador';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1035;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/stickies-725930.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 854px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_53" class="textshirt mergershirt" style="max-width: 417px; white-space: normal; top: 221px; left: 434px; font-size: 21px; font-family: NotoSans_Condensed_SemiBoldItalic; transform: rotate(-2deg);">Pusimos la carne en el asador.</div>`;
vt[vt.length]=`<div id="text_54" class="textshirt mergershirt" style="max-width: 417px; white-space: normal; top: 315px; left: 441px; font-size: 18px; font-family: MetropolLightLight; transform: rotate(-2deg);">El asador del restaurante prepara las mejores costillas.</div>`;
vt[vt.length]=`<div id="text_55" class="textshirt mergershirt" style="max-width: 417px; white-space: normal; top: 397px; left: 444px; font-family: OpenSansSemiboldItalic; font-size: 15px; transform: rotate(-2deg);">Giró el asador lentamente para cocinar el pollo.</div>`;
vt[vt.length]=`<div id="text_56" class="textshirt mergershirt" style="top: 582px; left: 734px; font-size: 49px; font-family: Amatic_bold; transform: rotate(-2deg);">asador</div>`;
vte[vte.length]=`<div id="text_53" class="textshirt mergershirt`+transws+`" style="top: 221px; left: 434px; font-size: 20px; font-family: MetropolLightLight; transform: rotate(-2deg);">We put the meat on the grill.</div>`;
vte[vte.length]=`<div id="text_54" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 441px; font-size: 17px; font-family: MetropolLightLight; transform: rotate(-2deg);">The restaurant's grill master prepares the best ribs.</div>`;
vte[vte.length]=`<div id="text_55" class="textshirt mergershirt`+transws+`" style="top: 397px; left: 446px; font-family: OpenSansSemiboldItalic; font-size: 14px; transform: rotate(-2deg);">He turned the rotisserie slowly to cook the chicken.</div>`;
vte[vte.length]=`<div id="text_56" class="textshirt mergershirt`+transws+`" style="width: 398px; white-space: normal; top: 503px; left: 449px; font-size: 17px; font-family: MetropolLightItalic; transform: rotate(-2deg);">A grill, rotisserie, or roasting spit; a device or person used for roasting or grilling meat over a fire or heat.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}