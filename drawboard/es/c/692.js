var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Aferrarte';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 692;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 344px; left: 129px; font-size: 34px; transform: rotate(23deg); font-family: MontserratExtraLight;">Aferrarte</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 18px; font-family: MetropolLightItalic;">Debes aferrarte a tus sueños con fuerza.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 17px; font-family: MontserratLight;">Trata de aferrarte a la cuerda hasta que llegue ayuda.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 16px;">No puedo permitir que empieces a aferrarte al pasado.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 633px; left: 875px; font-size: 49px; font-family: Amatic_bold;">Aferrarte</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 333px; left: 69px; font-size: 22px; transform: rotate(23deg); font-family: MontserratExtraLight;">(you) to cling to/hold on to</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 19px; font-family: BarlowRegular;">You must hold on tightly to your dreams.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 197px; left: 562px; font-size: 16px; font-family: MetropolLightLight;">Try to cling to the rope until help arrives.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 16px;">I cannot allow you to start clinging to the past.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 603px; left: 659px; font-size: 21px; font-family: BarlowExtraLight;">To hold on, to cling to; to grasp or grip something firmly, physically or emotionally.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}