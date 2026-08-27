var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'inspirador y unificador frente a';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 61;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/coffee-2425303_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 718px; top: 0px; left: 0px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 73px; left: 397px; font-size: 32px; font-family: Amatic; color: rgb(255, 255, 255);">Su mensaje fue inspirador y unificador frente a el desafío</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">Buscamos un discurso inspirador y unificador frente a la división</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 236px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 15px; color: rgb(255, 255, 255);">Necesitamos un líder inspirador y unificador frente a la adversidad</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 337px; left: 549px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">inspirador y unificador frente a...</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 397px; font-size: 27px; font-family: Amatic; color: rgb(255, 255, 255);">His message was inspiring and unifying in the face of the challenge</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 162px; left: 394px; font-size: 15px; font-family: AvenirBook; color: rgb(255, 255, 255);">We seek an inspiring and unifying speech in the face of division</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 236px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 15px; color: rgb(255, 255, 255);">We need a leader who is inspiring and unifying against adversity.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 335px; left: 504px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Inspiring and unifying in the face of</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
