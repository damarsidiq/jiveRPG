var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'entrelazan';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 440;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/openbook-581128.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:853px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_71" class="textshirt mergershirt" style="top: 138px; left: 414px; width: 352px; height: 65px; font-size: 17px; font-family: SourceSansProLight;">    <div id="text_31" class="textshirt class" style="top: 138px; left: 414px; font-size: 17px; font-family: SourceSansProLight;">Sus dedos se entrelazan mientras caminan</div>    <div id="text_65" class="textshirt class" style="top: 173px; left: 418px; font-size: 17px; font-family: SourceSansProLight;">por la playa.</div></div>`;
vt[vt.length]=`<div id="text_72" class="textshirt mergershirt" style="top: 300px; left: 417px; width: 328px; height: 61px; font-family: SourceSansProExtraLight;">    <div id="text_32" class="textshirt class" style="top: 300px; left: 417px; font-size: 18px;">Las raíces de los árboles se</div>    <div id="text_67" class="textshirt class" style="top: 331px; left: 418px; font-size: 18px;">entrelazan bajo tierra.</div></div>`;
vt[vt.length]=`<div id="text_73" class="textshirt mergershirt" style="top: 452px; left: 415px; width: 325px; height: 63px; font-family: SourceSansProRegular;">    <div id="text_33" class="textshirt class" style="top: 452px; left: 415px; font-size: 16px; font-family: SourceSansProRegular;">Las historias de los personajes se entrelazan</div>    <div id="text_69" class="textshirt class" style="top: 485px; left: 415px; font-size: 18px; font-family: SourceSansProRegular;">de manera compleja.</div></div>`;
vt[vt.length]=`<div id="text_34" class="textshirt mergershirt" style="top: 618px; left: 983px; font-size: 49px; font-family: Amatic_bold;">entrelazan</div>`;

vte[vte.length]=`<div id="text_80" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 409px; width: 341px; height: 65px; font-size: 19px;">    <div id="text_61" class="textshirt class" style="top: 138px; left: 409px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">Their fingers intertwine as they walk</div>    <div id="text_74" class="textshirt class" style="top: 173px; left: 410px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">along the beach.</div></div>`;
vte[vte.length]=`<div id="text_81" class="textshirt mergershirt`+transws+`" style="top: 300px; left: 407px; width: 345px; height: 60px; font-size: 21px;">    <div id="text_62" class="textshirt class" style="top: 300px; left: 407px; font-size: 21px; font-family: NotoSansSemiCondensedLight;">The tree roots intertwine</div>    <div id="text_76" class="textshirt class" style="top: 330px; left: 408px; font-size: 21px; font-family: NotoSansSemiCondensedLight;">underground.</div></div>`;
vte[vte.length]=`<div id="text_82" class="textshirt mergershirt`+transws+`" style="top: 452px; left: 407px; width: 349px; height: 65px; font-size: 19px;">    <div id="text_63" class="textshirt class" style="top: 452px; left: 407px; font-family: OpenSansSemiboldItalic; font-size: 19px;">The characters' stories intertwine in a</div>    <div id="text_78" class="textshirt class" style="top: 487px; left: 410px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">complex manner.</div></div>`;
vte[vte.length]=`<div id="text_64" class="textshirt mergershirt`+transws+`" style="width: 324px; white-space: normal; top: 552px; left: 814px; font-size: 20px; font-family: SourceSansProLight;">They intertwine; they interlace; they interweave — (Third person plural present of *entrelazar*) To twist or weave together; to connect closely or intricately.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}