var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'matutina';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 1013;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/art-1851483_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 156px; left: 710px; font-size: 21px; font-family: SourceSansProExtraLight;">La reunión matutina comienza a las ocho.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 292px; left: 708px; font-size: 18px; font-family: SourceSansProLight;">Ella disfruta de su caminata matutina por el parque.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 401px; left: 709px; font-family: OpenSansLight; font-size: 19px;">La luz matutina entraba por las ventanas.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 607px; left: 997px; font-size: 40px; font-family: Amatic_bold;">matutina</div>`;
vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 156px; left: 709px; font-size: 18px; font-family: SourceSansProExtraLight;">The morning meeting begins at eight.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 292px; left: 707px; font-size: 18px; font-family: SourceSansProLight;">She enjoys her morning walk through the park.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 401px; left: 708px; font-family: OpenSansLight; font-size: 15px;">The morning light was coming through the windows.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="width: 300px; white-space: normal; top: 549px; left: 710px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">Morning or early-morning. It is the feminine form of matutino and describes something that happens or exists in the morning.</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}