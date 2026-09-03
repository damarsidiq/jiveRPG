var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Antepasado';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 238;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/chalkboard-2495162_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:740px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 155px; left: 137px; font-size: 19px; font-family: SourceSansProItalic;">Mi 'antepasado' llegó a este país como inmigrante en 1890.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 279px; left: 141px; font-size: 21px; font-family: SourceSansProItalic;">La familia conserva un retrato de su 'antepasado' más famoso.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 404px; left: 144px; font-family: RalewayRegular; font-size: 19px;">Según la leyenda, un 'antepasado' fundó el pueblo.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 554px; left: 912px; font-size: 45px; font-family: OpenSansSemiboldItalic; color: rgb(165, 201, 169);">Antepasado</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 155px; left: 137px; font-size: 19px; font-family: SourceSansProItalic;">My ancestor came to this country as an immigrant in 1890</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 279px; left: 141px; font-size: 21px; font-family: SourceSansProItalic;">The family keeps a portrait of their most famous ancestor</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 404px; left: 144px; font-family: RalewayRegular; font-size: 19px;">According to legend, an ancestor founded the town</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 563px; left: 766px; font-size: 45px; font-family: OpenSansSemiboldItalic; color: rgb(165, 201, 169);">ancestor; forefather</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}