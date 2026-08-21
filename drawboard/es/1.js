var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'bestia';
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
const defaultspeed = 30;
const drabindex = 1;
const transws = 'wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;



vt[vt.length] = `
<div id="text_22" class="textshirt mergershirt" style="top: 192px; left: 452px; width: auto; height: 51px;">
    
    <div id="text_3" class="textshirt" style="color: rgb(24, 11, 11); top: 192px; left: 452px;">Ese</div><div id="text_4" class="textshirt" style="color: rgb(24, 11, 11); top: 192px; left: 478px;">perro</div><div id="text_5" class="textshirt" style="color: rgb(24, 11, 11); top: 192px; left: 512px;">es</div><div id="text_6" class="textshirt" style="color: rgb(24, 11, 11); top: 192px; left: 530px;">una</div>
    <div id="text_12" class="textshirt" style="top: 192px; left: 557px; color: rgb(34, 23, 23); font-size: 15px;">bestia,</div>
    
    
    <div id="text_15" class="textshirt" style="color: rgb(24, 11, 11); top: 217px; left: 452px;">pero</div><div id="text_16" class="textshirt" style="color: rgb(24, 11, 11); top: 217px; left: 482px;">es</div><div id="text_17" class="textshirt" style="color: rgb(24, 11, 11); top: 217px; left: 500px;">muy</div><div id="text_18" class="textshirt" style="color: rgb(24, 11, 11); top: 217px; left: 529px;">cariñoso</div><div id="text_19" class="textshirt" style="color: rgb(24, 11, 11); top: 217px; left: 582px;">con</div><div id="text_20" class="textshirt" style="color: rgb(24, 11, 11); top: 217px; left: 607px;">los</div><div id="text_21" class="textshirt" style="color: rgb(24, 11, 11); top: 217px; left: 628px;">niños.</div></div>`;


vt[vt.length] = `<div id="text_29" class="textshirt mergershirt" style="top: 263px; left: 451px; width: auto; height: 54px;"><div id="text_15" class="textshirt" style="top: 263px; left: 452px; color: rgb(24, 11, 11);"> El camión pesado avanzaba lento como</div><div id="text_17" class="textshirt" style="top: 287px; left: 451px; color: rgb(24, 11, 11);">una 'bestia' de carga.</div></div>`;

vt[vt.length] = `<div id="text_30" class="textshirt mergershirt" style="top: 405px; left: 451px; width: auto; height: 81px;"><div id="text_19" class="textshirt" style="top: 405px; left: 451px; color: rgb(24, 11, 11);">Cigarrillos es bestia diferente.</div><div id="text_21" class="textshirt" style="top: 430px; left: 451px; color: rgb(24, 11, 11);"> El principal compuesto activo de los cigarrillos</div><div id="text_23" class="textshirt" style="top: 456px; left: 453px; color: rgb(24, 11, 11);"> es la nicotina.</div></div>`;
vt[vt.length] = `<div id="text_25" class="textshirt mergershirt wspeed_150" style="top: 595px; left: 702px; font-size: 22px; color: rgb(0, 0, 0);">Bestia</div>`;


vte[vte.length] = `<div id="text_28" class="textshirt mergershirt `+transws+`" style="top: 192px; left: 452px; width: auto; height: 55px;"><div id="text_10" class="textshirt" style="top: 192px; left: 452px; color: rgb(24, 11, 11);">That dog is a </div><div id="text_12" class="textshirt" style="top: 192px; left: 534px; color: rgb(34, 23, 23); font-size: 15px;">'beast',</div><div id="text_11" class="textshirt" style="top: 217px; left: 452px; color: rgb(24, 11, 11);">but he is very affectionate with children.</div></div>`;

vte[vte.length] = `<div id="text_29" class="textshirt mergershirt `+transws+`" style="top: 263px; left: 451px; width: auto; height: 54px;"><div id="text_15" class="textshirt" style="top: 263px; left: 452px; color: rgb(24, 11, 11);">The heavy truck advanced slowly like</div><div id="text_17" class="textshirt" style="top: 287px; left: 451px; color: rgb(24, 11, 11);">a 'beast' of burden.</div></div>`;


vte[vte.length] = `<div id="text_30" class="textshirt mergershirt `+transws+`" style="top: 405px; left: 451px; width: auto; height: 81px;"><div id="text_19" class="textshirt" style="top: 405px; left: 451px; color: rgb(24, 11, 11);">Cigarettes is a different beast.</div><div id="text_21" class="textshirt" style="top: 430px; left: 451px; color: rgb(24, 11, 11);">The main active compound in cigarettes</div><div id="text_23" class="textshirt" style="top: 456px; left: 453px; color: rgb(24, 11, 11);"> is nicotine.</div></div>`;

vte[vte.length] = `<div id="text_25" class="textshirt mergershirt wspeed_150" style="top: 595px; left: 702px; font-size: 22px; color: rgb(0, 0, 0);">Beast</div>`;




dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
