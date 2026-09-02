var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Somete';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 182;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 19px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 19px; font-family: AvenirLight;">El jefe 'somete' al equipo a muchas</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 19px; font-family: AvenirLight;">horas de trabajo</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 22px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 22px; font-family: AvenirBook;">El gobierno 'somete' el plan</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 22px; font-family: AvenirBook;">a votación</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 20px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 20px;">La rutina 'somete' a las personas</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 20px; font-family: AvenirBook;">al estrés diario</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 589px; left: 709px; font-size: 32px; font-family: Amatic_bold;">Somete</div>`;


vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 19px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 19px; font-family: AvenirLight;">The boss subjects the team to many</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 19px; font-family: AvenirLight;">hours of work</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 19px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 19px; font-family: AvenirBook;">The government submits the plan to</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 19px; font-family: AvenirBook;">a vote</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 20px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 20px;">The routine subjects people to</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 20px; font-family: AvenirBook;">daily stress</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 588px; left: 552px; font-size: 32px; font-family: Amatic_bold;">subjects; subdues; submits</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}