var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'escudo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 870;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:826px;top:-92px;left:-38px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 88px; left: 666px; font-size: 21px; font-family: NotoSans_Condensed_LightItalic;">El caballero sostuvo su escudo para defenderse del ataque.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 233px; left: 667px; font-size: 20px; font-family: NotoSans_Condensed_LightItalic;">El escudo nacional aparece impreso en la bandera del país.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 369px; left: 670px; font-family: BarlowLight; font-size: 19px;">Su buen sentido del humor es un escudo contra la tristeza.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 634px; left: 1016px; font-size: 53px; font-family: Amatic_bold;">escudo</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 88px; left: 666px; font-size: 20px; font-family: NotoSans_Condensed_LightItalic;">The knight held his shield to defend himself from the attack.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 233px; left: 667px; font-size: 20px; font-family: NotoSans_Condensed_LightItalic;">The national coat of arms appears printed on the country's flag.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 369px; left: 670px; font-family: NotoSans_Condensed_LightItalic; font-size: 21px;">Her good sense of humor is a shield against sadness.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 545px; left: 787px; font-size: 22px; font-family: NotoSans_Condensed_LightItalic;">Noun. Means "shield," "coat of arms," or "emblem." It can refer to physical armor used for defense, national/family heraldic symbols, or metaphorical protection.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}