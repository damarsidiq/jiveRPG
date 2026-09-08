var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Guardárselo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 352;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Le compré un regalo pero voy a 'guardárselo' hasta su cumpleaños.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Es un secreto, puedes 'guardárselo' solo para ti.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">No quería 'guardárselo' más y le confesó la verdad.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 364px; left: 818px; font-size: 33px; font-family: FuturaBook;">Guardárselo</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+` copytopaste" style="top: 66px; left: 327px; font-size: 28px; font-family: Amatic;">I bought a gift for him/her, but I'm going to 'keep it for him/her' until his/her birthday.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+` copytopaste" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">It's a secret; you can 'keep it' just to yourself.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+` copytopaste" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">He/She didn't want to 'keep it' to himself/herself anymore and confessed the truth.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+` copytopaste" style="top: 370px; left: 729px; font-size: 13px; font-family: FuturaBook;">To keep it to oneself / to keep it for oneself.</div>`;

/*guardar (infinitive), me lo guardo, te lo guardas, se lo guarda, guárdatelo (imperative), guardándoselo (gerund).
In Spain, often practical — "guárdaselo en el bolsillo." In Mexico and Central America, deeply emotional — "se lo guardó todo y no dijo nada" = to bottle up feelings. Can be secretive, protective, or resentful.*/



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}