var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'apuntando';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 105;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 30px; font-family: Amatic;">Ella miró el reloj y vio la aguja horaria 'apuntando' a las cinco</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 288px; left: 385px; font-size: 13px; font-family: AvenirBook;">Coloca la cámara así, 'apuntando' ligeramente hacia abajo para capturar a todos en la cena</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: OpenSansSemiboldItalic; font-size: 13px;">Optaron por adelantar el lanzamiento, 'apuntando' a una entrada temprana al mercado</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 628px; left: 781px; font-size: 40px; font-family: Amatic_bold;">apuntando</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 29px; font-family: Amatic;">She looked at the clock and saw the hour hand pointing at five</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 386px; font-size: 13px; font-family: DINRegular;">Position the camera like this, pointing slightly downwards to capture everyone at the dinner</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 15px;">They opted to bring the launch forward, aiming for an early market entry.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 608px; left: 596px; font-size: 40px; font-family: Amatic_bold;">pointing, aiming, targeting</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
