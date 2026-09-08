var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Mantendría';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 356;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Dijo que se 'mantendría' alejado de los problemas.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Si le suben el sueldo, se 'mantendría' en la empresa.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">La promesa que me hizo es que se 'mantendría' en contacto.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 376px; left: 821px; font-size: 33px; font-family: FuturaBook;">Mantendría</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 327px; font-size: 28px; font-family: Amatic;">He said he 'would stay' out of trouble.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">If they raise his salary, he 'would stay' at the company.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">The promise he made me was that he 'would stay' in touch.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 377px; left: 679px; font-size: 13px; font-family: FuturaBook;">He/she/I would maintain / would keep / would support.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};


vt = [];
vte = [];
vt[vt.length]=`<div id="text_14" class="textshirt mergershirt copytopaste" style="top: 66px; left: 327px; font-size: 28px; font-family: Amatic;">"mantendría mi palabra" is a vow in Mexico</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt copytopaste" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">"mantendría la distancia" is diplomatic boundary-setting in Spain</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt copytopaste" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">"mantendría a la familia" = to financially support</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt copytopaste" style="top: 377px; left: 679px; font-size: 13px; font-family: FuturaBook;">He/she/I would maintain / would keep / would support.</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+` copytopaste" style="top: 66px; left: 327px; font-size: 28px; font-family: Amatic;">"mantendría mi palabra" is a vow in Mexico</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+` copytopaste" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">"mantendría la distancia" is diplomatic boundary-setting in Spain</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+` copytopaste" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">"mantendría a la familia" = to financially support</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+` copytopaste" style="top: 377px; left: 679px; font-size: 13px; font-family: FuturaBook;">He/she/I would maintain / would keep / would support.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};


/*mantener (infinitive), mantengo, mantienes, mantiene, mantendrá, mantenido, manteniendo.*/




export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}