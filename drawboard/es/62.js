var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'El lado caótico';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 62;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/coffee-2425303_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 718px; top: 0px; left: 0px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 73px; left: 397px; font-size: 32px; font-family: Amatic; color: rgb(255, 255, 255);">La naturaleza tiene el lado caótico y el ordenado</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">Todo sistema tiene el lado caótico</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 236px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 15px; color: rgb(255, 255, 255);">Exploró el lado caótico de la creatividad</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 336px; left: 752px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">El lado caótico</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 397px; font-size: 27px; font-family: Amatic; color: rgb(255, 255, 255);">Nature has the side of chaos and the orderly one</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">Every system has the chaotic side</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 236px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 15px; color: rgb(255, 255, 255);">He explored the chaotic side of creativity</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 333px; left: 739px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">The chaotic side</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
