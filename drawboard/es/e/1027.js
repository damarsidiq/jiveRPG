var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'bolsillo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1027;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/art-1851483_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="max-width: 400px; white-space: normal; top: 156px; left: 710px; font-size: 19px; font-family: SourceSansProExtraLight;">Guardé las llaves en el bolsillo.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="max-width: 400px; white-space: normal;top: 292px; left: 708px; font-size: 18px; font-family: SourceSansProLight;">Este abrigo tiene un bolsillo interior.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="max-width: 400px; white-space: normal; top: 401px; left: 709px; font-family: OpenSansLight; font-size: 16px;">No tengo dinero en el bolsillo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 607px; left: 1000px; font-size: 40px; font-family: Amatic_bold;">bolsillo</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 156px; left: 709px; font-size: 18px; font-family: SourceSansProExtraLight; max-width: 400px; white-space: normal;">I put the keys in my pocket.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 707px; font-size: 18px; font-family: SourceSansProLight; max-width: 400px; white-space: normal;">This coat has an inside pocket.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 401px; left: 708px; font-family: OpenSansLight; font-size: 17px; max-width: 400px; white-space: normal;">I don't have money in my pocket.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 400px; white-space: normal; top: 550px; left: 706px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">A pocket; a small pouch sewn into clothing for carrying items. Also used figuratively for one's personal money or resources.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}