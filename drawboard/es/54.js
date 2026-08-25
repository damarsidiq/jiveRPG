var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Emprenda';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 54;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 722px; font-family: RalewayBold; transform: rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 235px; left: 348px; font-size: 19px; font-family: SourceSansProItalic;">Que emprenda el viaje cuando esté listo</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 381px; font-size: 20px; font-family: SourceSansProItalic;">Es importante que emprenda su propio camino</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Ubuntu_condensed; font-size: 19px;">Espero que emprenda este nuevo proyecto con toda la dedicación que merece</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 566px; left: 794px; font-size: 31px; font-family: OswaldRegular;">Emprenda</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 243px; left: 365px; font-size: 19px; font-family: SourceSansProItalic;">Let him undertake the journey when he is ready</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 19px; font-family: SourceSansProItalic;">It is important that he/she undertakes his/her own path</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Trebuchet; font-size: 16px;">I hope you undertake this new project with all the dedication it deserves</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 582px; left: 413px; font-size: 31px; font-family: OswaldRegular;">undertake [formal command / subjunctive]</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
