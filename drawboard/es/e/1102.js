var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'llanura';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1102;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 124px; left: 198px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">La llanura se extendía hasta donde alcanzaba la vista.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 206px; font-size: 24px; font-family: MetropolRegular; color: rgb(255, 255, 255);">Los agricultores cultivan trigo en la llanura fértil.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 22px; color: rgb(255, 255, 255);">Una tormenta se acercaba rápidamente por la llanura.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 510px; left: 1013px; font-size: 59px; font-family: Amatic_bold; color: rgb(255, 255, 255);">llanura</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 124px; left: 198px; font-size: 43px; font-family: Amatic; color: rgb(255, 255, 255);">The plain extended as far as the eye could see.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 206px; font-size: 19px; font-family: MetropolMedium; color: rgb(255, 255, 255);">The farmers grow wheat in the fertile plain.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 392px; left: 208px; font-family: OpenSansSemiboldItalic; font-size: 21px; color: rgb(255, 255, 255);">A storm was approaching quickly across the plain.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="max-width: 600px; white-space: normal; top: 496px; left: 634px; font-size: 23px; font-family: Carlito; color: rgb(255, 255, 255);">Plain or flatland; a large area of flat land with few trees, often used for agriculture or grazing.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}