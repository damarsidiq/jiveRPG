var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Bromas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 145;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280x.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_15" class="textshirt mergershirt" style="top: 344px; left: 139px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Bromas</div>`;
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">Siempre hace 'bromas' para hacer reír a los demás. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 216px; left: 561px; font-size: 14px; font-family: AvenirBook;">No me gustan las 'bromas' pesadas. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Sus 'bromas' en la reunión fueron inapropiadas. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 641px; left: 924px; font-size: 40px; font-family: Amatic_bold;">Bromas</div>`;

vte[vte.length]=`<div id="text_15" class="textshirt mergershirt`+transws+`" style="top: 343px; left: 155px; font-size: 34px; transform: rotate(23deg); font-family: FuturaMedium;">Jokes</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 563px; font-size: 17px; font-family: FuturaBookItalic;">He always makes jokes to make others laugh</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 561px; font-size: 17px; font-family: AvenirBook;">I don't like practical jokes</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 17px;">His jokes at the meeting were inappropriate</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 643px; left: 872px; font-size: 36px; font-family: Amatic_bold;">jokes; pranks</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}