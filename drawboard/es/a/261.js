var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Culpa';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 261;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:826px;top:-92px;left:-38px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 88px; left: 666px; font-size: 25px; font-family: DINRegular;">No es culpa tuya, no te preocupes.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 233px; left: 667px; font-size: 27px; font-family: DINRegular;">Siente culpa por lo que hizo.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 369px; left: 670px; font-family: RalewayMedium; font-size: 28px;">La culpa la tiene él, no tú.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 622px; left: 1035px; font-size: 48px; font-family: Amatic_bold;">Culpa</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 88px; left: 666px; font-size: 25px; font-family: DINRegular;">It's not your fault, don't worry.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 233px; left: 667px; font-size: 27px; font-family: DINRegular;">He feels guilt for what he did.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 369px; left: 670px; font-family: RalewayMedium; font-size: 28px;">He is to blame, not you.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 620px; left: 861px; font-size: 48px; font-family: Amatic_bold;">Blame / Guilt / Fault</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}