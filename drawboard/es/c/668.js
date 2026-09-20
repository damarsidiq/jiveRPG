var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Reparador';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 668;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/chalkboard-2495162_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:740px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 155px; left: 137px; font-size: 19px; font-family: SourceSansProItalic;">El sueño reparador me devolvió las fuerzas.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 279px; left: 141px; font-size: 21px; font-family: SourceSansProItalic;">Tomó un baño reparador después de un día agotador.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 144px; font-family: RalewayRegular; font-size: 19px;">Ese descanso fue reparador para su mente y su cuerpo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 552px; left: 917px; font-size: 52px; font-family: OpenSansSemiboldItalic; color: rgb(165, 201, 169);">Reparador</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 155px; left: 137px; font-size: 19px; font-family: SourceSansProItalic;">The restorative sleep gave me back my strength.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 279px; left: 141px; font-size: 21px; font-family: SourceSansProItalic;">He took a restorative bath after an exhausting day.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 144px; font-family: RalewayRegular; font-size: 19px;">That rest was restorative for his mind and body.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 483px; white-space: normal; top: 546px; left: 704px; font-size: 22px; font-family: OpenSansSemiboldItalic; color: rgb(165, 201, 169);">Restorative, repairing; something that helps recover strength, energy, or well-being.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}