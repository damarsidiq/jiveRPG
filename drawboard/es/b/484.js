var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'cualidad';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 484;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;top:-37px;left:3px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 67px; left: 635px; font-size: 17px; font-family: FuturaBookItalic;">La paciencia es una cualidad que admira en los demás.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 161px; left: 635px; font-size: 16px; font-family: AvenirBook;">Esta madera tiene la cualidad de resistir la humedad.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 264px; left: 636px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Su cualidad más destacada es la empatía.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 574px; left: 979px; font-size: 49px; font-family: Amatic_bold;">cualidad</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 75px; left: 637px; font-size: 17px; font-family: FuturaBookItalic;">Patience is a quality she admires in others.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 635px; font-size: 16px; font-family: AvenirBook;">This wood has the quality of resisting moisture.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 637px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Her most outstanding quality is empathy.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 666px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">Quality; characteristic; trait — A distinctive attribute, feature, or property of someone or something; a positive characteristic or virtue.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}