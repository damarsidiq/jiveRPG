var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'dependiendo del tipo';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 60;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 722px; font-family: RalewayBold; transform: rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 235px; left: 348px; font-size: 19px; font-family: SourceSansProItalic;">La respuesta cambia, dependiendo del tipo de pregunta</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 381px; font-size: 16px; font-family: SourceSansProItalic;">Los precios varían, dependiendo del tipo de servicio</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Ubuntu_condensed; font-size: 19px;">Dependiendo del tipo de vino, se sirve a diferente temperatura</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 568px; left: 686px; font-size: 31px; font-family: OswaldRegular;">dependiendo del tipo</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 243px; left: 365px; font-size: 19px; font-family: SourceSansProItalic;">The answer changes, depending on the type of question</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 19px; font-family: SourceSansProItalic;">Prices vary, depending on the type of service</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Trebuchet; font-size: 16px;">Depending on the kind of wine, it's served at different temperatures</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 576px; left: 667px; font-size: 31px; font-family: OswaldRegular;">depending on the type</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
