var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Ofrendas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 174;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 192px; left: 439px; font-size: 15px; font-family: AvenirLight;">Los fieles dejaron 'ofrendas' de flores ante el altar</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 439px; font-size: 12px; font-family: AvenirBook;">En la ceremonia, presentaron 'ofrendas' de comida a los dioses</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 440px; font-family: OpenSansSemiboldItalic; font-size: 12px;">Las 'ofrendas' del Día de Muertos honran a los seres queridos</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 589px; left: 698px; font-size: 29px; font-family: Amatic_bold;">Ofrendas</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 193px; left: 450px; font-size: 15px; font-family: AvenirLight;">The faithful left flower offerings before the altar</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 448px; font-size: 12px; font-family: AvenirBook;">In the ceremony, they presented food offerings to the gods</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 453px; font-family: OpenSansSemiboldItalic; font-size: 12px;">Day of the Dead offerings honor loved ones</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 592px; left: 621px; font-size: 29px; font-family: Amatic_bold;">offerings; tributes</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}