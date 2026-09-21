var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Persiguió';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 807;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
var dbbg= `<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height:720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 182px; left: 209px; font-size: 31px; font-family: NotoSans_Condensed_LightItalic; color: rgb(0, 114, 3);">El perro persiguió al gato por todo el jardín.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 313px; left: 212px; font-size: 24px; font-family: NotoSansCondensedLight; color: rgb(7, 9, 7);">La policía persiguió al sospechoso durante varias horas.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 438px; left: 216px; font-family: Sueellenfrancisco; font-size: 37px; color: rgb(29, 52, 32);">El niño persiguió la pelota que se había escapado.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 618px; left: 811px; font-size: 63px; font-family: Amatic_bold; color: rgb(1, 37, 2);">Persiguió</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 182px; left: 209px; font-size: 26px; font-family: NotoSans_Condensed_Italic; color: rgb(0, 114, 3);">The dog chased the cat all around the garden.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 313px; left: 212px; font-size: 24px; font-family: OswaldLight; color: rgb(24, 45, 23);">The police pursued the suspect for several hours.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 438px; left: 216px; font-family: OpenSansSemiboldItalic; font-size: 22px; color: rgb(24, 45, 23);">The child chased the ball that had gotten away.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 390px; white-space: normal; top: 615px; left: 679px; font-size: 20px; font-family: OswaldLight; color: rgb(0, 0, 0);">Preterite of *perseguir*: pursued or chased.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}