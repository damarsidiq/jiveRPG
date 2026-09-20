var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Mullido';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 657;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 61px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">Tu almohada es demasiado mullida para mí.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 228px; left: 69px; font-size: 24px; font-family: MetropolRegular; color: rgb(255, 255, 255);">Prefiero una almohada más recia, esta es demasiado mullida para mí.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 362px; left: 71px; font-family: OpenSansSemiboldItalic; font-size: 22px; color: rgb(255, 255, 255);">Mientras escucho la relajante música que proviene de la calle, me voy adormeciendo en mi cama mullida.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 501px; left: 968px; font-size: 59px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Mullido</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 111px; left: 86px; font-size: 43px; font-family: Amatic; color: rgb(255, 255, 255);">Your pillow is too soft for me.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 245px; left: 94px; font-size: 19px; font-family: MetropolMedium; color: rgb(255, 255, 255);">I prefer harder pillows; this one's too soft for me.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 379px; left: 96px; font-family: OpenSansSemiboldItalic; font-size: 21px; color: rgb(255, 255, 255);">While listening to the soothing music coming from the street I am drifting off to sleep in my comfy bed.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 495px; left: 1046px; font-size: 47px; font-family: Amatic_bold; color: rgb(255, 255, 255);">soft</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}