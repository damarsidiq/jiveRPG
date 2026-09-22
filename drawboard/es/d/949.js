var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'mereció';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 949;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/blackboard-2618793.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 769px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">Su dedicación mereció el reconocimiento de toda la organización.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">El proyecto mereció una inversión adicional por su potencial.</div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">La propuesta mereció ser considerada con mayor atención.</div>`;
vt[vt.length]=`<div id="text_24" class="textshirt mergershirt" style="top: 534px; left: 960px; font-size: 49px; font-family: Amatic_bold; color: rgb(255, 255, 255);">mereció</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 90px; left: 171px; font-size: 34px; font-family: Sueellenfrancisco; color: rgb(255, 255, 255);">His dedication deserved the recognition of the entire organization.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 203px; left: 171px; font-size: 22px; font-family: CarlitoItalic; color: rgb(255, 255, 255);">The project deserved additional investment because of its potential.</div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 315px; left: 171px; font-family: SourceSansProItalic; font-size: 22px; color: rgb(255, 255, 255);">The proposal deserved to be considered with greater attention.</div>`;
vte[vte.length]=`<div id="text_24" class="textshirt mergershirt`+transws+`" style="white-space: normal; width: 500px; top: 475px; left: 638px; font-size: 17px; font-family: MetropolLightLight; color: rgb(255, 255, 255);">Third-person singular preterite of the verb “merecer.” It means “he/she/it deserved” or “was worthy of.” The form indicates a completed judgment in the past that something or someone was entitled to a particular outcome, reward, or consideration on the basis of merit.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}