var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Averiguar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 863;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:826px;top:-92px;left:-38px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 88px; left: 666px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Intentó averiguar la verdad sobre el incidente.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 233px; left: 667px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Necesitaban averiguar el origen del problema.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 369px; left: 670px; font-family: BarlowLight; font-size: 21px;">Fue difícil averiguar quién había tomado la decisión.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt grabbing" style="top: 637px; left: 981px; font-size: 53px; font-family: Amatic_bold;">Averiguar</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 88px; left: 666px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">He tried to find out the truth about the incident.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 233px; left: 667px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">They needed to ascertain the origin of the problem.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 369px; left: 670px; font-family: NotoSans_Condensed_LightItalic; font-size: 22px;">It was difficult to discover who had made the decision.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 639px; left: 863px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">To find out, ascertain, or investigate.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}