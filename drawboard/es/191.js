var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Acabada';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 191;


const bimgpath = storyline.jsonUrl+'./drawboard/bimg/paper-3204064_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 714px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 149px; left: 384px; font-size: 23px; font-family: SourceSansProLight;">La película ya está 'acabada'; la estrenarán pronto</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 265px; left: 383px; font-size: 18px; font-family: OpenSansItalic;">Después de la mudanza, me sentía 'acabada' de cansancio</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 23px;">La construcción de la nueva escuela está 'acabada'</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 628px; left: 789px; font-size: 51px; font-family: Amatic_bold;">Acabada</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 149px; left: 384px; font-size: 23px; font-family: SourceSansProLight;">The film is already finished; they will premiere it soon</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 265px; left: 383px; font-size: 18px; font-family: OpenSansItalic;">After the move, I felt worn out from exhaustion</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 406px; left: 387px; font-family: Ubuntu_condensed; font-size: 23px;">The construction of the new school is finished</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 627px; left: 483px; font-size: 51px; font-family: Amatic_bold;">finished; completed (feminine)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}   