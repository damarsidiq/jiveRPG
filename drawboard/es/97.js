var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'ligado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 97;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3316268_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:724px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 102px; left: 563px; font-size: 13px; font-family: FuturaBookItalic;">El éxito de la empresa está profundamente ligado a la confianza de sus usuarios</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 198px; left: 561px; font-size: 12px; font-family: AvenirBook;">Su destino y el de la comunidad están profundamente ligados por siglos de historia</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 319px; left: 563px; font-family: OpenSansSemiboldItalic; font-size: 15px;">Su éxito está directamente ligado a su arduo trabajo</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 643px; left: 908px; font-size: 48px; font-family: Amatic_bold;">ligado</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 102px; left: 558px; font-size: 26px; font-family: Amatic;">The company's success is deeply linked to its users' trust</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 198px; left: 557px; font-size: 13px; font-family: AvenirBook;">His destiny and that of the community are intricately tied by centuries of history</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 319px; left: 558px; font-family: OpenSansSemiboldItalic; font-size: 15px;">His success is directly linked to his hard work</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 591px; left: 714px; font-size: 31px; font-family: Amatic_bold;">linked /  connected /  tied. -- ligar</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
