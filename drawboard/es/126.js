var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Venderte';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 126;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 15px; font-family: AvenirLight;">Si quieres conseguir ese trabajo, tienes que saber 'venderte' bien en la entrevista.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 20px; font-family: Brandon_Grotesque_regular;">No debes 'venderte' barato solo porque necesitas dinero rápido.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 14px;">Los políticos suelen intentar 'venderte' una idea perfecta que nunca se cumple.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 503px; left: 794px; font-size: 44px; font-family: Amatic_bold;">Venderte</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 14px; font-family: AvenirLight;">If you want to get that job, you have to know how to sell yourself well in the interview</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 20px; font-family: Brandon_Grotesque_regular;">You shouldn't sell yourself cheap just because you need money fast</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 14px;">Politicians often try to sell you a perfect idea that never comes true</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 502px; left: 723px; font-size: 44px; font-family: Amatic_bold;">To sell yourself</div>v`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
