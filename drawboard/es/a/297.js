var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Anunciando';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 297;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 16px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 16px; font-family: AvenirLight;">Está anunciando las nuevas reglas en</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 16px; font-family: AvenirLight;">la televisión.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 17px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 17px; font-family: AvenirBook;">El profesor está anunciando los resultados</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 17px; font-family: AvenirBook;">del examen.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 16px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 16px;">La empresa está anunciando un</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 16px; font-family: AvenirBook;">nuevo producto.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 592px; left: 584px; font-size: 30px; font-family: Amatic_bold;">Anunciando; anunciar</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 20px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 20px; font-family: AvenirLight;">He is announcing the new rules</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 20px; font-family: AvenirLight;">on television.</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 20px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 20px; font-family: AvenirBook;">The teacher is announcing the</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 20px; font-family: AvenirBook;">exam results.</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 19px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 19px;">The company is announcing a</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 19px; font-family: AvenirBook;">new product.</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 594px; left: 450px; font-size: 26px; font-family: Amatic_bold;">Announcing. anunciar to announce, to declare</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}