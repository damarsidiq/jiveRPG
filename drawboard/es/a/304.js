var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Forzando';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 304;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 22px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 22px; font-family: AvenirLight;">Está forzando la puerta para</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 22px; font-family: AvenirLight;">entrar.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 20px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 20px; font-family: AvenirBook;">No puedes conseguirlo forzando la</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 20px; font-family: AvenirBook;">situación.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 19px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 19px;">Están forzando a los trabajadores a</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 19px; font-family: AvenirBook;">quedarse más tiempo.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 587px; left: 591px; font-size: 39px; font-family: Amatic_bold;">Forzando; forzar</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 22px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 22px; font-family: AvenirLight;">He is forcing the door open</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 22px; font-family: AvenirLight;">to get inside.</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 20px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 20px; font-family: AvenirBook;">You can't achieve it by forcing</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 20px; font-family: AvenirBook;">the situation.</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 19px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 19px;">They are forcing the workers to</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 19px; font-family: AvenirBook;">stay longer.</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 593px; left: 454px; font-size: 23px; font-family: Amatic_bold;">Forcing — of forzar to force, to compel, or to strain.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}