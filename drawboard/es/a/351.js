var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Guárdalos';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 351;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">'Guárdalos' en el cajón para que no se pierdan.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">No tires esos documentos, mejor 'guárdalos'.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Si compras pan, 'guárdalos' en la nevera.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 364px; left: 818px; font-size: 33px; font-family: FuturaBook;">Guárdalos</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+` copytopaste" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">'Put them away' in the drawer so they don't get lost.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+` copytopaste" style="top: 154px; left: 326px; font-size: 17px; font-family: AvenirBook;">Don't throw those documents away; you'd better 'put them away'.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+` copytopaste" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">If you buy bread, 'put it away' in the fridge.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+` copytopaste" style="top: 373px; left: 689px; font-size: 13px; font-family: FuturaBook;">Keep them; save them; store them; put them away.</div>`;


//Forms: guardar (infinitive), guardarlo, guardarla, guardarlos, guardarlas, guardándolos, guárdalo, guárdalos.



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}