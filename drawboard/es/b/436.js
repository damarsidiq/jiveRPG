var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'entregado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 436;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/openbook-581128.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:853px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_31" class="textshirt mergershirt" style="top: 138px; left: 409px; font-size: 16px; font-family: NotoSansSemiCondensedLight;">Es un padre completamente entregado a sus hijos.</div>`;
vt[vt.length]=`<div id="text_32" class="textshirt mergershirt" style="top: 300px; left: 407px; font-size: 18px; font-family: NotoSansSemiCondensedLight;">El paquete fue entregado esta mañana.</div>`;
vt[vt.length]=`<div id="text_33" class="textshirt mergershirt" style="top: 452px; left: 407px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Su entregado esfuerzo finalmente dio frutos.</div>`;
vt[vt.length]=`<div id="text_34" class="textshirt mergershirt" style="top: 598px; left: 992px; font-size: 49px; font-family: Amatic_bold;">entregado</div>`;

vte[vte.length]=`<div id="text_61" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 409px; font-size: 16px; font-family: NotoSansSemiCondensedLight;">He is a father completely devoted to his children.</div>`;
vte[vte.length]=`<div id="text_62" class="textshirt mergershirt`+transws+`" style="top: 300px; left: 407px; font-size: 18px; font-family: NotoSansSemiCondensedLight;">The package was delivered this morning.</div>`;
vte[vte.length]=`<div id="text_63" class="textshirt mergershirt`+transws+`" style="top: 452px; left: 407px; font-family: Ubuntu_semi-light_italic; font-size: 16px;">His dedicated effort finally bore fruit.</div>`;
vte[vte.length]=`<div id="text_64" class="textshirt mergershirt`+transws+`" style="white-space: normal; width: 250px; top: 525px; left: 833px; font-size: 15px; font-family: SourceSansProLight;">Devoted; dedicated; delivered — Given over completely to a cause or person; showing total commitment; also the past participle of *entregar* (to deliver).</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}