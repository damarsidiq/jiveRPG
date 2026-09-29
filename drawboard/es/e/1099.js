var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'espantoso';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1099;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">El accidente fue una escena espantosa de presenciar.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 206px; font-size: 24px; font-family: MetropolRegular; color: rgb(255, 255, 255);">El servicio en ese restaurante fue espantoso.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 22px; color: rgb(255, 255, 255);">Hizo un tiempo espantoso con lluvia y granizo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 510px; left: 1013px; font-size: 59px; font-family: Amatic_bold; color: rgb(255, 255, 255);">espantoso</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 124px; left: 198px; font-size: 43px; font-family: Amatic; color: rgb(255, 255, 255);">The accident was a dreadful scene to witness.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 206px; font-size: 19px; font-family: MetropolMedium; color: rgb(255, 255, 255);">The service at that restaurant was terrible.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 21px; color: rgb(255, 255, 255);">The weather was dreadful with rain and hail.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="max-width: 600px; white-space: normal; top: 496px; left: 634px; font-size: 23px; font-family: Carlito; color: rgb(255, 255, 255);">Dreadful, terrible, or frightful; describes something that causes horror, fear, or is extremely bad in quality.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}