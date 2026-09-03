var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Desalineación';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 232;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 163px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">La 'desalineación' de los engranajes causó el fallo de la máquina.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 228px; left: 171px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">La 'desalineación' de sus metas con las de la empresa le trajo conflictos.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 362px; left: 173px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">Los técnicos corregieron la 'desalineación' del láser quirúrgico.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 485px; left: 871px; font-size: 61px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Desalineación</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 94px; left: 163px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">The misalignment of the gears caused the machine to fail</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 228px; left: 171px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">The misalignment of his goals with the company’s brought him conflicts</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 362px; left: 173px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">The technicians corrected the misalignment of the surgical laser</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 490px; left: 703px; font-size: 61px; font-family: Amatic_bold; color: rgb(255, 255, 255);">misalignment; disalignment</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}