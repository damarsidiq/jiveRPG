var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Equivocas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 114;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 158px; left: 351px; font-size: 18px; font-family: AvenirLight;">Si crees que puedes llegar tarde sin consecuencias, te 'equivocas'</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 357px; font-size: 16px; font-family: Brandon_Grotesque_mediumItalic;">Muchos equivocan la estrategia de marketing con simplemente publicar en redes sociales</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 351px; font-family: RalewayBold; font-size: 16px;">No debes 'equivocar' la confianza con debilidad al negociar un contrato</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 513px; left: 810px; font-size: 31px; font-family: Amatic_bold;">Equivocas</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 158px; left: 350px; font-size: 18px; font-family: AvenirLight;">If you think you can arrive late without consequences, you are wrong</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 348px; font-size: 17px; font-family: Brandon_Grotesque_mediumItalic;">Many mistake the marketing strategy with just posting on social media</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 349px; font-family: RalewayBold; font-size: 16px;">You shouldn't mistake trust for weakness when negotiating a contract</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 507px; left: 395px; font-size: 31px; font-family: Amatic_bold;">Wrong/Mistaken (Usually as "equivocado/a" or "equivocar")</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
