var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Difiere';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 117;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 13px; font-family: AvenirLight;">La opinión del jefe 'difiere' completamente de la de los empleados sobre el nuevo proyecto</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 18px; font-family: Brandon_Grotesque_regular;">El clima en Singapur 'difiere' mucho del clima frío que tienes en Europa</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 13px;">Este modelo de negocio 'difiere' del anterior porque ahora se enfoca más en lo digital</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 500px; left: 815px; font-size: 44px; font-family: Amatic_bold;">Difiere</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 14px; font-family: AvenirLight;">The boss's opinion differs completely from the employees' regarding the new project</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 18px; font-family: Brandon_Grotesque_regular;">The weather in Singapore differs a lot from the cold weather you have in Europe</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 13px;">This business model differs from the previous one because it now focuses more on digital</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 500px; left: 815px; font-size: 44px; font-family: Amatic_bold;">Differs</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
