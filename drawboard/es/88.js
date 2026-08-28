var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Superdotadas';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 88;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/table-4326307_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 826px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 163px; left: 706px; font-size: 31px; font-family: Amatic;">Las niñas superdotadas necesitan programas especiales</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 276px; left: 711px; font-size: 15px; font-family: AvenirBook;">Son alumnas superdotadas con un coeficiente intelectual muy alto</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 16px;">Hay una escuela para personas superdotadas en la ciudad</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 625px; left: 718px; font-size: 59px; font-family: Amatic_bold;">Superdotadas</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 163px; left: 706px; font-size: 31px; font-family: Amatic;">Gifted girls need special programs.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 276px; left: 711px; font-size: 15px; font-family: AvenirBook;">They are gifted students with a very high IQ.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 396px; left: 711px; font-family: OpenSansSemiboldItalic; font-size: 16px;">There is a school for gifted people in the city.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 625px; left: 718px; font-size: 59px; font-family: Amatic_bold;">gifted - feminine plural</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
