var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'Desanimarte';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 369;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notebook-2637757_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_21" class="textshirt mergershirt" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 18px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 18px; font-family: NotoSansSemiCondensedLight;">No dejes que nadie intente</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 18px; font-family: NotoSansSemiCondensedLight;">'desanimarte'.</div></div>`;
vt[vt.length]=`<div id="text_22" class="textshirt mergershirt" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 19px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">No quise 'desanimarte' con mi</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">comentario.</div></div>`;
vt[vt.length]=`<div id="text_23" class="textshirt mergershirt" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 17px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 17px;">Es fácil 'desanimarte' cuando las cosas</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">no salen bien.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 591px; left: 661px; font-size: 32px; font-family: Amatic_bold;">Desanimarte</div>`;

vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 171px; left: 454px; width: 228px; height: 55px; font-size: 18px;"><div id="text_14" class="textshirt class" style="top: 171px; left: 455px; font-size: 18px; font-family: NotoSansSemiCondensedLight;">Don't let anyone try to</div><div id="text_15" class="textshirt class" style="top: 196px; left: 454px; font-size: 18px; font-family: NotoSansSemiCondensedLight;">discourage you.</div></div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="top: 288px; left: 452px; width: 299px; height: 56px; font-size: 19px;"><div id="text_4" class="textshirt class" style="top: 288px; left: 452px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">I didn't mean to discourage you</div><div id="text_17" class="textshirt class" style="top: 314px; left: 452px; font-size: 19px; font-family: NotoSansSemiCondensedLight;">with my comment.</div></div>`;
vte[vte.length]=`<div id="text_23" class="textshirt mergershirt`+transws+`" style="top: 405px; left: 454px; width: 307px; height: 54px; font-size: 17px;"><div id="text_8" class="textshirt class" style="top: 405px; left: 454px; font-family: OpenSansSemiboldItalic; font-size: 17px;">It's easy to get discouraged when things</div><div id="text_19" class="textshirt class" style="top: 429px; left: 454px; font-size: 17px; font-family: NotoSansSemiCondensedLight;">don't go well.</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 595px; left: 447px; font-size: 19px; font-family: Amatic_bold;">To discourage you; to make you lose heart; to dishearten yourself.</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}