var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'bullicio';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1091;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="white-space: normal; max-width: 550px; top: 157px; left: 353px; font-size: 31px; font-family: Sueellenfrancisco;">El bullicio de la ciudad me dificulta dormir.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="white-space: normal; max-width: 550px; top: 261px; left: 352px; font-size: 19px; font-family: SourceSansProRegular;">Se oyó un bullicio enorme proveniente de la plaza.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="white-space: normal; max-width: 550px; top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 19px;">El bullicio del mercado me pone nervioso.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 503px; left: 792px; font-size: 44px; font-family: Amatic_bold;">bullicio</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="white-space: normal; max-width: 550px; top: 157px; left: 353px; font-size: 26px; font-family: Sueellenfrancisco;">The hustle and bustle of the city makes it hard for me to sleep.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="white-space: normal; max-width: 550px; top: 261px; left: 352px; font-size: 21px; font-family: NotoSans_Condensed_LightItalic;">A huge commotion was heard coming from the square.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="white-space: normal; max-width: 550px; top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 21px;">The hustle and bustle of the market makes me nervous.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 539px; white-space: normal; top: 463px; left: 354px; font-size: 16px; font-family: NotoSans_ExtraCondensed_Light;">Commotion, hustle and bustle, or noisy activity; describes loud, energetic, and often chaotic movement or sound.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}