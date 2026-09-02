var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Sean';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 188;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 23px; font-family: SourceSansProLight;">Espero que 'sean' puntuales a la reunión</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 383px; font-size: 18px; font-family: OpenSansItalic;">Es importante que 'sean' honestos conmigo</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 23px;">Quiero que las instrucciones 'sean' claras</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 627px; left: 839px; font-size: 40px; font-family: Amatic_bold;">Sean</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 23px; font-family: SourceSansProLight;">I hope they are punctual for the meeting</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 265px; left: 383px; font-size: 18px; font-family: OpenSansItalic;">It's important that they are honest with me</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 23px;">I want the instructions to be clear</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 630px; left: 498px; font-size: 40px; font-family: Amatic_bold;">(they) are — subjunctive form of "ser"</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}