var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'cuestionamiento critico';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 58;



const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 722px; font-family: RalewayBold; transform: rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 235px; left: 348px; font-size: 19px; font-family: SourceSansProItalic;">El cuestionamiento crítico es esencial en la ciencia</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 381px; font-size: 16px; font-family: SourceSansProItalic;">Su análisis mostró un profundo cuestionamiento crítico de las normas establecidas</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Ubuntu_condensed; font-size: 19px;">Fomentamos el cuestionamiento crítico en el aula</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 568px; left: 653px; font-size: 31px; font-family: OswaldRegular;">cuestionamiento critico</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 243px; left: 365px; font-size: 19px; font-family: SourceSansProItalic;">Critical questioning is essential in science</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 19px; font-family: SourceSansProItalic;">His analysis showed a deep critical inquiry into established norms</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Trebuchet; font-size: 16px;">We encourage critical questioning in the classroom</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 576px; left: 685px; font-size: 31px; font-family: OswaldRegular;">Critical questioning</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
