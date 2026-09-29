var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'ceguera';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1012;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/art-1851483_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 156px; left: 710px; font-size: 18px; font-family: SourceSansProExtraLight;">La ceguera no le impidió llevar una vida independiente.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 292px; left: 708px; font-size: 15px; font-family: SourceSansProLight;">El médico está investigando las causas de su ceguera.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 401px; left: 709px; font-family: OpenSansLight; font-size: 15px;">La ceguera ante la injusticia puede causar mucho daño.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 607px; left: 997px; font-size: 40px; font-family: Amatic_bold;">ceguera</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 156px; left: 709px; font-size: 16px; font-family: SourceSansProExtraLight;">Blindness did not prevent him from living an independent life.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 707px; font-size: 15px; font-family: SourceSansProLight;">The doctor is investigating the causes of her blindness.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 401px; left: 708px; font-family: OpenSansLight; font-size: 15px;">Blindness toward injustice can cause a great deal of harm.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 300px; white-space: normal; top: 549px; left: 710px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">Blindness. It can refer to the physical inability to see or, figuratively, an unwillingness or inability to recognize an important truth or problem.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}