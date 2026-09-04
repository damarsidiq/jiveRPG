var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Psíquico';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 282;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 42px; font-family: Amatic;">El detective tenía un poder psíquico sorprendente.  </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">El dolor psíquico puede ser más intenso que el físico.  </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Consultaron a un psíquico para resolver el misterio.  </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 363px; left: 874px; font-size: 30px; font-family: FuturaBook;">Psíquico</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 327px; font-size: 42px; font-family: Amatic;">The detective had a surprising psychic power.  </div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Psychic pain can be more intense than physical pain.  </div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">They consulted a psychic to solve the mystery.  </div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 375px; left: 427px; font-size: 17px; font-family: FuturaBook;">adjective (sometimes noun) psychic, mental, or related to the mind/psyche.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}