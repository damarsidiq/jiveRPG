var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'pague';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 473;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;top:-37px;left:3px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 68px; left: 633px; font-size: 20px; font-family: FuturaBookItalic;">Espero que él me pague lo que me debe.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 164px; left: 631px; font-size: 18px; font-family: AvenirBook;">Dile que pague la cuenta antes de irse.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 285px; left: 633px; font-family: OpenSansSemiboldItalic; font-size: 17px;">No importa que yo pague esta vez.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 588px; left: 1030px; font-size: 49px; font-family: Amatic_bold;">pague</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 637px; font-size: 17px; font-family: FuturaBookItalic;">I hope he pays me what he owes me.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 635px; font-size: 17px; font-family: AvenirBook;">Tell him to pay the bill before leaving.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 637px; font-family: OpenSansSemiboldItalic; font-size: 16px;">It doesn't matter if I pay this time.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 594px; left: 633px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">Present subjunctive form of "pagar" - (that) I/he/she pay. Used after expressions of desire, doubt, or command. Infinitive means to pay.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}