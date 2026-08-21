var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'zapatos ajustados';
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
const defaultspeed = 30;
const drabindex = 2;
const transws = 'wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';
    

vt[vt.length] = ` <div id="text_60" class="textshirt mergershirt" style="top: 191px; left: 452px; width: 305px; height: 54px;"><div id="text_36" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 454px;">No</div><div id="text_37" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 475px;">uses</div><div id="text_38" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 506px;">zapatos</div><div id="text_39" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 556px;">ajustados</div><div id="text_40" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 616px;">si</div><div id="text_41" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 629px;">vas</div><div id="text_42" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 653px;">a</div><div id="text_43" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 664px;">caminar</div><div id="text_44" class="textshirt" style="color: rgb(0, 0, 0); top: 191px; left: 714px;">mucho,</div><div id="text_45" class="textshirt" style="color: rgb(0, 0, 0); top: 215px; left: 452px;">porque</div><div id="text_46" class="textshirt" style="color: rgb(0, 0, 0); top: 215px; left: 496px;">te</div><div id="text_47" class="textshirt" style="color: rgb(0, 0, 0); top: 215px; left: 511px;">saldrán</div><div id="text_48" class="textshirt" style="color: rgb(0, 0, 0); top: 215px; left: 558px;">ampollas.</div></div>
`;

vt[vt.length] = `<div id="text_61" class="textshirt mergershirt" style="top: 286px; left: 452px; width: 264px; height: 54px;"><div id="text_49" class="textshirt" style="color: rgb(0, 0, 0); top: 286px; left: 452px;">Estos</div><div id="text_50" class="textshirt" style="color: rgb(0, 0, 0); top: 286px; left: 489px;">zapatos</div><div id="text_51" class="textshirt" style="color: rgb(0, 0, 0); top: 286px; left: 539px;">ajustados</div><div id="text_52" class="textshirt" style="color: rgb(0, 0, 0); top: 286px; left: 599px;">me</div><div id="text_53" class="textshirt" style="color: rgb(0, 0, 0); top: 286px; left: 621px;">están</div><div id="text_54" class="textshirt" style="color: rgb(0, 0, 0); top: 286px; left: 657px;">apretando</div><div id="text_55" class="textshirt" style="color: rgb(0, 0, 0); top: 310px; left: 454px;">los</div><div id="text_56" class="textshirt" style="color: rgb(0, 0, 0); top: 310px; left: 475px;">dedos.</div></div>`;


vt[vt.length] = `<div id="text_62" class="textshirt mergershirt" style="top: 521px; left: 642px; width: 123px; height: 30px;"><div id="text_58" class="textshirt" style="text-decoration: underline; color: rgb(0, 0, 0); font-size: 15px; top: 521px; left: 642px;">Zapatos</div><div id="text_59" class="textshirt" style="text-decoration: underline; color: rgb(0, 0, 0); font-size: 15px; top: 521px; left: 701px;">ajustados</div></div>`;

vte[vte.length] = `<div id="text_67" class="textshirt mergershirt `+transws+`" style="top: 193px; left: 453px; width: 297px; height: 53px;"><div id="text_63" class="textshirt" style="top: 193px; left: 453px; color: rgb(0, 0, 0);">Don't wear tight shoes if you are going to walk a lot,</div><div id="text_64" class="textshirt" style="top: 216px; left: 453px;"> because you will get blisters.</div></div>`;
vte[vte.length] = `<div id="text_65" class="textshirt mergershirt `+transws+`" style="top: 333px; left: 451px;">These tight shoes are squeezing my toes.</div>`;
vte[vte.length] = `<div id="text_66" class="textshirt mergershirt `+transws+`" style="top: 523px; left: 686px; font-size: 17px;">tight shoes</div>`;




dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
