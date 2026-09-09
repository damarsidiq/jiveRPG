var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'intriga';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 423;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/coffee-2425303_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 718px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 73px; left: 397px; font-size: 30px; font-family: Amatic; color: rgb(255, 255, 255);">La novela tiene mucha 'intriga' hasta el final.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">Me 'intriga' saber por qué no vino ayer.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 14px; color: rgb(255, 255, 255);">La política del palacio estaba llena de 'intriga'.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 333px; left: 835px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">intriga</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 397px; font-size: 29px; font-family: Amatic; color: rgb(255, 255, 255);">The novel has a lot of intrigue / suspense until the end.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">It intrigues me to know why he didn't come yesterday.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 14px; color: rgb(255, 255, 255);">The palace politics were full of intrigue.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 334px; left: 663px; font-size: 24px; font-family: OswaldLight; color: rgb(255, 255, 255);">intrigue / mystery / it intrigues</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}