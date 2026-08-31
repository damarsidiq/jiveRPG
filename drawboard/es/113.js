var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Imponerse';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 113;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 158px; left: 354px; font-size: 18px; font-family: AvenirLight;">Para tener éxito, a veces hay que saber 'imponerse' ante las críticas.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 354px; font-size: 18px; font-family: AvenirBook;">Su talento natural logró 'imponerse' sobre la falta de experiencia.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Es difícil 'imponerse' en una cultura corporativa tan rígida como esta.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 503px; left: 795px; font-size: 40px; font-family: Amatic_bold;">Imponerse</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 158px; left: 354px; font-size: 15px; font-family: AvenirLight;">To succeed, sometimes you have to know how to assert yourself against criticism</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 354px; font-size: 18px; font-family: AvenirBook;">His natural talent managed to prevail over the lack of experience</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 17px;">It's hard to assert oneself in such a rigid corporate culture as this</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 502px; left: 589px; font-size: 40px; font-family: Amatic_bold;">To impose oneself / To prevail</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
