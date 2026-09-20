var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Vasto';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 693;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_15" class="textshirt mergershirt copytopaste" style="top: 338px; left: 167px; font-size: 34px; transform: rotate(23deg); font-family: MontserratExtraLight;">Vasto</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt copytopaste" style="top: 102px; left: 563px; font-size: 18px; font-family: MetropolLightItalic;">El vasto océano se extendía hasta el horizonte.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt copytopaste" style="top: 198px; left: 561px; font-size: 17px; font-family: MontserratLight;">Recorrieron un vasto territorio durante la expedición.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt copytopaste" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Tiene un vasto conocimiento de la historia antigua.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt copytopaste" style="top: 628px; left: 920px; font-size: 49px; font-family: Amatic_bold;">Vasto</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 340px; left: 173px; font-size: 34px; transform: rotate(23deg); font-family: MontserratExtraLight;">Vast</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 19px; font-family: BarlowRegular;">The vast ocean stretched to the horizon.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 197px; left: 562px; font-size: 16px; font-family: MetropolLightLight;">They traveled through a vast territory during the expedition.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 16px;">He has a vast knowledge of ancient history.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 598px; left: 668px; font-size: 21px; font-family: BarlowExtraLight;">Vast, extensive; very large in area, size, scope, or amount.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}