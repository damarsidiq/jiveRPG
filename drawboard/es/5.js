var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const bimgpath = storyline.jsonUrl+'./drawboard/bimg/drawing-pad-1209781_1280.jpg';
export const dbtitle = 'abstinencia leve';
const defaultspeed = 50;
const drabindex = 5;
const transws = '`+transws+`';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="`+bimgpath+`" style=""></div>`;
dbbg += '<style>.textshirt{color:#000;}</style>';



vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="font-weight: bold; top: 253px; left: 231px; font-size: 16px; color: rgb(28, 107, 23);">Después de reducir la dosis, el paciente solo mostró  abstinencia leve, como algo de irritabilidad.</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 160px; left: 230px; width: 423px; height: 31px;"><div id="text_3" class="textshirt" style="top: 160px; left: 230px; font-size: 18px; color: rgb(178, 18, 18);">Entre cigarrillos, la persona tiene una</div><div id="text_7" class="textshirt" style="top: 161px; left: 534px; color: rgb(11, 88, 139); font-size: 16px;">abstinencia leve.</div></div>`;
vt[vt.length]=`<div id="text_13" class="textshirt mergershirt" style="top: 362px; left: 292px; width: 686px; height: 30px;"><div id="text_5" class="textshirt" style="font-weight: bold; top: 362px; left: 292px; font-size: 16px;">Dejar el café de golpe me causó</div><div id="text_9" class="textshirt" style="font-weight: bold; top: 362px; left: 546px; font-size: 16px; color: rgb(11, 88, 139);">abstinencia leve</div><div id="text_11" class="textshirt" style="font-weight: bold; top: 362px; left: 678px; font-size: 16px;">durante dos días, solo dolor de cabeza.</div></div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 597px; left: 805px; font-size: 23px;">Abstinencia leve</div>`;

vte[vte.length]=`<div id="text_4" class="textshirt mergershirt `+transws+`" style="font-weight: bold; top: 253px; left: 231px; font-size: 16px; color: rgb(28, 107, 23);">After reducing the dose, the patient only showed  'mild withdrawal', like some irritability.</div><div id="text_6" class="textshirt" style="top: 597px; left: 804px; font-size: 23px;">Mild withdrawal</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt `+transws+`" style="top: 160px; left: 230px; width: 423px; height: 31px;"><div id="text_3" class="textshirt" style="top: 160px; left: 230px; font-size: 18px; color: rgb(178, 18, 18);">Between cigarettes, the person is in</div><div id="text_7" class="textshirt" style="top: 161px; left: 525px; color: rgb(11, 88, 139); font-size: 16px;">mild withdrawal.</div></div>`;
vte[vte.length]=`<div id="text_13" class="textshirt mergershirt `+transws+`" style="top: 362px; left: 292px; width: 686px; height: 30px;"><div id="text_5" class="textshirt" style="font-weight: bold; top: 362px; left: 257px; font-size: 16px;">Quitting coffee suddenly caused me </div><div id="text_9" class="textshirt" style="font-weight: bold; top: 362px; left: 541px; font-size: 16px; color: rgb(11, 88, 139);">'mild withdrawal' </div><div id="text_11" class="textshirt" style="font-weight: bold; top: 362px; left: 678px; font-size: 16px;">for two days, just a headache.</div></div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt `+transws+`" style="top: 597px; left: 805px; font-size: 23px;">mild withdrawal</div>`;




dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
