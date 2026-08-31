var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Opuesta';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 136;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';


vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 158px; left: 354px; font-size: 26px; font-family: Amatic;">Su opinión es totalmente 'opuesta' a la mía sobre el futuro de la criptomoneda.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 258px; left: 354px; font-size: 17px; font-family: AvenirBook;">Caminaron en direcciones 'opuestas' después de la discusión acalorada.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 16px;">El efecto de este medicamento es 'opuesto' al que esperábamos obtener.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 499px; left: 796px; font-size: 40px; font-family: Amatic_bold;">opuesta</div>`;


   
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 158px; left: 354px; font-size: 28px; font-family: Amatic;">Her opinion is totally opposite to mine about the future of cryptocurrency.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 258px; left: 354px; font-size: 18px; font-family: AvenirBook;">They walked in opposite directions after the heated argument.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 361px; left: 352px; font-family: OpenSansSemiboldItalic; font-size: 17px;">The effect of this medication is opposite to what we expected to get.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 500px; left: 692px; font-size: 40px; font-family: Amatic_bold;">Opposite - feminine</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
