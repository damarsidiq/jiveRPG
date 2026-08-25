var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
export const dbtitle = 'Desmayarse';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 30;

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 138px; left: 199px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(255, 253, 251);">Casi se desmaya del calor intenso durante el desfile bajo el sol</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 247px; left: 199px; font-size: 21px; font-family: Gotham; color: rgb(255, 253, 251);">No te desmayes ahora, ¡falta poco para llegar a la cima de la montaña</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 355px; left: 201px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(255, 253, 251);">Se desmayó al ver tanta sangre en la escena del accidente</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 516px; left: 961px; font-size: 39px; font-family: OpenSansSemiboldItalic; color: rgb(255, 253, 251);">desmayarse</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 199px; font-size: 19px; font-family: FuturaMediumItalic; color: rgb(255, 253, 251);">She almost fainted from the intense heat during the parade under the sun</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 247px; left: 199px; font-size: 21px; font-family: Gotham; color: rgb(255, 253, 251);">Don't faint now, we're almost to the top of the mountain</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 355px; left: 201px; font-family: Museo_Slab_500italic; font-size: 19px; color: rgb(255, 253, 251);">He passed out upon seeing so much blood at the accident scene</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 518px; left: 853px; font-size: 39px; font-family: OpenSansSemiboldItalic; color: rgb(255, 253, 251);">to faint / to pass out</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
