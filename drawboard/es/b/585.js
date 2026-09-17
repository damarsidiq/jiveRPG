var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'autodeterminación';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 585;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 450px; width: 228px; height: 55px; font-size: 15px; font-family: Carlito; color: rgb(0, 0, 0);"><div id="text_14" class="textshirt class" style="top: 171px; left: 451px; font-size: 15px; font-family: Carlito; color: rgb(0, 0, 0);">El derecho a la autodeterminación es fundamental</div><div id="text_15" class="textshirt class" style="top: 196px; left: 450px; font-size: 15px; font-family: Carlito; color: rgb(0, 0, 0);">para los pueblos indígenas.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 448px; width: 299px; height: 56px; font-size: 14px; font-family: CarlitoItalic; color: rgb(0, 0, 0);"><div id="text_4" class="textshirt class" style="top: 288px; left: 448px; font-size: 14px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">La autodeterminación le permitió tomar decisiones sobre</div><div id="text_17" class="textshirt class" style="top: 314px; left: 448px; font-size: 14px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">su propia vida.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 450px; width: 307px; height: 54px; font-size: 14px; font-family: CarlitoItalic; color: rgb(0, 0, 0);"><div id="text_8" class="textshirt class" style="top: 405px; left: 450px; font-size: 14px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">Muchos países lucharon por su autodeterminación durante</div><div id="text_19" class="textshirt class" style="top: 429px; left: 450px; font-size: 14px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">el siglo XX.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 591px; left: 604px; font-size: 32px; font-family: Amatic_bold; color: rgb(0, 0, 0);">autodeterminación</div>`;
vte[vte.length]=`<div id="text_28" class="textshirt mergershirt`+transws+`" style="top: 169px; left: 454px; width: 228px; height: 55px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_31" class="textshirt class" style="top: 169px; left: 455px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">The right to self-determination is fundamental</div><div id="text_32" class="textshirt class" style="top: 194px; left: 454px; font-size: 15px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">for indigenous peoples.</div></div>`;
vte[vte.length]=`<div id="text_33" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 452px; width: 299px; height: 56px; font-size: 13px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_36" class="textshirt class" style="top: 287px; left: 452px; font-size: 13px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">Self-determination allowed her to make decisions about</div><div id="text_37" class="textshirt class" style="top: 313px; left: 452px; font-size: 13px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">her own life.</div></div>`;
vte[vte.length]=`<div id="text_38" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 12px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_41" class="textshirt class" style="top: 405px; left: 454px; font-family: NotoSans_Light; font-size: 12px; color: rgb(0, 0, 0);">Many countries fought for their self-determination during</div><div id="text_42" class="textshirt class" style="top: 429px; left: 454px; font-size: 12px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">the 20th century.</div></div>`;
vte[vte.length]=`<div id="text_43" class="textshirt mergershirt`+transws+`" style="width: 320px; white-space: normal; top: 525px; left: 455px; font-size: 19px; font-family: SourceSansProLightItalic; height: 300px; color: rgb(0, 0, 0);">Self-determination; autonomy — The right or ability of a person or group to make their own decisions and control their own destiny, free from external interference.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}