var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'conductual';
const defaultspeed = 50;
const drabindex = 6;
const transws = 'wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_13" class="textshirt mergershirt" style="top: 218px; left: 205px; width: 739px; height: 30px;"><div id="text_3" class="textshirt class" style="top: 218px; left: 205px; font-size: 21px; font-family: DINRegular;">El terapeuta recomendó un tratamiento</div><div id="text_9" class="textshirt class" style="font-weight: bold; text-decoration: underline; top: 218px; left: 580px; font-size: 21px; font-family: DINLight;">conductual</div><div id="text_11" class="textshirt class" style="top: 218px; left: 693px; font-size: 21px; font-family: DINRegular;">para controlar la ansiedad.</div></div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 348px; left: 205px; font-size: 21px; font-family: Baskerville6;">Los cambios conductuales en el niño fueron notables después de empezar la escuela</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 461px; left: 205px; font-family: AvenirOblique; font-size: 19px;">Conductual vs. actitudinal, cualitativo vs. cuantitativo</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt wspeed_90" style="top: 591px; left: 833px; font-size: 30px; font-family: AvenirBookOblique;">Conductual</div>`;



vte[vte.length]=`<div id="text_3" class="textshirt mergershirt `+transws+`" style="top: 218px; left: 205px; font-size: 21px; font-family: DINRegular;">The therapist recommended a 'behavioral' treatment to control anxiety.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt `+transws+`" style="top: 348px; left: 205px; font-size: 21px; font-family: Baskerville6;">The 'behavioral' changes in the child were noticeable after starting school.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt `+transws+`" style="top: 461px; left: 205px; font-family: AvenirOblique; font-size: 19px;">Behavioural vs attitudinal, qualitative vs quantitative</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt `+transws+`" style="top: 591px; left: 833px; font-size: 30px; font-family: AvenirBookOblique;">Behavioural</div>`;





dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
