var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'descartarlas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 94;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 13px; font-family: FuturaBookItalic;">Después de analizar los datos, tuvimos que descartarlas porque no eran viables</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 14px; font-family: AvenirBook;">No puedes simplemente descartarlas sin investigar primero sus causas</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Analizamos todas las opciones antes de descartarlas por completo</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 614px; left: 858px; font-size: 40px; font-family: Amatic_bold;">descartarlas</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 22px; font-family: Amatic;">After analyzing the data, we had to discard them because they weren't viable</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 14px; font-family: AvenirBook;">You can't simply rule them out without investigating their causes first</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 15px;">We analyzed all the options before discarding them completely</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 605px; left: 582px; font-size: 22px; font-family: Amatic_bold;">To discard them / To rule them out / To get rid of them (feminine plural)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
