var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Sentimientos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 354;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Es importante expresar tus 'sentimientos' con honestidad.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">Sus 'sentimientos' por ella cambiaron con el tiempo.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">No quise herir sus 'sentimientos'.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 375px; left: 812px; font-size: 33px; font-family: NotoSansSemiCondensedLight;">Sentimientos</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+` copytopaste" style="top: 66px; left: 327px; font-size: 28px; font-family: Amatic;">It is important to express your 'feelings' honestly.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+` copytopaste" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">His 'feelings' for her changed over time.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+` copytopaste" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">I didn't want to hurt his/her 'feelings'.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+` copytopaste" style="top: 381px; left: 799px; font-size: 13px; font-family: NotoSansSemiCondensedLight;">Feelings / emotions / sentiments.</div>`;


/*sentimiento (singular), sentimental, sentir (verb), sintiendo.
In Japan-inspired Latin poetry, sentimientos are to be restrained. In Mexican ranchera and Argentine tango lyricism, they are to be declared loudly. Diminutive "sentimientitos" in Caribbean Spanish can be teasing.*/



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}