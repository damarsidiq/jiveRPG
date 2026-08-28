var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Encargue';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 92;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 826px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 163px; left: 706px; font-size: 40px; font-family: Amatic;">Le encargué que comprara el pan</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 276px; left: 711px; font-size: 18px; font-family: AvenirBook;">Puedes confiar en ella, es muy responsable</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 18px;">Le encomendaron la tarea más difícil del proyecto</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 625px; left: 718px; font-size: 48px; font-family: Amatic_bold;">Encargue</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 163px; left: 706px; font-size: 40px; font-family: Amatic;">I asked / entrusted him to buy the bread.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 276px; left: 711px; font-size: 18px; font-family: AvenirBook;">You can trust her, she is very responsible.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 16px;">They entrusted him with the most difficult task of the project.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 625px; left: 718px; font-size: 48px; font-family: Amatic_bold;">confiar, encomendar (entrust)</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
