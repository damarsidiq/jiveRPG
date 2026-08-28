var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Aterciopelado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 102;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 29px; font-family: Amatic;">El chocolate fundido tenía una textura 'aterciopelada' y deliciosa</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 288px; left: 388px; font-size: 18px; font-family: AvenirBook;">Su voz 'aterciopelada' cautivó a todo el público en el concierto</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Es agradable tocar los pétalos aterciopelados de una rosa</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 614px; left: 748px; font-size: 40px; font-family: Amatic_bold;">Aterciopelado</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 29px; font-family: Amatic;">The melted chocolate had a 'velvety' and delicious texture</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 395px; font-size: 17px; font-family: AvenirBook;">His 'velvety' voice captivated the entire audience at the concert</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 17px;">It is pleasant to touch the velvety petals of a rose.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 609px; left: 824px; font-size: 40px; font-family: Amatic_bold;">velvety</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
