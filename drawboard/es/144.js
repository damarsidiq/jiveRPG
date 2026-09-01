var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Ampliación';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 144;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 333px; left: 117px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Ampliación</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">La 'ampliación' de la casa tomó dos meses. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 216px; left: 561px; font-size: 16px; font-family: AvenirBook;">Vimos una 'ampliación' de la fotografía en la galería. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">La 'ampliación' del hospital mejorará la atención médica. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 643px; left: 881px; font-size: 40px; font-family: Amatic_bold;">Ampliación</div>`;

vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 345px; left: 106px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">enlargement</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">The extension of the house took two months</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">We saw an enlargement of the photograph in the gallery</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">The expansion of the hospital will improve medical care</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 642px; left: 672px; font-size: 36px; font-family: Amatic_bold;">enlargement; expansion; extension</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}