var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'alcanzarlo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 526;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/shakya90-whiteboard-3715935.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:715px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_40" class="textshirt mergershirt" style="top: 158px; left: 325px; font-size: 21px; font-family: Ubuntu_condensed; color: rgb(0, 0, 0);">Corrimos para alcanzarlo antes de que subiera al tren.</div>`;
vt[vt.length]=`<div id="text_41" class="textshirt mergershirt" style="top: 255px; left: 328px; font-size: 20px; font-family: RalewayLight; color: rgb(0, 0, 0);">Necesito estudiar más para alcanzarlo en matemáticas.</div>`;
vt[vt.length]=`<div id="text_42" class="textshirt mergershirt" style="top: 351px; left: 328px; font-family: SourceSansProRegular; font-size: 21px; color: rgb(0, 0, 0);">Extendió la mano para alcanzarlo en el estante alto.</div>`;
vt[vt.length]=`<div id="text_43" class="textshirt mergershirt" style="top: 429px; left: 723px; font-size: 49px; font-family: Amatic_bold; color: rgb(0, 0, 0);">alcanzarlo</div>`;
vte[vte.length]=`<div id="text_40" class="textshirt mergershirt`+transws+`" style="top: 158px; left: 325px; font-size: 21px; font-family: Ubuntu_condensed; color: rgb(0, 0, 0);">We ran to catch him before he boarded the train.</div>`;
vte[vte.length]=`<div id="text_41" class="textshirt mergershirt`+transws+`" style="top: 241px; left: 329px; font-size: 20px; font-family: RalewayLight; color: rgb(0, 0, 0);">I need to study more to catch up to him in math.</div>`;
vte[vte.length]=`<div id="text_42" class="textshirt mergershirt`+transws+`" style="top: 314px; left: 334px; font-family: SourceSansProRegular; font-size: 21px; color: rgb(0, 0, 0);">He stretched his hand to reach it on the high shelf.</div>`;
vte[vte.length]=`<div id="text_43" class="textshirt mergershirt`+transws+`" style="width: 538px; white-space: normal; top: 380px; left: 330px; font-size: 18px; font-family: BarlowExtraLight; color: rgb(0, 0, 0);">To reach him/it; to catch up to him — (Infinitive of *alcanzar* + direct object pronoun *lo*) To extend one's reach to touch or grasp something; to catch up with someone in movement or achievement.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}