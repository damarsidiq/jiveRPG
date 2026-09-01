var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Motas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 155;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 339px; left: 149px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Motas</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">Hay motas de polvo sobre la mesa.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 216px; left: 561px; font-size: 16px; font-family: AvenirBook;">Se veían motas de nieve flotando en el aire.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Las motas de color en la pintura le dan un efecto especial.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 645px; left: 926px; font-size: 40px; font-family: Amatic_bold;">Motas</div>`;


vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 339px; left: 149px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Specks</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">There are specks of dust on the table</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 216px; left: 561px; font-size: 16px; font-family: AvenirBook;">Specks of snow could be seen floating in the air</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">The specks of color in the paint give it a special effect</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 644px; left: 801px; font-size: 40px; font-family: Amatic_bold;">specks; dots; flecks</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}