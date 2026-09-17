var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'aislamiento';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 583;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 450px; width: 228px; height: 55px; font-size: 16px; font-family: Carlito;"><div id="text_14" class="textshirt class" style="top: 171px; left: 451px; font-size: 16px; font-family: Carlito;">El aislamiento social puede afectar gravemente</div><div id="text_15" class="textshirt class" style="top: 196px; left: 450px; font-size: 16px; font-family: Carlito;">la salud mental.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 448px; width: 299px; height: 56px; font-size: 17px; font-family: MetropolLightItalic;"><div id="text_4" class="textshirt class" style="top: 288px; left: 448px; font-size: 17px; font-family: MetropolLightItalic;">Vive en el aislamiento de las montañas,</div><div id="text_17" class="textshirt class" style="top: 314px; left: 448px; font-size: 17px; font-family: MetropolLightItalic;">lejos de cualquier ciudad.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 450px; width: 307px; height: 54px; font-size: 16px; font-family: MontserratLight;"><div id="text_8" class="textshirt class" style="top: 405px; left: 450px; font-size: 16px; font-family: MontserratLight;">El aislamiento del paciente fue necesario</div><div id="text_19" class="textshirt class" style="top: 429px; left: 450px; font-size: 16px; font-family: MontserratLight;">para evitar contagios.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 589px; left: 663px; font-size: 32px; font-family: Amatic_bold;">aislamiento</div>`;
vte[vte.length]=`<div id="text_28" class="textshirt mergershirt`+transws+`" style="top: 169px; left: 454px; width: 228px; height: 55px; font-size: 19px; font-family: NotoSans_Light;"><div id="text_31" class="textshirt class" style="top: 169px; left: 455px; font-size: 19px; font-family: NotoSans_Light;">Social isolation can severely affect</div><div id="text_32" class="textshirt class" style="top: 194px; left: 454px; font-size: 19px; font-family: NotoSans_Light;">mental health.</div></div>`;
vte[vte.length]=`<div id="text_33" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 452px; width: 299px; height: 56px; font-size: 17px; font-family: NotoSans_Light;"><div id="text_36" class="textshirt class" style="top: 287px; left: 452px; font-size: 17px; font-family: NotoSans_Light;">He lives in the isolation of the mountains,</div><div id="text_37" class="textshirt class" style="top: 313px; left: 452px; font-size: 17px; font-family: NotoSans_Light;">far from any city.</div></div>`;
vte[vte.length]=`<div id="text_38" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 17px; font-family: NotoSans_Light;"><div id="text_41" class="textshirt class" style="top: 405px; left: 454px; font-family: NotoSans_Light; font-size: 17px;">The patient's isolation was necessary to</div><div id="text_42" class="textshirt class" style="top: 429px; left: 454px; font-size: 17px; font-family: NotoSans_Light;">prevent contagion.</div></div>`;
vte[vte.length]=`<div id="text_43" class="textshirt mergershirt`+transws+`" style="width: 320px; white-space: normal; top: 523px; left: 455px; font-size: 19px; font-family: SourceSansProLightItalic; height: 300px;">Isolation; seclusion; insulation — The state of being separated from others, either physically or socially; the condition of being alone or cut off from contact.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}