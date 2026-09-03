var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Lío';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 226;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 163px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">¡Qué 'lío'! Perdí las llaves y el teléfono a la vez.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 228px; left: 171px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">Se metió en un 'lío' por mentir en el trabajo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 362px; left: 173px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">Dicen que Ana tiene un 'lío' con un compañero de clase.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 487px; left: 817px; font-size: 61px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Lío</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 94px; left: 163px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">What a mess! I lost my keys and my phone at the same time</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 228px; left: 171px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">He got into trouble for lying at work</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 362px; left: 173px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">They say Ana has a thing going on with a classmate</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 487px; left: 817px; font-size: 61px; font-family: Amatic_bold; color: rgb(255, 255, 255);">mess; tangle; problem</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}