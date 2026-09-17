var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
export const dbtitle = 'huir';
const defaultspeed = 25;
const transws = ' wspeed_10';
const drabindex = 640;

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/tablet-602968_1280.jpg';
var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width:1280px;height:712px;"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt copytopaste" style="top: 157px; left: 353px; font-size: 21px; font-family: Ubuntu_condensed;">Tuvieron que huir del país por razones políticas.</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt copytopaste" style="top: 261px; left: 352px; font-size: 32px; font-family: Sueellenfrancisco;">El sospechoso intentó huir cuando vio a la policía.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt copytopaste" style="top: 373px; left: 352px; font-family: SourceSansProRegular; font-size: 20px;">No puedes huir de tus problemas para siempre.</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt copytopaste" style="top: 502px; left: 842px; font-size: 44px; font-family: Amatic_bold;">huir</div>`;

vte[vte.length]=`<div id="text_19" class="textshirt mergershirt`+transws+`" style="top: 157px; left: 353px; font-size: 21px; font-family: NotoSans_Condensed_ExtraLight;">They had to flee the country for political reasons.</div>`;
vte[vte.length]=`<div id="text_20" class="textshirt mergershirt`+transws+`" style="top: 261px; left: 352px; font-size: 19px; font-family: MontserratExtraLight;">The suspect tried to flee when he saw the police.</div>`;
vte[vte.length]=`<div id="text_21" class="textshirt mergershirt`+transws+`" style="top: 373px; left: 352px; font-family: RalewayLight; font-size: 16px;">You can't run away from your problems forever.</div>`;
vte[vte.length]=`<div id="text_22" class="textshirt mergershirt`+transws+`" style="width: 400px; white-space: normal; top: 454px; left: 510px; font-size: 14px; font-family: MetropolLightLight;">To flee; to escape; to run away — To run away from a place, person, or situation, especially from danger, pursuit, or something unpleasant.</div>`;
dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}