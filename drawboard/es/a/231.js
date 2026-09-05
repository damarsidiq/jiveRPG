var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Enfatizan';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 231;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 727px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 94px; left: 163px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">Los profesores 'enfatizan' la importancia de leer todos los días.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 228px; left: 171px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">El informe 'enfatiza' los riesgos del cambio climático.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 362px; left: 173px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">Los candidatos 'enfatizan' sus propuestas en los debates.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 481px; left: 919px; font-size: 61px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Enfatizan</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 94px; left: 163px; font-size: 42px; font-family: Amatic; color: rgb(255, 255, 255);">Teachers emphasize the importance of reading every day</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 228px; left: 171px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">The report emphasizes the risks of climate change</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 362px; left: 173px; font-family: OpenSansSemiboldItalic; font-size: 18px; color: rgb(255, 255, 255);">The candidates emphasize their proposals in the debates</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 493px; left: 706px; font-size: 61px; font-family: Amatic_bold; color: rgb(255, 255, 255);">they emphasize; they stress</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};

vt = [];
vte = [];

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 18px; font-family: AvenirLight;">Los profesores enfatizan la importancia de la práctica.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 21px; font-family: Brandon_Grotesque_regular;">Estos resultados enfatizan la necesidad de actuar.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 16px;">Las instrucciones enfatizan la seguridad de los usuarios.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 501px; left: 647px; font-size: 44px; font-family: Amatic_bold;">Enfatizan; enfatizar</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 18px; font-family: AvenirLight;">The teachers emphasize the importance of practice.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 21px; font-family: Brandon_Grotesque_regular;">These results emphasize the need to take action.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 16px;">The instructions emphasize user safety.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 505px; left: 393px; font-size: 44px; font-family: Amatic_bold;">They emphasize / they stress / they highlight</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};

export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}