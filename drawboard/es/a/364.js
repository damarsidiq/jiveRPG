var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Asintió';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 364;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/interiorlens-table-8429665_1920.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 717px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_19" class="textshirt mergershirt" style="top: 66px; left: 327px; font-size: 37px; font-family: Amatic;">Le pregunté si estaba lista y ella 'asintió'.</div>`;
vt[vt.length]=`<div id="text_20" class="textshirt mergershirt" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">El jefe 'asintió' con la cabeza en señal de aprobación.</div>`;
vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Él 'asintió' en silencio y se fue.</div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 379px; left: 878px; font-size: 33px; font-family: NotoSansSemiCondensedLight;">Asintió</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 66px; left: 327px; font-size: 36px; font-family: Amatic;">I asked her if she was ready, and she 'nodded'.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 154px; left: 326px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">The boss 'nodded' in approval.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 246px; left: 326px; font-family: OpenSansSemiboldItalic; font-size: 15px;">He 'nodded' silently and left.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 385px; left: 671px; font-size: 13px; font-family: NotoSansSemiCondensedLight;">He/she nodded; he/she assented; he/she agreed silently.</div>`;

/*asentir (infinitive), asiento, asientes, asiente, asintiendo, asintió, asintiera/asintió depending on context.
Use notes: Often means a nonverbal yes. In some contexts it can mean “he/she acknowledged.”
*/



dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}