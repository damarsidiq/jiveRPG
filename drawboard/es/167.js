var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Vendiendo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 167;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 191px; left: 454px; font-size: 14px; font-family: AvenirLight;">Está 'vendiendo' su coche para pagar las deudas</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 287px; left: 447px; font-size: 13px; font-family: AvenirBook;">Llevan toda la mañana 'vendiendo' frutas en el mercado</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 13px;">No me gusta la idea de estar 'vendiendo' mi tiempo</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 590px; left: 682px; font-size: 32px; font-family: Amatic_bold;">Vendiendo</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 191px; left: 454px; font-size: 15px; font-family: AvenirLight;">He is selling his car to pay off debts</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 287px; left: 447px; font-size: 13px; font-family: AvenirBook;">They have been selling fruits at the market all morning</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 15px;">I don't like the idea of selling my time</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 591px; left: 702px; font-size: 35px; font-family: Amatic_bold;">selling</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}