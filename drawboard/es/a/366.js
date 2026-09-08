var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Entenderás';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 366;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Cuando seas mayor, 'entenderás' por qué lo hice.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Si lees el manual, 'entenderás' cómo funciona.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Pronto 'entenderás' que no era tan difícil.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 375px; left: 825px; font-size: 33px; font-family: FuturaBook;">Entenderás</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 327px; font-size: 36px; font-family: Amatic;">When you are older, you will understand why I did it.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">If you read the manual, you will understand how it works.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 15px;">Soon you will understand that it wasn't that difficult.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 382px; left: 863px; font-size: 13px; font-family: FuturaBook;">You will understand.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}