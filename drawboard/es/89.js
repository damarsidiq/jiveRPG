var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Se agotan';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 89;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 826px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 163px; left: 706px; font-size: 31px; font-family: Amatic;">Las entradas para el concierto se agotan muy rápido</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 276px; left: 711px; font-size: 19px; font-family: AvenirBook;">Se nos agotan las ideas para el regalo</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 19px;">Si no compramos ahora, las ofertas se agotan</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 625px; left: 718px; font-size: 59px; font-family: Amatic_bold;">Se agotan</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 163px; left: 706px; font-size: 30px; font-family: Amatic;">The tickets for the concert sell out / run out very quickly.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 276px; left: 711px; font-size: 19px; font-family: AvenirBook;">We are running out of ideas for the gift.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 19px;">If we don't buy now, the offers will run out.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 625px; left: 718px; font-size: 48px; font-family: Amatic_bold;">they're running out / they run out</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
