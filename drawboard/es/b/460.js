var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'consejos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 460;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/openbook-581128.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:853px;top:-72px;left:12px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_71" class="textshirt mergershirt" style="top: 71px; left: 438px; width: 352px; height: 65px; font-size: 18px; font-family: SourceSansProLight;">    <div id="text_31" class="textshirt class" style="top: 71px; left: 438px; font-size: 18px; font-family: SourceSansProLight;">Mi abuela siempre me da los</div>    <div id="text_65" class="textshirt class" style="top: 106px; left: 438px; font-size: 18px; font-family: SourceSansProLight;">mejores consejos.</div></div>`;
vt[vt.length]=`<div id="text_72" class="textshirt mergershirt" style="top: 233px; left: 441px; width: 328px; height: 61px; font-family: SourceSansProLight; font-size: 17px;">    <div id="text_32" class="textshirt class" style="top: 233px; left: 441px; font-size: 17px; font-family: SourceSansProLight;">Necesito tus consejos sobre cómo preparar</div>    <div id="text_67" class="textshirt class" style="top: 264px; left: 442px; font-size: 17px; font-family: SourceSansProLight;">la entrevista.</div></div>`;
vt[vt.length]=`<div id="text_73" class="textshirt mergershirt" style="top: 385px; left: 439px; width: 325px; height: 63px; font-family: SourceSansProRegular; font-size: 16px;">    <div id="text_33" class="textshirt class" style="top: 385px; left: 439px; font-size: 16px; font-family: SourceSansProRegular;">Los consejos del médico fueron seguir</div>    <div id="text_69" class="textshirt class" style="top: 418px; left: 439px; font-size: 16px; font-family: SourceSansProRegular;">una dieta equilibrada.</div></div>`;
vt[vt.length]=`<div id="text_34" class="textshirt mergershirt" style="top: 591px; left: 1024px; font-size: 49px; font-family: Amatic_bold;">consejos</div>`;

vte[vte.length]=`<div id="text_80" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 432px; width: 341px; height: 65px; font-size: 18px; font-family: SourceSansProLight;">    <div id="text_61" class="textshirt class" style="top: 73px; left: 432px; font-size: 18px; font-family: SourceSansProLight;">My grandmother always gives me the</div>    <div id="text_74" class="textshirt class" style="top: 108px; left: 433px; font-size: 18px; font-family: SourceSansProLight;">best advice.</div></div>`;
vte[vte.length]=`<div id="text_81" class="textshirt mergershirt`+transws+`" style="top: 235px; left: 430px; width: 345px; height: 60px; font-size: 17px;">    <div id="text_62" class="textshirt class" style="top: 235px; left: 430px; font-size: 17px; font-family: AvenirBook;">I need your advice on how to</div>    <div id="text_76" class="textshirt class" style="top: 265px; left: 431px; font-size: 17px; font-family: FuturaBookItalic;">prepare for the interview.</div></div>`;
vte[vte.length]=`<div id="text_82" class="textshirt mergershirt`+transws+`" style="top: 387px; left: 430px; width: 349px; height: 65px; font-size: 19px; font-family: SourceSansProLight;">    <div id="text_63" class="textshirt class" style="top: 387px; left: 430px; font-family: SourceSansProLight; font-size: 19px;">The doctor's advice was to follow</div>    <div id="text_78" class="textshirt class" style="top: 422px; left: 433px; font-size: 19px; font-family: SourceSansProLight;">a balanced diet.</div></div>`;
vte[vte.length]=`<div id="text_64" class="textshirt mergershirt`+transws+`" style="width: 324px; white-space: normal; top: 469px; left: 825px; font-size: 20px; font-family: SourceSansProLight;">Advice; tips; counsel — Recommendations or guidance offered to someone about what they should do in a particular situation; suggestions for wise or prudent action.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}