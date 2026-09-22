var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'ha habido';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 932;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/blackboard-2618793.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 769px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">En los últimos años ha habido un aumento notable de la demanda.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">Ha habido varios intentos de resolver el conflicto sin éxito.</div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">Durante la reunión ha habido un intenso debate sobre el presupuesto.</div>`;
vt[vt.length]=`<div id="text_24" class="textshirt mergershirt" style="top: 533px; left: 954px; font-size: 49px; font-family: Amatic_bold; color: rgb(255, 255, 255);">ha habido</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">In recent years there has been a notable increase in demand.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">There have been several unsuccessful attempts to resolve the conflict.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">During the meeting there has been an intense debate about the budget.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="white-space: normal; width: 500px; top: 483px; left: 631px; font-size: 17px; font-family: MetropolLightLight; color: rgb(255, 255, 255);">Present perfect form of the impersonal verb “haber.” It means “there has been” or “there have been.” This expression is used to indicate the existence or occurrence of something in a period that extends from the past up to the present moment.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}