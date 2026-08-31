var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Mediante';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 111;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 158px; left: 354px; font-size: 27px; font-family: Amatic;">Podemos resolver este problema 'mediante' una reunión honesta y directa.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 354px; font-size: 17px; font-family: AvenirBook;">La empresa aumentó sus ventas 'mediante' campañas digitales agresivas.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Accediste al sistema 'mediante' tu huella dactilar.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 501px; left: 801px; font-size: 40px; font-family: Amatic_bold;">Mediante</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 158px; left: 354px; font-size: 31px; font-family: Amatic;">We can solve this problem through an honest and direct meeting</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 354px; font-size: 17px; font-family: AvenirBook;">The company increased its sales through aggressive digital campaigns</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 19px;">You accessed the system by means of your fingerprint</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 501px; left: 670px; font-size: 40px; font-family: Amatic_bold;">By means of / Through</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
