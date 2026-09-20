var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'Mereces';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 705;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 31px; font-family: Sueellenfrancisco;">Mereces todo lo bueno que te está pasando.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 19px; font-family: SourceSansProRegular;">Te mereces un descanso después de tanto trabajo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 19px;">Mereces ser escuchado con atención.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 502px; left: 804px; font-size: 44px; font-family: Amatic_bold;">Mereces</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 26px; font-family: Sueellenfrancisco;">You deserve all the good things happening to you.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 21px; font-family: NotoSans_Condensed_LightItalic;">You deserve a rest after so much work.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 22px;">You deserve to be heard with attention.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 359px; white-space: normal; top: 481px; left: 551px; font-size: 16px; font-family: NotoSans_ExtraCondensed_Light;">You deserve; a form of "merecer," meaning to be worthy of or entitled to something.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}