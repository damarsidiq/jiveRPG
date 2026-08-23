var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'Sutilmente';
const defaultspeed = 25;
const drabindex = 11;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 192px; left: 223px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(210, 110, 15);">El pintor 'sutilmente' mezcló tonos azules y verdes en el paisaje</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 318px; left: 237px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">Me insinuó 'sutilmente' que debería irme, pero no entendí hasta después</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 211px; font-family: Museo_Slab_500italic; font-size: 23px; color: rgb(8, 91, 109);" courier="" new";="" font-size:="" 19px;="" color:="" rgb(88,="" 10,="" 10);"="">Sutilmente intentó dar a entender que estaba interesado en el puesto.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt wspeed_90" style="top: 604px; left: 816px; font-size: 34px; font-family: Museo_Slab_100italic;">Sutilmente</div>`;



vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 192px; left: 223px; font-size: 21px; font-family: FuturaMediumItalic; color: rgb(210, 110, 15);">The painter 'subtly' mixed blue and green tones in the landscape.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 318px; left: 237px; font-size: 21px; font-family: Gotham; color: rgb(12, 84, 17);">She 'subtly' hinted that I should leave, but I didn't understand until later.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 211px; font-family: Museo_Slab_500italic; font-size: 23px; color: rgb(8, 91, 109);" courier="" new";="" font-size:="" 19px;="" color:="" rgb(88,="" 10,="" 10);"="">He subtly tried to drop a hint that he was interested in the job.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 590px; left: 876px; font-size: 34px; font-family: Museo_Slab_100italic;">Subtly</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
