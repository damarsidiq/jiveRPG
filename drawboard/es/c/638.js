var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

//to adjust
export const dbtitle = 'salvajes';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 638;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 33px; font-family: Sueellenfrancisco;">Los animales salvajes viven libres en la selva.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 19px; font-family: Ubuntu_semi-light_italic;">Su comportamiento fue completamente salvaje durante la fiesta.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: SourceSansProRegular; font-size: 20px;">Las plantas salvajes crecen sin necesidad de cuidados humanos.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 500px; left: 802px; font-size: 44px; font-family: Amatic_bold;">salvajes</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 21px; font-family: NotoSans_Condensed_ExtraLight;">Wild animals live freely in the jungle.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 19px; font-family: MontserratExtraLight;">His behavior was completely wild during the party.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 356px; left: 351px; font-family: RalewayLight; font-size: 16px;">Wild plants grow without the need for human care.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 400px; white-space: normal; top: 424px; left: 511px; font-size: 14px; font-family: MetropolLightLight;">Wild; savage; untamed — Living in a natural state, not domesticated or cultivated; can also describe behavior that is violent, uncontrolled, or uncivilized.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}