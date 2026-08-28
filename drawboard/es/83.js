var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Cabe resaltar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 83;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 826px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 163px; left: 706px; font-size: 33px; font-family: Amatic;">Cabe resaltar que el curso es completamente gratuito</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 275px; left: 709px; font-size: 17px; font-family: AvenirBook;">Cabe resaltar el esfuerzo de todo el equipo</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Cabe resaltar que los resultados aún no son definitivos</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 624px; left: 714px; font-size: 40px; font-family: Amatic_bold;">Cabe resaltar</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 163px; left: 706px; font-size: 30px; font-family: Amatic;">It is worth highlighting that the course is completely free.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 276px; left: 703px; font-size: 14px; font-family: AvenirBook;">It should be emphasized / We should highlight the effort of the whole team.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 17px;">It should be noted that the results are not yet final.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 624px; left: 714px; font-size: 33px; font-family: Amatic_bold;">It is worth highlighting / It should be emphasized</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
