var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Contaba';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 353;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Mi abuela 'contaba' historias increíbles cuando yo era niño.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">Él 'contaba' con que lo ayudaríamos con la mudanza.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Ella 'contaba' el dinero antes de salir del banco.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 372px; left: 859px; font-size: 33px; font-family: NotoSansSemiCondensedLight;">Contaba</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+` copytopaste" style="top: 66px; left: 327px; font-size: 28px; font-family: Amatic;">My grandmother 'used to tell' incredible stories when I was a child.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+` copytopaste" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">He 'was counting on' us helping him with the move.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+` copytopaste" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">She 'was counting' the money before leaving the bank.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+` copytopaste" style="top: 374px; left: 692px; font-size: 13px; font-family: NotoSansSemiCondensedLight;">He/she/it was telling / was counting / used to count.</div>`;

/*contar (infinitive), cuento, cuentas, cuenta, contamos, contaban, contado, contando.
In storytelling cultures like Colombia or Ireland-influenced Galicia, "contaba" is a hearth word — the elder who contaba historias. In financial contexts in Chile or the US Latino business world, "contaba el dinero" = was counting.Same spelling, two universes.*/



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}