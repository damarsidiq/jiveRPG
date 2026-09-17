var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'pudieran';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 613;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 450px; width: 228px; height: 55px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_14" class="textshirt class" style="top: 171px; left: 451px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">Ojalá pudieran venir a la fiesta este</div><div id="text_15" class="textshirt class" style="top: 196px; left: 450px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">fin de semana.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 448px; width: 299px; height: 56px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_4" class="textshirt class" style="top: 288px; left: 448px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">No creía que pudieran resolver el</div><div id="text_17" class="textshirt class" style="top: 314px; left: 448px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">problema tan rápidamente.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 450px; width: 307px; height: 54px; font-size: 18px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_8" class="textshirt class" style="top: 405px; left: 450px; font-size: 18px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">Si pudieran elegir, ¿dónde</div><div id="text_19" class="textshirt class" style="top: 429px; left: 450px; font-size: 18px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">vivirían?</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 586px; left: 653px; font-size: 45px; font-family: Amatic_bold; color: rgb(0, 0, 0);">pudieran</div>`;
vte[vte.length]=`<div id="text_28" class="textshirt mergershirt`+transws+`" style="top: 169px; left: 454px; width: 228px; height: 55px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_31" class="textshirt class" style="top: 169px; left: 455px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">I wish they could come to the</div><div id="text_32" class="textshirt class" style="top: 194px; left: 454px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">party this weekend.</div></div>`;
vte[vte.length]=`<div id="text_33" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 452px; width: 299px; height: 56px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_36" class="textshirt class" style="top: 287px; left: 452px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">I didn't think they could solve the</div><div id="text_37" class="textshirt class" style="top: 313px; left: 452px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">problem so quickly.</div></div>`;
vte[vte.length]=`<div id="text_38" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_41" class="textshirt class" style="top: 405px; left: 454px; font-family: NotoSans_Light; font-size: 15px; color: rgb(0, 0, 0);">If they could choose, where would</div><div id="text_42" class="textshirt class" style="top: 429px; left: 454px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">they live?</div></div>`;
vte[vte.length]=`<div id="text_43" class="textshirt mergershirt`+transws+`" style="line-height: 25px; width: 320px; white-space: normal; top: 525px; left: 455px; font-size: 19px; font-family: SourceSansProLightItalic; height: 300px; color: rgb(0, 0, 0);">They could; they were able to; they might — (Third person plural imperfect subjunctive of *poder*) Expresses ability, possibility, or permission in hypothetical, doubtful, or conditional contexts.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}