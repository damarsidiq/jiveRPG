var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Compuesto';
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/chalkboard-2495162_1280.jpg';
const defaultspeed = 30;
const drabindex = 3;
const transws = 'wspeed_10';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 740px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#e5dede;}</style>';
    
    
vt[vt.length] = `<div id="text_21" class="textshirt mergershirt" style="top: 132px; left: 118px; width: 500px; height: 30px;"><div id="text_11" class="textshirt" style="font-size: 18px; top: 132px; left: 118px;">El</div><div id="text_12" class="textshirt" style="font-size: 18px; top: 132px; left: 141px;">principal</div><div id="text_13" class="textshirt" style="text-decoration: underline; font-size: 18px; top: 132px; left: 215px;">compuesto</div><div id="text_14" class="textshirt" style="font-size: 18px; top: 132px; left: 310px;">activo</div><div id="text_15" class="textshirt" style="font-size: 18px; top: 132px; left: 364px;">de</div><div id="text_16" class="textshirt" style="font-size: 18px; top: 132px; left: 391px;">los</div><div id="text_17" class="textshirt" style="font-size: 18px; top: 132px; left: 421px;">cigarrillos</div><div id="text_18" class="textshirt" style="font-size: 18px; top: 132px; left: 504px;">es</div><div id="text_19" class="textshirt" style="font-size: 18px; top: 132px; left: 530px;">la</div><div id="text_20" class="textshirt" style="font-size: 18px; top: 132px; left: 551px;">nicotina.</div></div>`;

vt[vt.length] = `<div id="text_22" class="textshirt mergershirt" style="top: 264px; left: 114px; width: 750px; height: 33px;"><div id="text_4" class="textshirt" style="top: 264px; left: 114px; font-size: 18px;">El agua es un</div><div id="text_5" class="textshirt" style="top: 264px; left: 235px; font-size: 20px;text-decoration: underline;">compuesto</div><div id="text_6" class="textshirt" style="top: 264px; left: 343px; font-size: 18px;">químico formado por dos átomos de hidrógeno y uno de oxígeno.</div></div>`;

vt[vt.length] = `<div id="text_23" class="textshirt mergershirt" style="top: 421px; left: 115px; width: 479px; height: 38px;"><div id="text_7" class="textshirt" style="top: 421px; left: 115px; font-size: 18px;">Esta medicina está </div><div id="text_8" class="textshirt" style="top: 421px; left: 282px; font-size: 18px;text-decoration: underline;">compuesta</div><div id="text_9" class="textshirt" style="top: 421px; left: 387px; font-size: 18px;">de ingredientes naturales.</div></div>`;

vt[vt.length] = `<div id="text_10" class="textshirt mergershirt wspeed_150" style="top: 474px; left: 950px; font-size: 34px;">Compuesto</div>`;



vte[vte.length] = `<div id="text_25" class="textshirt mergershirt `+transws+`" style="top: 159px; left: 134px; font-size: 20px;">The main active compound in cigarettes is nicotine.</div>`;
vte[vte.length] = `<div id="text_27" class="textshirt mergershirt `+transws+`" style="top: 289px; left: 128px; font-size: 20px;">Water is a chemical  compound  formed by two hydrogen atoms and one oxygen atom.</div>`;
vte[vte.length] = `<div id="text_26" class="textshirt mergershirt `+transws+`" style="top: 417px; left: 126px; font-size: 20px;">This medicine is  composed  of natural ingredients.</div>`;
vte[vte.length] = `<div id="text_24" class="textshirt mergershirt" style="top: 507px; left: 978px; font-size: 40px;">compound</div>`;



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
