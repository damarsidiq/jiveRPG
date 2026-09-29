var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'asentado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 984;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 450px; width: 228px; height: 55px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_14" class="textshirt class" style="top: 171px; left: 451px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">La familia está asentada en esta ciudad</div><div id="text_15" class="textshirt class" style="top: 196px; left: 450px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">desde hace generaciones.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 448px; width: 299px; height: 56px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_4" class="textshirt class" style="top: 288px; left: 448px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">Encontraron un pueblo asentado en la cima</div><div id="text_17" class="textshirt class" style="top: 314px; left: 448px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">de la montaña.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 450px; width: 307px; height: 54px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_8" class="textshirt class" style="top: 405px; left: 450px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">Es un hombre asentado, con trabajo estable</div><div id="text_19" class="textshirt class" style="top: 429px; left: 450px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">y casa propia.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 585px; left: 648px; font-size: 45px; font-family: Amatic_bold; color: rgb(0, 0, 0);">asentado</div>`;

vte[vte.length]=`<div id="text_28" class="textshirt mergershirt`+transws+`" style="top: 169px; left: 454px; width: 228px; height: 55px; font-size: 14px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_31" class="textshirt class" style="top: 169px; left: 455px; font-size: 14px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">The family has been settled in this</div><div id="text_32" class="textshirt class" style="top: 194px; left: 454px; font-size: 14px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">city for generations.</div></div>`;
vte[vte.length]=`<div id="text_33" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 452px; width: 299px; height: 56px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_36" class="textshirt class" style="top: 287px; left: 452px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">They found a village settled on</div><div id="text_37" class="textshirt class" style="top: 313px; left: 452px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">the mountaintop.</div></div>`;
vte[vte.length]=`<div id="text_38" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_41" class="textshirt class" style="top: 405px; left: 454px; font-family: NotoSans_Light; font-size: 15px; color: rgb(0, 0, 0);">He is a settled man, with a stable</div><div id="text_42" class="textshirt class" style="top: 429px; left: 454px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">job and his own house.</div></div>`;
vte[vte.length]=`<div id="text_43" class="textshirt mergershirt`+transws+`" style="line-height: 25px; width: 320px; white-space: normal; top: 499px; left: 455px; font-size: 19px; font-family: SourceSansProLightItalic; height: 300px; color: rgb(0, 0, 0);">Settled, established; describes a person, family, or community that is established in a place, or figuratively, someone with a stable life; also means firmly based or grounded.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}