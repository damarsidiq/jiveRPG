var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'rugió';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1030;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/art-1851483_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="max-width: 400px; white-space: normal; top: 156px; left: 710px; font-size: 19px; font-family: SourceSansProExtraLight;">El león rugió con fuerza en la selva.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="max-width: 400px; white-space: normal;top: 292px; left: 708px; font-size: 18px; font-family: SourceSansProLight;">El motor rugió cuando pisó el acelerador.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="max-width: 400px; white-space: normal; top: 401px; left: 709px; font-family: OpenSansLight; font-size: 16px;">La multitud rugió de emoción en el estadio.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 607px; left: 1024px; font-size: 40px; font-family: Amatic_bold;">rugió</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 156px; left: 709px; font-size: 18px; font-family: SourceSansProExtraLight; max-width: 400px; white-space: normal;">The lion roared loudly in the jungle.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 707px; font-size: 18px; font-family: SourceSansProLight; max-width: 400px; white-space: normal;">The engine roared when he stepped on the accelerator.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 401px; left: 708px; font-family: OpenSansLight; font-size: 17px; max-width: 400px; white-space: normal;">The crowd roared with excitement in the stadium.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 400px; white-space: normal; top: 550px; left: 706px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">Roared; third-person singular preterite of "rugir," meaning to roar, to make a loud deep sound like a lion or a powerful engine.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}