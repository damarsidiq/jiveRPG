var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

//to adjust
export const dbtitle = 'herederos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 629;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 19px; font-family: SourceSansProRegular;">Los herederos del reino lucharon por el trono.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 17px; font-family: Ubuntu_semi-light_italic;">Como herederos de una gran fortuna, vivieron cómodamente toda su vida.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: SourceSansProRegular; font-size: 20px;">Los herederos de la empresa decidieron venderla.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 506px; left: 791px; font-size: 44px; font-family: Amatic_bold;">herederos</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 21px; font-family: NotoSans_Condensed_ExtraLight;">The heirs to the kingdom fought for the throne.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 19px; font-family: BarlowLight;">As heirs to a great fortune, they lived comfortably all their lives.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 356px; left: 351px; font-family: RalewayLight; font-size: 16px;">The heirs of the company decided to sell it.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 400px; white-space: normal; top: 430px; left: 505px; font-size: 14px; font-family: MetropolLightLight;">Heirs; inheritors; successors — People who are entitled to receive money, property, or a title from someone else after that person dies; can also refer to those who inherit traditions or legacies.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}