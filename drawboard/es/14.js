var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'energizante';
const defaultspeed = 25;
const drabindex = 14;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 199px; left: 218px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(71, 40, 10);">Prefiero tomar un té verde por la mañana porque tiene un efecto energizante natural.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 319px; left: 234px; font-size: 21px; font-family: Gotham; color: rgb(38, 27, 101);">La música latina tiene un ritmo energizante que anima a todos a bailar.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 207px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(109, 8, 75);">Una caminata rápida por el parque puede ser tan energizante como una taza de café.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 598px; left: 786px; font-size: 34px; font-family: Museo_Slab_100italic;">energizante</div>`;



vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 197px; left: 232px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(71, 40, 10);">I prefer to drink green tea in the morning because it has a natural energizing effect.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 324px; left: 245px; font-size: 21px; font-family: Gotham; color: rgb(38, 27, 101);">Latin music has an energizing rhythm that gets everyone dancing.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 443px; left: 258px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(109, 8, 75);">A brisk walk through the park can be as energizing as a cup of coffee.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 598px; left: 786px; font-size: 34px; font-family: Museo_Slab_100italic;">energizing</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
