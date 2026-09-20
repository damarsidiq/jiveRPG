var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Señalando';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 747;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 722px;transform: rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">Estaba señalando el mapa para explicar la ruta.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">El niño seguía señalando el avión en el cielo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: MontserratRegular; font-size: 18px; color: rgb(81, 81, 81);">Fue señalando cada error en el documento.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 563px; left: 801px; font-size: 31px; font-family: OswaldRegular; color: rgb(81, 81, 81);">Señalando</div>`;
vte[vte.length]=`<div id="text_16" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">He was pointing at the map to explain the route.</div>`;
vte[vte.length]=`<div id="text_17" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">The child kept pointing at the plane in the sky.</div>`;
vte[vte.length]=`<div id="text_18" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: MontserratRegular; font-size: 18px; color: rgb(81, 81, 81);">He was pointing out each mistake in the document.</div>`;
vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="width: 350px; white-space: normal; top: 551px; left: 592px; font-size: 18px; font-family: OswaldLight; color: rgb(81, 81, 81);">Pointing, indicating; the act of showing or indicating something with a finger or gesture.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}