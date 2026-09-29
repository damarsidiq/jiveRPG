var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'mordida';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 992;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 67px; left: 635px; font-family: BarlowLight; font-size: 21px;">El policía aceptó una mordida de 200 dólares para "olvidar" la multa.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 189px; left: 635px; font-size: 20px; font-family: BarlowExtraLightItalic;">Lo aprisiono entre los dedos inconscientemente, la mente mordida por las conclusiones que acababa de escuchar.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 326px; left: 632px; font-size: 23px; font-family: NotoSans_Condensed_ExtraLightItalic;">¿Quieres una mordida de mi sándwich? Es demasiado para mí.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 571px; left: 961px; font-size: 49px; font-family: Amatic_bold;">mordida</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 75px; left: 634px; font-size: 17px; font-family: MontserratLightItalic;">The police officer accepted a $200 bribe to "forget" the fine.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 180px; left: 634px; font-size: 14px; font-family: NotoSans_LightItalic;">I unconsciously squeezed it between my fingers, my mind gnawed at by the conclusions I had just heard.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 292px; left: 637px; font-family: Ubuntu_semi-light_italic; font-size: 16px;">Do you want a bite of my sandwich? It's too much for me.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 658px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">Bite (of an animal or person), or a bribe (in Mexico and Central America, informal). It can also refer to a "rake-off" or a cut in a transaction.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}