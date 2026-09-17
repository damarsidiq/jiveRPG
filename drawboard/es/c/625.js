var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

//to adjust
export const dbtitle = 'engorroso';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 625;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 19px; font-family: SourceSansProRegular;">El proceso de renovar el pasaporte es muy engorroso.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 16px; font-family: Ubuntu_semi-light_italic;">Llevar todas estas maletas por el aeropuerto es bastante engorroso.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: SourceSansProRegular; font-size: 19px;">Tuvieron que llenar un formulario engorroso antes de la entrevista.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 503px; left: 775px; font-size: 44px; font-family: Amatic_bold;">engorroso</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 21px; font-family: NotoSans_Condensed_ExtraLight;">The process of renewing the passport is very cumbersome.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 19px; font-family: BarlowLight;">Carrying all these suitcases through the airport is quite cumbersome.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 356px; left: 351px; font-family: RalewayLight; font-size: 16px;">They had to fill out a cumbersome form before the interview.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 400px; white-space: normal; top: 457px; left: 511px; font-size: 14px; font-family: MetropolLightLight;">Cumbersome; burdensome; awkward — Describes something that is difficult to deal with, manage, or carry because it is complicated, heavy, or inconvenient.</div>`;dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}