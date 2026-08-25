var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
export const dbtitle = 'Espectro';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 31;

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">El arcoíris muestra todo el espectro de colores visibles</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">Los psicólogos estudian el espectro del autismo con mayor detalle cada año</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">El espectro de la guerra aún se cierne sobre aquella región devastada</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 515px; left: 940px; font-size: 59px; font-family: RalewayMedium; color: rgb(255, 253, 251);">espectro</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">The rainbow shows the entire spectrum of visible colors</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">Psychologists study the autism spectrum in greater detail every year</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">The specter of war still looms over that devastated region</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 513px; left: 904px; font-size: 32px; font-family: RalewayMedium; color: rgb(255, 253, 251);">spectrum / specter</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
