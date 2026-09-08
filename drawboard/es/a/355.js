var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Creía';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 355;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Yo 'creía' que la reunión era mañana.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Ella 'creía' en los finales felices.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Él 'creía' que podía hacerlo todo solo.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 374px; left: 906px; font-size: 33px; font-family: FuturaBook;">Creía</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+` copytopaste" style="top: 66px; left: 327px; font-size: 28px; font-family: Amatic;">I 'thought' the meeting was tomorrow.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+` copytopaste" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">She 'believed' in happy endings.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+` copytopaste" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">He 'believed' he could do it all alone.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+` copytopaste" style="top: 376px; left: 739px; font-size: 13px; font-family: FuturaBook;">I/he/she believed / used to believe / thought.</div>`;

/*creer (infinitive), creo, crees, cree, creíamos, creyeron, creído.
In secular urban Spain, "creía" leans intellectual — I thought. In Andean communities in Peru/Bolivia, "creía" often carries spiritual weight — belief in Pachamama, in signs. With "se creía" = he thought himself to be, arrogant.*/



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}