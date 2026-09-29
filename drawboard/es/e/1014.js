var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'ocio';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1014;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/art-1851483_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 156px; left: 710px; font-size: 18px; font-family: SourceSansProExtraLight;">Durante sus vacaciones, dedica mucho tiempo al ocio.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 292px; left: 708px; font-size: 17px; font-family: SourceSansProLight;">El parque ofrece actividades de ocio para toda la familia.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 401px; left: 709px; font-family: OpenSansLight; font-size: 15px;">Leer es una de mis formas favoritas de disfrutar del ocio.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 607px; left: 1024px; font-size: 40px; font-family: Amatic_bold;">ocio</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 156px; left: 709px; font-size: 16px; font-family: SourceSansProExtraLight;">During his vacation, he spends a lot of time on leisure activities.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 707px; font-size: 18px; font-family: SourceSansProLight;">The park offers leisure activities for the whole family.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 401px; left: 708px; font-family: OpenSansLight; font-size: 15px;">Reading is one of my favorite ways to enjoy my free time.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 300px; white-space: normal; top: 518px; left: 710px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">Leisure, free time, or recreation. It refers to time that is not occupied by work or other obligations and may also refer to activities done for enjoyment.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}