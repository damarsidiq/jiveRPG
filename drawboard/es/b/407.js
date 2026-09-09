var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'trasciende';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 407;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 722px;transform: rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt copytopaste" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">Su música 'trasciende' generaciones y culturas.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt copytopaste" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">Este problema 'trasciende' lo personal, es un tema social.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt copytopaste" style="top: 441px; left: 396px; font-family: Trebuchet; font-size: 19px; color: rgb(81, 81, 81);">La fama del autor 'trasciende' las fronteras de su país.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt copytopaste" style="top: 565px; left: 792px; font-size: 31px; font-family: OswaldRegular; color: rgb(81, 81, 81);">trasciende</div>`;

vte[vte.length]=`<div id="text_16" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">His music transcends generations and cultures.</div>`;
vte[vte.length]=`<div id="text_17" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">This problem goes beyond the personal, it's a social issue.</div>`;
vte[vte.length]=`<div id="text_18" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Trebuchet; font-size: 19px; color: rgb(81, 81, 81);">The author's fame transcends his country's borders.</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 566px; left: 732px; font-size: 18px; font-family: OswaldRegular; color: rgb(81, 81, 81);">transcends / goes beyond</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}