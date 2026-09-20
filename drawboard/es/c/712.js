var vt = [];
var vte = [];
export var dbset = [];

//to adjust
export const dbtitle = 'Anclándote';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 712;

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 320px; left: 932px; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 321px; left: 933px; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 329px; left: 941px;"></div></div>`;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 31px; font-family: Sueellenfrancisco;">Estás anclándote al pasado y no te dejas avanzar.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 19px; font-family: SourceSansProRegular;">Fue anclándote a esa idea poco a poco.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 19px;">Te estás anclándote en miedos que ya no tienen sentido.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 500px; left: 755px; font-size: 44px; font-family: Amatic_bold;">Anclándote</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 26px; font-family: Sueellenfrancisco;">You are anchoring yourself to the past and not letting yourself move forward.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 21px; font-family: NotoSans_Condensed_LightItalic;">You were anchoring yourself to that idea little by little.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: SourceSansProLight; font-size: 22px;">You are anchoring yourself in fears that no longer make sense.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 489px; left: 446px; font-size: 16px; font-family: NotoSans_ExtraCondensed_Light;">Anchoring yourself; the act of fixing or holding yourself firmly to something, literally or emotionally.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}