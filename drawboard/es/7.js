var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'Tejido';
const defaultspeed = 25;
const drabindex = 7;
const transws = ' wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 185px; left: 204px; font-size: 21px; font-family: Baskerville6;">Este vestido está hecho de un 'tejido' muy suave y ligero.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 318px; left: 205px; font-size: 21px; font-family: Baskerville6;">El médico examinó el 'tejido' dañado después de la cirugía</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 461px; left: 205px; font-family: AvenirOblique; font-size: 19px;">El tejido moral de la sociedad se había corrompido hasta la médula.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt wspeed_150" style="top: 599px; left: 872px; font-size: 30px; font-family: AvenirBookOblique;">Tejido</div>`;



vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 185px; left: 204px; font-size: 21px; font-family: Baskerville6;">This dress is made of a very soft and light 'fabric'. </div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 318px; left: 205px; font-size: 21px; font-family: Baskerville6;">The doctor examined the damaged 'tissue' after the surgery.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 461px; left: 205px; font-family: AvenirOblique; font-size: 19px;">The society's moral fabric had become rotten to the core.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+` wspeed_90" style="top: 608px; left: 776px; font-size: 34px; font-family: DINRegularAlternate;">fabric / tissue</div>`;




dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
