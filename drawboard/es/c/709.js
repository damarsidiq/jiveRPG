var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'Escondido';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 709;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 31px; font-family: Sueellenfrancisco;">El gato estaba escondido detrás del sofá.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 19px; font-family: SourceSansProRegular;">Encontraron un tesoro escondido bajo la tierra.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 19px;">El sol permanecía escondido entre las nubes.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 503px; left: 789px; font-size: 44px; font-family: Amatic_bold;">Escondido</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 26px; font-family: Sueellenfrancisco;">The cat was hidden behind the sofa.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 21px; font-family: NotoSans_Condensed_LightItalic;">They found a hidden treasure under the ground.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 21px;">The sun remained hidden among the clouds.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 359px; white-space: normal; top: 510px; left: 607px; font-size: 16px; font-family: NotoSans_ExtraCondensed_Light;">Hidden, concealed; kept out of sight or not easily found.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}