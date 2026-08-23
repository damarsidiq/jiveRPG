var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'Suprime';
const defaultspeed = 25;
const drabindex = 8;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 185px; left: 204px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(10, 114, 50);">Este medicamento 'suprime' los síntomas de la alergia rápidamente</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 318px; left: 205px; font-size: 21px; font-family: Gotham; color: rgb(12, 55, 84);">El nuevo sistema 'suprime' automáticamente los archivos duplicados</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 461px; left: 205px; font-family: &quot;Courier new&quot;; font-size: 19px; color: rgb(88, 10, 10);">La nueva ley 'suprime' los impuestos a los libros y periódicos</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt wspeed_120" style="top: 609px; left: 838px; font-size: 34px; font-family: MontserratItalic;">Suprime</div>`;



vte[vte.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 185px; left: 204px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(10, 114, 50);">This medication 'suppresses' allergy symptoms quickly.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 318px; left: 237px; font-size: 21px; font-family: Gotham; color: rgb(12, 55, 84);">The new system automatically 'deletes' duplicate files.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 449px; left: 331px; font-family: &quot;Courier new&quot;; font-size: 19px; color: rgb(88, 10, 10);">The new law 'abolishes' taxes on books and newspapers.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt wspeed_90" style="top: 578px; left: 465px; font-size: 34px; font-family: MontserratItalic;">suppresses / deletes / abolishes</div>`;




dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
