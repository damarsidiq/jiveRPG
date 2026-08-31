var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Disfrazada';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 125;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 157px; left: 353px; font-size: 16px; font-family: AvenirLight;">La espía llegó a la fiesta 'disfrazada' de camarera para pasar desapercibida.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 261px; left: 352px; font-size: 18px; font-family: Brandon_Grotesque_regular;">El peligro estaba 'disfrazado' de una oportunidad de inversión demasiado buena.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 15px;">Su verdadera identidad quedó 'disfrazada' bajo capas de maquillaje y peluca.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 497px; left: 771px; font-size: 44px; font-family: Amatic_bold;">Disfrazada</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 17px; font-family: AvenirLight;">The spy arrived at the party disguised as a waitress to go unnoticed</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 18px; font-family: Brandon_Grotesque_regular;">The danger was disguised as an investment opportunity that was too good</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: RalewayBold; font-size: 15px;">Her true identity remained disguised under layers of makeup and a wig</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 497px; left: 653px; font-size: 44px; font-family: Amatic_bold;">Disguised - feminine</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
