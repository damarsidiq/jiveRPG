var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Vergonzoso';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 119;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 15px; font-family: AvenirLight;">Fue muy 'vergonzoso' cuando tropecé frente a toda la audiencia en la conferencia.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 16px; font-family: Brandon_Grotesque_regular;">Es 'vergonzoso' que una empresa tan grande tenga tantos errores en su servicio al cliente.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 15px;">Se sintió 'vergonzoso' admitir que no sabía cómo usar la nueva aplicación.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 499px; left: 765px; font-size: 44px; font-family: Amatic_bold;">Vergonzoso</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 14px; font-family: AvenirLight;">It was very embarrassing when I tripped in front of the whole audience at the conference</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 18px; font-family: Brandon_Grotesque_regular;">It is shameful that such a big company has so many errors in its customer service</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 17px;">He felt ashamed to admit he didn't know how to use the new app</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 502px; left: 615px; font-size: 44px; font-family: Amatic_bold;">Shameful / Embarrassing</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
