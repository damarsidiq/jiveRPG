var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Sobrevalorarse';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 217;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 722px;transform: rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">No debes 'sobrevalorarte' solo por tener un título.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 382px; font-size: 20px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">Es fácil 'sobrevalorarse' cuando recibes muchos halagos.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Trebuchet; font-size: 18px; color: rgb(81, 81, 81);">La actriz tiende a 'sobrevalorarse' en las entrevistas.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 567px; left: 748px; font-size: 31px; font-family: OswaldRegular; color: rgb(81, 81, 81);">Sobrevalorarse</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">You shouldn’t overestimate yourself just because you have a degree</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 20px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">It is easy to overvalue yourself when you receive a lot of praise</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Trebuchet; font-size: 18px; color: rgb(81, 81, 81);">The actress tends to overrate herself in interviews</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 560px; left: 426px; font-size: 29px; font-family: OswaldRegular; color: rgb(81, 81, 81);">to overvalue oneself; to overestimate oneself</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}