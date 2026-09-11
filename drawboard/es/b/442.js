var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'vislumbrar';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 442;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/openbook-581128.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:853px;top:-72px;left:12px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_71" class="textshirt mergershirt" style="top: 50px; left: 426px; width: 352px; height: 65px; font-size: 17px; font-family: SourceSansProLight;">    <div id="text_31" class="textshirt class" style="top: 50px; left: 426px; font-size: 17px; font-family: SourceSansProLight;">Logré vislumbrar la cima de la montaña</div>    <div id="text_65" class="textshirt class" style="top: 85px; left: 430px; font-size: 17px; font-family: SourceSansProLight;">entre la niebla.</div></div>`;
vt[vt.length]=`<div id="text_72" class="textshirt mergershirt" style="top: 212px; left: 429px; width: 328px; height: 61px; font-family: SourceSansProExtraLight; font-size: 15px;">    <div id="text_32" class="textshirt class" style="top: 212px; left: 429px; font-size: 15px;">Pude vislumbrar una solución al problema después</div>    <div id="text_67" class="textshirt class" style="top: 243px; left: 430px; font-size: 15px;">de horas de reflexión.</div></div>`;
vt[vt.length]=`<div id="text_73" class="textshirt mergershirt" style="top: 364px; left: 427px; width: 325px; height: 63px; font-family: SourceSansProRegular;">    <div id="text_33" class="textshirt class" style="top: 364px; left: 427px; font-size: 16px; font-family: SourceSansProRegular;">Desde la ventana, se vislumbrar el mar</div>    <div id="text_69" class="textshirt class" style="top: 397px; left: 427px; font-size: 18px; font-family: SourceSansProRegular;">a lo lejos.</div></div>`;
vt[vt.length]=`<div id="text_34" class="textshirt mergershirt" style="top: 575px; left: 995px; font-size: 49px; font-family: Amatic_bold;">vislumbrar</div>`;

vte[vte.length]=`<div id="text_80" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 423px; width: 341px; height: 65px; font-size: 18px; font-family: SourceSansProLight;">    <div id="text_61" class="textshirt class" style="top: 66px; left: 423px; font-size: 18px; font-family: SourceSansProLight;">I managed to glimpse the mountain peak</div>    <div id="text_74" class="textshirt class" style="top: 101px; left: 424px; font-size: 18px; font-family: SourceSansProLight;">through the fog.</div></div>`;
vte[vte.length]=`<div id="text_81" class="textshirt mergershirt`+transws+`" style="top: 228px; left: 421px; width: 345px; height: 60px; font-size: 17px;">    <div id="text_62" class="textshirt class" style="top: 228px; left: 421px; font-size: 17px; font-family: AvenirBook;">I could glimpse a solution to the problem</div>    <div id="text_76" class="textshirt class" style="top: 258px; left: 422px; font-size: 17px; font-family: FuturaBookItalic;">after hours of reflection.</div></div>`;
vte[vte.length]=`<div id="text_82" class="textshirt mergershirt`+transws+`" style="top: 380px; left: 421px; width: 349px; height: 65px; font-size: 19px; font-family: SourceSansProLight;">    <div id="text_63" class="textshirt class" style="top: 380px; left: 421px; font-family: SourceSansProLight; font-size: 19px;">From the window, the sea could be</div>    <div id="text_78" class="textshirt class" style="top: 415px; left: 424px; font-size: 19px; font-family: SourceSansProLight;">glimpsed in the distance.</div></div>`;
vte[vte.length]=`<div id="text_64" class="textshirt mergershirt`+transws+`" style="width: 324px; white-space: normal; top: 480px; left: 826px; font-size: 20px; font-family: SourceSansProLight;">To glimpse; to catch sight of; to discern — To see something briefly or partially, often with difficulty; to perceive or understand something faintly or indistinctly.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}