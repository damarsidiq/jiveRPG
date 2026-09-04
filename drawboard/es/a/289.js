var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Máxima';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 289;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">La temperatura máxima de hoy será de 35 grados.  </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Su máxima prioridad es la seguridad de su familia.  </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Vive según la máxima “trata a los demás como quieres que te traten”.  </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 376px; left: 769px; font-size: 18px; font-family: FuturaBook;">Máxima; máximo / máxima  </div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Today’s maximum temperature will be 35 degrees.  </div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">His top priority is the safety of his family.  </div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">He lives by the maxim “treat others as you want to be treated.”  </div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 371px; left: 331px; font-size: 13px; font-family: FuturaBook;">feminine form of the adj. “máximo” (maximum, highest) / feminine noun meaning “maxim,” “principle,” or “saying.”</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}