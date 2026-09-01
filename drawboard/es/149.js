var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Portero';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 149;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 337px; left: 146px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Portero</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">El 'portero' abrió la puerta del edificio. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 216px; left: 561px; font-size: 16px; font-family: AvenirBook;">El 'portero' atajó el penal. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">Trabaja de 'portero' en un hotel del centro. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 626px; left: 903px; font-size: 50px; font-family: Amatic_bold;">Portero</div>`;

vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 337px; left: 146px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">doorman</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">The doorman opened the building door</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 216px; left: 561px; font-size: 16px; font-family: AvenirBook;">The goalkeeper saved the penalty</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 14px;">He works as a doorman at a downtown hotel</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 635px; left: 651px; font-size: 44px; font-family: Amatic_bold;">doorman; goalkeeper; janitor</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}