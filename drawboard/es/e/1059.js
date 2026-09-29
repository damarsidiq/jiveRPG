var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'atascados';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1059;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 149px; left: 393px; font-size: 20px; font-family: SourceSansProLight;">Nos quedamos atascados en el tráfico durante dos horas.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 265px; left: 392px; font-size: 18px; font-family: OpenSansItalic;">Los dos coches quedaron atascados en el barro.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="max-width: 517px; white-space: normal; top: 406px; left: 396px; font-family: Ubuntu_condensed; font-size: 21px;">Estamos atascados en el mismo problema desde ayer.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 642px; left: 766px; font-size: 51px; font-family: Amatic_bold;">atascados</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 149px; left: 392px; font-size: 20px; font-family: SourceSansProLight;">We got stuck in traffic for two hours.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 265px; left: 391px; font-size: 18px; font-family: OpenSansItalic;">The two cars got stuck in the mud.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 406px; left: 395px; font-family: Ubuntu_condensed; font-size: 20px;">We have been stuck on the same problem since yesterday.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="max-width: 517px; white-space: normal; top: 517px; left: 392px; font-size: 20px; font-family: OpenSansLight;">stuck, jammed, clogged. Adjective / past participle [masculine plural] of atascar. Describes something blocked and unable to move or progress, can be physical or figurative [stuck on a problem].[traffic][pipe][car]</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}