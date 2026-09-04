var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Esclavizada';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 288;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">La población fue esclavizada durante siglos por el imperio.  </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Se sentía esclavizada por las deudas y las obligaciones.  </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">La novela cuenta la historia de una mujer esclavizada.  </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 387px; left: 862px; font-size: 24px; font-family: FuturaBook;">Esclavizada</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">The population was enslaved for centuries by the empire.  </div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">She felt enslaved by debts and obligations.  </div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">The novel tells the story of an enslaved woman.  </div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 380px; left: 495px; font-size: 15px; font-family: FuturaBook;">enslaved or held in bondage (literally or figuratively). esclavizar (to enslave). </div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}