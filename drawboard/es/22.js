var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const defaultspeed = 25;
const drabindex = 22;
const transws = ' wspeed_10';

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
export const dbtitle = 'Apagones';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:722px;transform:rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic;">Los apagones eléctricos son frecuentes en la ciudad durante el verano</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 382px; font-size: 15px; font-family: SourceSansProItalic;">Después de los apagones, siempre revisamos que los electrodomésticos estén apagados</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">El gobierno prometió invertir en la red para evitar futuros apagones</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 574px; left: 840px; font-size: 25px; font-family: OswaldRegular;">apagones</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic;">Power outages are frequent in the city during the summer</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 15px; font-family: SourceSansProItalic;">After blackouts, we always check that the appliances are turned off</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">The government promised to invest in the grid to avoid future blackouts</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 563px; left: 676px; font-size: 25px; font-family: OswaldRegular;">blackouts / power outages</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
