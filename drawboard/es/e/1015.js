var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'ceos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1015;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/art-1851483_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 156px; left: 710px; font-size: 17px; font-family: SourceSansProExtraLight;">Los ceos se reunieron para discutir el futuro de la empresa.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 292px; left: 708px; font-size: 16px; font-family: SourceSansProLight;">Algunos ceos consideran importante invertir en la innovación.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 401px; left: 709px; font-family: OpenSansLight; font-size: 14px;">Los ceos deben asumir la responsabilidad por sus decisiones.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 607px; left: 1024px; font-size: 40px; font-family: Amatic_bold;">ceos</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 156px; left: 709px; font-size: 16px; font-family: SourceSansProExtraLight;">The CEOs met to discuss the future of the company.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 707px; font-size: 18px; font-family: SourceSansProLight;">Some CEOs consider investing in innovation important.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 401px; left: 708px; font-family: OpenSansLight; font-size: 15px;">CEOs must take responsibility for their decisions.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 300px; white-space: normal; top: 490px; left: 710px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">CEOs, or chief executive officers. These are the senior executives responsible for leading and making major decisions for a company. The Spanish acronym is often written CEOs.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}