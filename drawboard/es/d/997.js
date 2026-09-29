var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'experimentar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 997;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;top:-37px;left:3px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 67px; left: 635px; font-family: BarlowLight; font-size: 21px;">Experimentamos con diferentes métodos para encontrar una solución.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 189px; left: 635px; font-size: 20px; font-family: BarlowExtraLightItalic;">Quiero experimentar la comida tradicional de ese país.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 326px; left: 632px; font-size: 23px; font-family: NotoSans_Condensed_ExtraLightItalic;">Algunas personas pueden experimentar ansiedad antes de un examen.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 574px; left: 950px; font-size: 49px; font-family: Amatic_bold;">experimentar</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 75px; left: 634px; font-size: 17px; font-family: MontserratLightItalic;">We experimented with different methods to find a solution.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 180px; left: 634px; font-size: 14px; font-family: NotoSans_LightItalic;">I want to experience the traditional food of that country.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 292px; left: 637px; font-family: Ubuntu_semi-light_italic; font-size: 16px;">Some people may experience anxiety before an exam.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 658px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">To experiment, experience, or undergo. It can refer to testing something, having a personal experience, or going through a physical or emotional condition.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}