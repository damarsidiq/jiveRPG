var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'atormentaría';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 470;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/openbook-581128.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:853px;top:-72px;left:12px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_71" class="textshirt mergershirt" style="top: 71px; left: 438px; width: 352px; height: 65px; font-size: 19px; font-family: SourceSansProLight;">    <div id="text_31" class="textshirt class" style="top: 71px; left: 438px; font-size: 19px; font-family: SourceSansProLight;">Él me atormentaría con preguntas si</div>    <div id="text_65" class="textshirt class" style="top: 106px; left: 438px; font-size: 19px; font-family: SourceSansProLight;">supiera la verdad.</div></div>`;
vt[vt.length]=`<div id="text_72" class="textshirt mergershirt" style="top: 233px; left: 441px; width: 328px; height: 61px; font-family: SourceSansProLight; font-size: 18px;">    <div id="text_32" class="textshirt class" style="top: 233px; left: 441px; font-size: 18px; font-family: SourceSansProLight;">Yo no le atormentaría así si</div>    <div id="text_67" class="textshirt class" style="top: 264px; left: 442px; font-size: 18px; font-family: SourceSansProLight;">fuera su amigo.</div></div>`;
vt[vt.length]=`<div id="text_73" class="textshirt mergershirt" style="top: 385px; left: 439px; width: 325px; height: 63px; font-family: SourceSansProRegular; font-size: 18px;">    <div id="text_33" class="textshirt class" style="top: 385px; left: 439px; font-size: 18px; font-family: SourceSansProRegular;">Esa duda la atormentaría toda</div>    <div id="text_69" class="textshirt class" style="top: 418px; left: 439px; font-size: 18px; font-family: SourceSansProRegular;">la noche.</div></div>`;
vt[vt.length]=`<div id="text_34" class="textshirt mergershirt" style="top: 590px; left: 962px; font-size: 49px; font-family: Amatic_bold;">atormentaría</div>`;

vte[vte.length]=`<div id="text_80" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 432px; width: 341px; height: 65px; font-size: 18px; font-family: SourceSansProLight;">    <div id="text_61" class="textshirt class" style="top: 73px; left: 432px; font-size: 18px; font-family: SourceSansProLight;">He would torment me with questions if</div>    <div id="text_74" class="textshirt class" style="top: 108px; left: 433px; font-size: 18px; font-family: SourceSansProLight;">he knew the truth.</div></div>`;
vte[vte.length]=`<div id="text_81" class="textshirt mergershirt`+transws+`" style="top: 235px; left: 430px; width: 345px; height: 60px; font-size: 17px;">    <div id="text_62" class="textshirt class" style="top: 235px; left: 430px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">I would not torment him like that if</div>    <div id="text_76" class="textshirt class" style="top: 265px; left: 431px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">I were his friend.</div></div>`;
vte[vte.length]=`<div id="text_82" class="textshirt mergershirt`+transws+`" style="top: 387px; left: 430px; width: 349px; height: 65px; font-size: 19px; font-family: SourceSansProLight;">    <div id="text_63" class="textshirt class" style="top: 387px; left: 430px; font-family: SourceSansProLight; font-size: 19px;">That doubt would torment her</div>    <div id="text_78" class="textshirt class" style="top: 422px; left: 433px; font-size: 19px; font-family: SourceSansProLight;">all night.</div></div>`;
vte[vte.length]=`<div id="text_64" class="textshirt mergershirt`+transws+`" style="width: 324px; white-space: normal; top: 457px; left: 823px; font-size: 20px; font-family: SourceSansProLight;">of "atormentar" - would torment / would torture. It expresses a hypothetical action of causing severe mental anguish, anxiety, or physical torment.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}