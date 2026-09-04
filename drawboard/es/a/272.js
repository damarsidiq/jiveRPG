var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Hacerte';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 272;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/coffee-2425303_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 718px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 73px; left: 397px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">No quiero hacerte esperar más tiempo.  </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 162px; left: 394px; font-size: 17px; font-family: AvenirBook; color: rgb(255, 255, 255);">Voy a hacerte una pregunta importante.  </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(255, 255, 255);">Puedo hacerte un favor si lo necesitas.  </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 331px; left: 813px; font-size: 44px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Hacerte</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 397px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">I don’t want to make you wait any longer.  </div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 162px; left: 394px; font-size: 17px; font-family: AvenirBook; color: rgb(255, 255, 255);">I’m going to ask you an important question.  </div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(255, 255, 255);">I can do you a favor if you need it.  </div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 332px; left: 391px; font-size: 29px; font-family: Amatic_bold; color: rgb(255, 255, 255);">hacer. to do / to make. to do to you / to make you / to cause you</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}