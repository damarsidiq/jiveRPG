var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Agregamos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 270;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/coffee-2425303_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 718px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 73px; left: 397px; font-size: 21px; font-family: AvenirBook; color: rgb(255, 255, 255);">Agregamos más sal a la sopa porque estaba sosa.  </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 162px; left: 394px; font-size: 17px; font-family: AvenirBook; color: rgb(255, 255, 255);">En la reunión agregamos tres puntos nuevos a la agenda.  </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(255, 255, 255);">Agregamos tu nombre a la lista de invitados.  </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 339px; left: 780px; font-size: 40px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Agregamos</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 397px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">We added more salt to the soup because it was bland.  </div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 162px; left: 394px; font-size: 17px; font-family: AvenirBook; color: rgb(255, 255, 255);">In the meeting we added three new points to the agenda.  </div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(255, 255, 255);">We added your name to the guest list.  </div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 337px; left: 393px; font-size: 30px; font-family: Amatic_bold; color: rgb(255, 255, 255);">agregar (to add, to include, to append). “we add / we include.”</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}