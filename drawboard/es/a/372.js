var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Añadió';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 372;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 18px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 18px; font-family: AvenirLight;">'Añadió' un poco de sal a</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 18px; font-family: AvenirLight;">la sopa.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 19px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 19px; font-family: AvenirBook;">Ella 'añadió' que llegaría un</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 19px; font-family: AvenirBook;">poco tarde.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 15px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 15px;">El profesor 'añadió' más información al final</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 15px; font-family: AvenirBook;">de la clase.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 588px; left: 699px; font-size: 38px; font-family: Amatic_bold;">Añadió</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 18px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 18px; font-family: AvenirLight;">He added a little salt to</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 18px; font-family: AvenirLight;">the soup.</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 19px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 19px; font-family: AvenirBook;">She added that she would arrive</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 19px; font-family: AvenirBook;">a little late.</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 15px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 15px;">The professor added more information at the</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 15px; font-family: AvenirBook;">end of the class.</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 587px; left: 455px; font-size: 30px; font-family: Amatic_bold;">He/she added; he/she said additionally.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}