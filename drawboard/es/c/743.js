var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Sentó';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 743;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 722px;transform: rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">Se sentó junto a la ventana para leer.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">El profesor se sentó frente a los alumnos.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: MontserratRegular; font-size: 18px; color: rgb(81, 81, 81);">Se sentó en el banco y esperó tranquilo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 562px; left: 802px; font-size: 31px; font-family: OswaldRegular; color: rgb(81, 81, 81);">Sentó</div>`;
vte[vte.length]=`<div id="text_16" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">He sat down next to the window to read.</div>`;
vte[vte.length]=`<div id="text_17" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">The teacher sat down in front of the students.</div>`;
vte[vte.length]=`<div id="text_18" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: MontserratRegular; font-size: 18px; color: rgb(81, 81, 81);">He sat down on the bench and waited calmly.</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 525px; left: 636px; font-size: 18px; font-family: OswaldLight; color: rgb(81, 81, 81);">Sat (down), seated; a past tense form of "sentar," meaning to place oneself or someone in a seated position.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}