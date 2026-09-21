var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Latidos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 855;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 393px; font-size: 20px; font-family: SourceSansProLight;">Sentía los latidos de su corazón acelerados por el nerviosismo.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 392px; font-size: 18px; font-family: OpenSansItalic;">El médico escuchó los latidos con el estetoscopio.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 396px; font-family: Ubuntu_condensed; font-size: 21px;">Los latidos constantes indicaban que el paciente se recuperaba.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 640px; left: 793px; font-size: 51px; font-family: Amatic_bold;">Latidos</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 392px; font-size: 20px; font-family: SourceSansProLight;">He felt the beats of his heart racing from nervousness.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 265px; left: 391px; font-size: 18px; font-family: OpenSansItalic;">The doctor listened to the heartbeats with the stethoscope.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 406px; left: 395px; font-family: Ubuntu_condensed; font-size: 23px;">The steady beats indicated that the patient was recovering.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 390px; white-space: normal; top: 640px; left: 700px; font-size: 20px; font-family: OpenSansLight;">Heartbeats or pulses.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}