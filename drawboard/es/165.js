var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Metido';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 165;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 454px; font-size: 14px; font-family: AvenirLight;">Está muy 'metido' en el mundo de la política</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 450px; font-size: 16px; font-family: AvenirBook;">Encontré un clavo 'metido' en la llanta</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Se quedó 'metido' en su habitación toda la tarde</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 589px; left: 706px; font-size: 32px; font-family: Amatic_bold;">Metido</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 454px; font-size: 14px; font-family: AvenirLight;">He is deeply involved in the world of politics</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 450px; font-size: 16px; font-family: AvenirBook;">I found a nail stuck in the tire</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 14px;">He stayed shut in his room all afternoon</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 589px; left: 546px; font-size: 32px; font-family: Amatic_bold;">put in; inserted; involved</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}