var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'clonándose';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 611;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';


vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 450px; width: 228px; height: 55px; font-size: 17px; font-family: Carlito; color: rgb(0, 0, 0);"><div id="text_14" class="textshirt class" style="top: 171px; left: 451px; font-size: 17px; font-family: Carlito; color: rgb(0, 0, 0);">Las células se están clonándose rápidamente</div><div id="text_15" class="textshirt class" style="top: 196px; left: 450px; font-size: 17px; font-family: Carlito; color: rgb(0, 0, 0);">en el laboratorio.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 448px; width: 299px; height: 56px; font-size: 17px; font-family: CarlitoItalic; color: rgb(0, 0, 0);"><div id="text_4" class="textshirt class" style="top: 288px; left: 448px; font-size: 17px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">La tecnología permite clonándose organismos</div><div id="text_17" class="textshirt class" style="top: 314px; left: 448px; font-size: 17px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">complejos.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 450px; width: 307px; height: 54px; font-size: 17px; font-family: CarlitoItalic; color: rgb(0, 0, 0);"><div id="text_8" class="textshirt class" style="top: 405px; left: 450px; font-size: 17px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">Se habló de la ética de clonándose seres</div><div id="text_19" class="textshirt class" style="top: 429px; left: 450px; font-size: 17px; font-family: CarlitoItalic; color: rgb(0, 0, 0);">humanos en la conferencia.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 585px; left: 646px; font-size: 40px; font-family: Amatic_bold; color: rgb(0, 0, 0);">clonándose</div>`;
vte[vte.length]=`<div id="text_28" class="textshirt mergershirt`+transws+`" style="top: 169px; left: 454px; width: 228px; height: 55px; font-size: 14px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_31" class="textshirt class" style="top: 169px; left: 455px; font-size: 14px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">The cells are cloning themselves rapidly</div><div id="text_32" class="textshirt class" style="top: 194px; left: 454px; font-size: 14px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">in the laboratory.</div></div>`;
vte[vte.length]=`<div id="text_33" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 452px; width: 299px; height: 56px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_36" class="textshirt class" style="top: 287px; left: 452px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">Technology allows complex organisms to</div><div id="text_37" class="textshirt class" style="top: 313px; left: 452px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">be cloned.</div></div>`;
vte[vte.length]=`<div id="text_38" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);"><div id="text_41" class="textshirt class" style="top: 405px; left: 454px; font-family: NotoSans_Light; font-size: 16px; color: rgb(0, 0, 0);">They discussed the ethics of cloning human</div><div id="text_42" class="textshirt class" style="top: 429px; left: 454px; font-size: 16px; font-family: NotoSans_Light; color: rgb(0, 0, 0);">beings at the conference.</div></div>`;
vte[vte.length]=`<div id="text_43" class="textshirt mergershirt`+transws+`" style="width: 320px; white-space: normal; top: 523px; left: 455px; font-size: 19px; font-family: SourceSansProLightItalic; height: 300px; color: rgb(0, 0, 0);">Cloning itself/themselves; being cloned — (Gerund/reflexive form of *clonar*) The process of producing genetically identical copies of an organism, cell, or DNA sequence; reproducing asexually.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}