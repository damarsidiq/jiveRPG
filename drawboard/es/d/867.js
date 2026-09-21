var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'apodos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 867;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:826px;top:-92px;left:-38px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 88px; left: 666px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">En la escuela nos poníamos apodos cariñosos entre amigos.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 233px; left: 667px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Algunos apodos pueden llegar a ser ofensivos o molestos.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 369px; left: 670px; font-family: BarlowLight; font-size: 20px;">Su apodo familiar es mucho más corto que su nombre real.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 632px; left: 1027px; font-size: 53px; font-family: Amatic_bold;">apodos</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 88px; left: 666px; font-size: 20px; font-family: NotoSans_Condensed_LightItalic;">At school we gave each other affectionate nicknames among friends.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 233px; left: 667px; font-size: 19px; font-family: NotoSans_Condensed_LightItalic;">Some nicknames can end up being offensive or annoying.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 369px; left: 670px; font-family: NotoSans_Condensed_LightItalic; font-size: 20px;">His family nickname is much shorter than his real name.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 573px; left: 784px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Noun. Plural of "apodo," meaning "nicknames" or "aliases." These are informal, often familiar or descriptive names given to individuals instead of their official names.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}