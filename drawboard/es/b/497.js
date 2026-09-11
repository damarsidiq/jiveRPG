var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'calificaciones';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 497;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-3297994_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:727px;top:-37px;left:3px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 67px; left: 635px; font-size: 17px; font-family: FuturaBookItalic;">Sus calificaciones mejoraron significativamente este semestre.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 161px; left: 635px; font-size: 16px; font-family: AvenirBook;">Las calificaciones del examen se publicarán mañana.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 264px; left: 636px; font-family: OpenSansSemiboldItalic; font-size: 15px;">Necesita obtener buenas calificaciones para entrar a la universidad.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 570px; left: 917px; font-size: 49px; font-family: Amatic_bold;">calificaciones</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 75px; left: 637px; font-size: 17px; font-family: FuturaBookItalic;">His grades improved significantly this semester.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 635px; font-size: 16px; font-family: AvenirBook;">The exam scores will be published tomorrow.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 637px; font-family: OpenSansSemiboldItalic; font-size: 16px;">She needs to get good grades to get into university.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 464px; white-space: normal; top: 532px; left: 666px; font-size: 15px; font-family: SourceSansProRegular; height: 90px;">Grades; scores; ratings; qualifications — Evaluations of academic performance; numerical or letter assessments; also credentials or aptitudes for a job or task.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}