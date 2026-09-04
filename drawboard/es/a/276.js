var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Cumplimiento';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 276;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/coffee-2425303_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 718px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#fff;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 73px; left: 397px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">El cumplimiento de las normas es obligatorio.  </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 162px; left: 394px; font-size: 17px; font-family: AvenirBook; color: rgb(255, 255, 255);">Celebramos el cumplimiento de nuestros objetivos anuales.  </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(255, 255, 255);">Exigen el estricto cumplimiento del contrato.  </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 334px; left: 794px; font-size: 29px; font-family: Amatic_bold; color: rgb(255, 255, 255);">Cumplimiento</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 73px; left: 397px; font-size: 20px; font-family: AvenirBook; color: rgb(255, 255, 255);">Compliance with the rules is mandatory.  </div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 162px; left: 394px; font-size: 17px; font-family: AvenirBook; color: rgb(255, 255, 255);">We celebrated the achievement of our annual goals.  </div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 237px; left: 393px; font-family: OpenSansSemiboldItalic; font-size: 16px; color: rgb(255, 255, 255);">They demand strict fulfillment of the contract.  </div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 336px; left: 510px; font-size: 24px; font-family: Amatic_bold; color: rgb(255, 255, 255);">cumplir. fulfillment, compliance, observance, or achievement</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}