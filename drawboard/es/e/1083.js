var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'codiciosamente';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1083;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="white-space: normal; max-width: 550px; top: 157px; left: 353px; font-size: 31px; font-family: Sueellenfrancisco;">El niño miró codiciosamente los dulces en la tienda.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="white-space: normal; max-width: 550px; top: 261px; left: 352px; font-size: 19px; font-family: SourceSansProRegular;">El coleccionista tomó codiciosamente la moneda rara.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="white-space: normal; max-width: 550px; top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 19px;">Los inversores compraron codiciosamente las acciones baratas.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 504px; left: 717px; font-size: 44px; font-family: Amatic_bold;">codiciosamente</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="white-space: normal; max-width: 550px; top: 157px; left: 353px; font-size: 26px; font-family: Sueellenfrancisco;">The child looked greedily at the candies in the store.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="white-space: normal; max-width: 550px; top: 261px; left: 352px; font-size: 21px; font-family: NotoSans_Condensed_LightItalic;">The collector greedily took the rare coin.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="white-space: normal; max-width: 550px; top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 21px;">The investors greedily bought the cheap stocks.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 539px; white-space: normal; top: 463px; left: 354px; font-size: 16px; font-family: NotoSans_ExtraCondensed_Light;">Greedily or covetously; describes doing something with excessive desire for more, especially wealth or possessions.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}