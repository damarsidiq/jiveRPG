var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/black-1072366_1280.jpg';
export const dbtitle = 'Permanece';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 34;


var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">La verdad permanece oculta hasta que alguien se atreve a revelarla.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">Ella permanece en casa cuidando a sus padres ancianos.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">A pesar de los cambios, el espíritu de la ciudad permanece intacto</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 488px; left: 956px; font-size: 65px; font-family: Amatic_bold; color: rgb(255, 253, 251);">permanece</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 138px; left: 199px; font-size: 22px; font-family: Helvetica; color: rgb(255, 253, 251);">The truth remains hidden until someone dares to reveal it</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 247px; left: 199px; font-size: 21px; font-family: Helvetica; color: rgb(255, 253, 251);">She stays at home caring for her elderly parents</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 355px; left: 201px; font-family: Helvetica; font-size: 19px; color: rgb(255, 253, 251);">Despite the changes, the spirit of the city remains intact</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 508px; left: 892px; font-size: 46px; font-family: Amatic_bold; color: rgb(255, 253, 251);">he/she/it remains / stays</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
