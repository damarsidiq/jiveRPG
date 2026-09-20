var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Parpadeando';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 683;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 339px; left: 105px; font-size: 30px; transform: rotate(23deg); font-family: MontserratExtraLight;">Parpadeando</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: MetropolLightItalic;">Las luces del árbol de Navidad seguían parpadeando.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 15px; font-family: MontserratLight;">Estuvo parpadeando durante unos segundos tras despertar.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 16px;">El cursor estaba parpadeando en la pantalla.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 636px; left: 832px; font-size: 49px; font-family: Amatic_bold;">Parpadeando</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 334px; left: 105px; font-size: 23px; transform: rotate(23deg); font-family: MontserratExtraLight;">Blinking, flickering</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 19px; font-family: BarlowRegular;">The Christmas tree lights kept blinking.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 197px; left: 562px; font-size: 16px; font-family: MetropolLightLight;">He was blinking for a few seconds after waking up.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 16px;">The cursor was blinking on the screen.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 603px; left: 659px; font-size: 21px; font-family: BarlowExtraLight;">Blinking, flickering; the act of opening and closing the eyes rapidly, or of a light shining intermittently.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}