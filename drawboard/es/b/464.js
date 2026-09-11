var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'arraigo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 464;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/openbook-581128.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:853px;top:-72px;left:12px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_71" class="textshirt mergershirt" style="top: 71px; left: 438px; width: 352px; height: 65px; font-size: 19px; font-family: SourceSansProLight;">    <div id="text_31" class="textshirt class" style="top: 71px; left: 438px; font-size: 19px; font-family: SourceSansProLight;">Tiene un profundo arraigo en su</div>    <div id="text_65" class="textshirt class" style="top: 106px; left: 438px; font-size: 19px; font-family: SourceSansProLight;">pueblo natal.</div></div>`;
vt[vt.length]=`<div id="text_72" class="textshirt mergershirt" style="top: 233px; left: 441px; width: 328px; height: 61px; font-family: SourceSansProLight; font-size: 18px;">    <div id="text_32" class="textshirt class" style="top: 233px; left: 441px; font-size: 18px; font-family: SourceSansProLight;">El arraigo cultural de esta tradición se</div>    <div id="text_67" class="textshirt class" style="top: 264px; left: 442px; font-size: 18px; font-family: SourceSansProLight;">remonta siglos atrás.</div></div>`;
vt[vt.length]=`<div id="text_73" class="textshirt mergershirt" style="top: 385px; left: 439px; width: 325px; height: 63px; font-family: SourceSansProRegular; font-size: 18px;">    <div id="text_33" class="textshirt class" style="top: 385px; left: 439px; font-size: 18px; font-family: SourceSansProRegular;">Su arraigo a la tierra se refleja</div>    <div id="text_69" class="textshirt class" style="top: 418px; left: 439px; font-size: 18px; font-family: SourceSansProRegular;">en su poesía.</div></div>`;
vt[vt.length]=`<div id="text_34" class="textshirt mergershirt" style="top: 591px; left: 1034px; font-size: 49px; font-family: Amatic_bold;">arraigo</div>`;

vte[vte.length]=`<div id="text_80" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 432px; width: 341px; height: 65px; font-size: 18px; font-family: SourceSansProLight;">    <div id="text_61" class="textshirt class" style="top: 73px; left: 432px; font-size: 18px; font-family: SourceSansProLight;">He has deep roots in</div>    <div id="text_74" class="textshirt class" style="top: 108px; left: 433px; font-size: 18px; font-family: SourceSansProLight;">his hometown.</div></div>`;
vte[vte.length]=`<div id="text_81" class="textshirt mergershirt`+transws+`" style="top: 235px; left: 430px; width: 345px; height: 60px; font-size: 17px;">    <div id="text_62" class="textshirt class" style="top: 235px; left: 430px; font-size: 17px; font-family: AvenirBook;">The cultural roots of this tradition</div>    <div id="text_76" class="textshirt class" style="top: 265px; left: 431px; font-size: 17px; font-family: FuturaBookItalic;">go back centuries.</div></div>`;
vte[vte.length]=`<div id="text_82" class="textshirt mergershirt`+transws+`" style="top: 387px; left: 430px; width: 349px; height: 65px; font-size: 19px; font-family: SourceSansProLight;">    <div id="text_63" class="textshirt class" style="top: 387px; left: 430px; font-family: SourceSansProLight; font-size: 19px;">His attachment to the land is reflected</div>    <div id="text_78" class="textshirt class" style="top: 422px; left: 433px; font-size: 19px; font-family: SourceSansProLight;">in his poetry.</div></div>`;
vte[vte.length]=`<div id="text_64" class="textshirt mergershirt`+transws+`" style="width: 324px; white-space: normal; top: 469px; left: 825px; font-size: 20px; font-family: SourceSansProLight;">Roots; attachment; deep connection — A strong bond or connection to a place, culture, or tradition; the state of being firmly established or grounded.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}