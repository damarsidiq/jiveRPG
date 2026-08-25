var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Ausencia';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 43;
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;
var dbbg= `<div id="dbbackg" class="textshirt imageshirt" style="top: 0px; left: 0px; width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 182px; left: 209px; font-size: 38px; font-family: Amatic; color: rgb(0, 114, 3);">Su 'ausencia' en la reunión fue notable</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 315px; left: 213px; font-size: 26px; font-family: AvenirBook; color: rgb(49, 77, 8);">La 'falta' de sueño afecta tu concentración</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 26px; color: rgb(35, 105, 14);">Tu 'ausencia' se sintió en la cena familiar</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 594px; left: 690px; font-size: 50px; font-family: OswaldRegular; color: rgb(32, 73, 48);">Ausencia / falta</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 182px; left: 209px; font-size: 41px; font-family: Amatic; color: rgb(0, 114, 3);">His 'absence' from the meeting was noticeable</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 313px; left: 212px; font-size: 24px; font-family: AvenirBook; color: rgb(49, 77, 8);">The 'lack' of sleep affects your concentration</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(95, 9, 105);">Your 'absence' was felt at the family dinner</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 610px; left: 724px; font-size: 48px; font-family: OswaldRegular; color: rgb(67, 17, 26);">absence / lack</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
