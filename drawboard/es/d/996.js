var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'comience';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 996;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;top:-37px;left:3px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 67px; left: 635px; font-family: BarlowLight; font-size: 21px;">Espero que la reunión comience a tiempo.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 189px; left: 635px; font-size: 20px; font-family: BarlowExtraLightItalic;">Le pedí que el proyecto comience lo antes posible.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 326px; left: 632px; font-size: 23px; font-family: NotoSans_Condensed_ExtraLightItalic;">Deseo que su día comience con alegría.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 576px; left: 977px; font-size: 49px; font-family: Amatic_bold;">comience</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 75px; left: 634px; font-size: 17px; font-family: MontserratLightItalic;">I hope the meeting starts on time.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 180px; left: 634px; font-size: 14px; font-family: NotoSans_LightItalic;">I asked for the project to start as soon as possible.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 292px; left: 637px; font-family: Ubuntu_semi-light_italic; font-size: 16px;">I wish for your day to begin with joy.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 658px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">May [it/he/she] begin. This is the third-person singular present subjunctive form of the verb "comenzar" (to begin or start). It is often used to express a wish or a command in a polite or indirect way.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}