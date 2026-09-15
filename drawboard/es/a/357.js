var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Elogios';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 357;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Recibió muchos 'elogios' por su presentación.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">No necesita 'elogios', solo necesita que seas sincero.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Todos sus 'elogios' me parecieron exagerados.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 374px; left: 863px; font-size: 33px; font-family: NotoSansSemiCondensedLight;">Elogios</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 327px; font-size: 33px; font-family: Amatic;">He/She received a lot of 'praise' for his/her presentation.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">He/She doesn't need 'praise'; he/she just needs you to be sincere.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">All his/her 'compliments' seemed exaggerated to me.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 380px; left: 799px; font-size: 13px; font-family: NotoSansSemiCondensedLight;">Praises / compliments / eulogies.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};

vt=[];
vte=[];

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 33px; font-family: Amatic;">"Elogios fúnebres" = formal eulogy. </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">In US culture, elogios are freely given. </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 15px;">In Japanese-influenced or British-influenced Chilean circles, excessive elogios can be distrusted. </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 374px; left: 743px; font-size: 13px; font-family: NotoSansSemiCondensedLight;">In Argentina, "tirar elogios" can be flirtatious. </div>`;


/*elogio (singular), elogiar (verb: to praise), elogiando, elogiado, elogioso (adjective: laudatory).*/

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}