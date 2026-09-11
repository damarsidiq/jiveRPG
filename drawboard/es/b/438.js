var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'arrastrado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 438;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/openbook-581128.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:853px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_71" class="textshirt mergershirt" style="top: 138px; left: 409px; width: 352px; height: 65px; font-size: 20px;">    <div id="text_31" class="textshirt class" style="top: 138px; left: 409px; font-size: 20px; font-family: FuturaBookItalic;">El cuerpo fue arrastrado por la</div>    <div id="text_65" class="textshirt class" style="top: 173px; left: 413px; font-size: 20px; font-family: FuturaBookItalic;">corriente del río.</div></div>`;
vt[vt.length]=`<div id="text_72" class="textshirt mergershirt" style="top: 300px; left: 407px; width: 328px; height: 61px;">    <div id="text_32" class="textshirt class" style="top: 300px; left: 407px; font-size: 18px; font-family: AvenirBook;">Se sintió arrastrado por la culpa</div>    <div id="text_67" class="textshirt class" style="top: 331px; left: 408px; font-size: 18px; font-family: AvenirBook;">durante años.</div></div>`;
vt[vt.length]=`<div id="text_73" class="textshirt mergershirt" style="top: 452px; left: 407px; width: 325px; height: 63px;">    <div id="text_33" class="textshirt class" style="top: 452px; left: 407px; font-family: OpenSansSemiboldItalic; font-size: 16px;">El arrastrado estilo de vida lo</div>    <div id="text_69" class="textshirt class" style="top: 485px; left: 407px; font-size: 18px; font-family: AvenirBook;">había consumido.</div></div>`;
vt[vt.length]=`<div id="text_34" class="textshirt mergershirt" style="top: 598px; left: 992px; font-size: 49px; font-family: Amatic_bold;">arrastrado</div>`;

vte[vte.length]=`<div id="text_80" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 409px; width: 341px; height: 65px; font-size: 19px;">    <div id="text_61" class="textshirt class" style="top: 138px; left: 409px; font-size: 19px; font-family: FuturaBookItalic;">The body was dragged by the</div>    <div id="text_74" class="textshirt class" style="top: 173px; left: 410px; font-size: 19px; font-family: FuturaBookItalic;">river current.</div></div>`;
vte[vte.length]=`<div id="text_81" class="textshirt mergershirt`+transws+`" style="top: 300px; left: 407px; width: 345px; height: 60px; font-size: 21px;">    <div id="text_62" class="textshirt class" style="top: 300px; left: 407px; font-size: 21px; font-family: AvenirBook;">He felt dragged down by guilt</div>    <div id="text_76" class="textshirt class" style="top: 330px; left: 408px; font-size: 21px; font-family: FuturaBookItalic;">for years.</div></div>`;
vte[vte.length]=`<div id="text_82" class="textshirt mergershirt`+transws+`" style="top: 452px; left: 407px; width: 349px; height: 65px; font-size: 19px;">    <div id="text_63" class="textshirt class" style="top: 452px; left: 407px; font-family: OpenSansSemiboldItalic; font-size: 19px;">The dragged-out lifestyle had consumed</div>    <div id="text_78" class="textshirt class" style="top: 487px; left: 410px; font-size: 19px; font-family: FuturaBookItalic;">him.</div></div>`;
vte[vte.length]=`<div id="text_64" class="textshirt mergershirt`+transws+`" style="width: 324px; white-space: normal; top: 552px; left: 814px; font-size: 20px; font-family: SourceSansProLight;">Dragged; pulled; drawn out — (Past participle of *arrastrar*) Pulled along with force; also describing something prolonged, tedious, or someone who is downcast or worn out.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}