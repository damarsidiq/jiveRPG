var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Ponga';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 132;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 15px; font-family: AvenirLight;">Por favor, 'ponga' los documentos firmados sobre mi escritorio antes de las cinco.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 17px; font-family: Brandon_Grotesque_regular;">Es necesario que 'ponga' más esfuerzo en la presentación para convencer al cliente.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 16px;">Si 'pongas' toda la comida en la mesa, nadie podrá comer cómodamente</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 503px; left: 827px; font-size: 44px; font-family: Amatic_bold;">Ponga</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 19px; font-family: AvenirLight;">Please put the signed documents on my desk before five</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 18px; font-family: Brandon_Grotesque_regular;">It is necessary to put more effort into the presentation to convince the client</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 16px;">If you put all the food on the table, no one will be able to eat comfortably</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 502px; left: 460px; font-size: 38px; font-family: Amatic_bold;">Put/Place - (Formal Command/Subjunctive)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
