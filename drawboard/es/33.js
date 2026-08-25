var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
export const dbtitle = 'Arrepentimiento';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 33;

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">Sintió un profundo arrepentimiento por las palabras hirientes que dijo</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">El arrepentimiento llegó demasiado tarde; el daño ya estaba hecho</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">Su arrepentimiento sincero la llevó a pedir disculpas en persona</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 499px; left: 896px; font-size: 65px; font-family: Amatic_bold; color: rgb(255, 253, 251);">arrepentimiento</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">He felt deep regret for the hurtful words he said</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">The regret came too late; the damage was already done</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">Her sincere repentance led her to apologize in person</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 499px; left: 896px; font-size: 65px; font-family: Amatic_bold; color: rgb(255, 253, 251);">regret / repentance</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
