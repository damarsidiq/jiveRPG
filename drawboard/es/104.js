var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'depara';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 104;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 34px; font-family: Amatic;">Hermana, uno nunca sabe lo que le depara la naturaleza</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 288px; left: 385px; font-size: 18px; font-family: AvenirBook;">No puedes controlar lo que el destino nos depara</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Nadie sabe lo que el futuro nos depara.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 630px; left: 835px; font-size: 40px; font-family: Amatic_bold;">depara</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 29px; font-family: Amatic;">Sister, you never know what nature has in store for you</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 386px; font-size: 17px; font-family: AvenirBook;">You can't control what fate has in store for us</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 407px; left: 390px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Nobody knows what the future holds for us</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 607px; left: 756px; font-size: 40px; font-family: Amatic_bold;">holds in store</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
