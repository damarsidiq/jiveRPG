var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'aflorar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 985;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 67px; left: 635px; font-family: BarlowLight; font-size: 21px;">Cuando se retiró la marea, afloraron las algas.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 161px; left: 635px; font-size: 20px; font-family: BarlowExtraLightItalic;">Las emociones bajo estrés reducen el sistema inmunológico y las alergias pueden aflorar.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="width: 500px; white-space: normal; top: 264px; left: 636px; font-size: 23px; font-family: NotoSans_Condensed_ExtraLightItalic;">Es en estos momentos de dificultades cuando más necesario es que afloren los actos de solidaridad y compañerismo entre toda la sociedad española.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 568px; left: 991px; font-size: 49px; font-family: Amatic_bold;">aflorar</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 75px; left: 634px; font-size: 17px; font-family: MontserratLightItalic;">When the tide receded, the seaweed was exposed.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 634px; font-size: 14px; font-family: NotoSans_LightItalic;">Emotions under stress weaken the immune system, and allergies can flare up.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="width: 500px; white-space: normal; top: 292px; left: 637px; font-family: Ubuntu_semi-light_italic; font-size: 16px;">It is in these difficult times that acts of solidarity and camaraderie among all of Spanish society most need to come to the fore.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 658px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">To emerge, appear, come to the surface, or crop out. It can refer to something physically appearing (like a rock formation or spring) or something less tangible, like emotions, thoughts, or issues surfacing.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}