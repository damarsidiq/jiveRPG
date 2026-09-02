var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Alaban';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 194;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 23px; font-family: SourceSansProLight;">Los críticos 'alaban' la nueva película del director</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 383px; font-size: 18px; font-family: OpenSansItalic;">Sus compañeros 'alaban' su dedicación al trabajo</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 23px;">Muchos lectores 'alaban' la claridad de este libro</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 634px; left: 806px; font-size: 51px; font-family: Amatic_bold;">Alaban</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 23px; font-family: SourceSansProLight;">Critics praise the director's new film</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 265px; left: 383px; font-size: 18px; font-family: OpenSansItalic;">His colleagues praise his dedication to work</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 23px;">Many readers praise the clarity of this book</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 634px; left: 735px; font-size: 51px; font-family: Amatic_bold;">(they) praise</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}   