var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'subestima';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1019;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/art-1851483_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="max-width: 400px; white-space: normal; top: 156px; left: 710px; font-size: 19px; font-family: SourceSansProExtraLight;">Él subestima la dificultad del examen.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="max-width: 400px; white-space: normal;top: 292px; left: 708px; font-size: 18px; font-family: SourceSansProLight;">Nunca subestima a su rival.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="max-width: 400px; white-space: normal; top: 401px; left: 709px; font-family: OpenSansLight; font-size: 16px;">La empresa subestima el costo del proyecto.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 621px; left: 995px; font-size: 40px; font-family: Amatic_bold;">subestima</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 156px; left: 709px; font-size: 18px; font-family: SourceSansProExtraLight; max-width: 400px; white-space: normal;">He underestimates the difficulty of the exam.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 707px; font-size: 18px; font-family: SourceSansProLight; max-width: 400px; white-space: normal;">He never underestimates his opponent.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 401px; left: 708px; font-family: OpenSansLight; font-size: 17px; max-width: 400px; white-space: normal;">The company underestimates the cost of the project.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 400px; white-space: normal; top: 550px; left: 706px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">Underestimates; third-person singular present of "subestimar," meaning to underestimate or undervalue someone or something.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}