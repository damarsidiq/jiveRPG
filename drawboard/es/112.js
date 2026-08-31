var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Evalúe';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 112;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 158px; left: 354px; font-size: 17px; font-family: AvenirLight;">Por favor, 'evalúe' el desempeño del equipo antes de finalizar el trimestre.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 354px; font-size: 16px; font-family: AvenirBook;">El cliente debe 'evalúe' todas las opciones antes de tomar una decisión final.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 18px;">Es importante que 'evalúe' los riesgos financieros de esta inversión.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 504px; left: 825px; font-size: 40px; font-family: Amatic_bold;">Evalúe</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 158px; left: 354px; font-size: 19px; font-family: AvenirLight;">Please evaluate the team's performance before the quarter ends</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 354px; font-size: 18px; font-family: AvenirBook;">The client must evaluate all options before making a final decision</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 17px;">It is important that you evaluate the financial risks of this investment</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 500px; left: 463px; font-size: 40px; font-family: Amatic_bold;">Evaluate (Formal command/Subjunctive)</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
