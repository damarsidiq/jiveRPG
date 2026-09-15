var vt = [];
var vte = [];
export var dbset = [];

var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

//to adjust
const defaultspeed = 25;
const drabindex = 25;
const transws = ' wspeed_10';

const bimgpath = storyline.jsonUrl+'./drawboard/bimg/notepad-1558811_1280.jpg';
export const dbtitle = 'Siquiera';

var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px;height:722px;transform:rotate(9deg);"><img src="`+bimgpath+`"></div>`;
dbbg += '<style>.textshirt{color:#3c3a3a;}</style>';

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 252px; left: 360px; font-size: 18px; font-family: SourceSansProItalic;">No tengo siquiera un centavo en el bolsillo después de pagar las facturas</div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 346px; left: 400px; font-size: 15px; font-family: SourceSansProItalic;">Si siquiera hubieras llamado, habría sabido que llegarías tarde</div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">No entiende siquiera lo más básico de matemáticas</div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 554px; left: 839px; font-size: 25px; font-family: OswaldRegular;">siquiera</div>`;


vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 252px; left: 360px; font-size: 18px; font-family: SourceSansProItalic;">I don't even have a penny in my pocket after paying the bills</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 351px; left: 389px; font-size: 15px; font-family: SourceSansProItalic;">If you had at least called, I would have known you would be late</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: Times_new_roman; font-size: 14px;">He doesn't even understand the most basic math</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 551px; left: 788px; font-size: 25px; font-family: OswaldRegular;">even / at least</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};

vt=[];
vte=[];

vt[vt.length]=`<div id="text_14" class="textshirt mergershirt" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">No tienes siquiera una excusa válida.  </div>`;
vt[vt.length]=`<div id="text_4" class="textshirt mergershirt" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">Dime siquiera la verdad una vez.  </div>`;
vt[vt.length]=`<div id="text_8" class="textshirt mergershirt" style="top: 441px; left: 396px; font-family: NotoSansSemiCondensedLight; font-size: 19px; color: rgb(81, 81, 81);">No vino nadie, siquiera los vecinos.  </div>`;
vt[vt.length]=`<div id="text_6" class="textshirt mergershirt" style="top: 568px; left: 823px; font-size: 31px; font-family: OswaldRegular; color: rgb(81, 81, 81);">Siquiera</div>`;

vte[vte.length]=`<div id="text_14" class="textshirt mergershirt`+transws+`" style="top: 256px; left: 387px; font-size: 19px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">You don't even have a valid excuse.</div>`;
vte[vte.length]=`<div id="text_4" class="textshirt mergershirt`+transws+`" style="top: 341px; left: 382px; font-size: 21px; font-family: SourceSansProItalic; color: rgb(81, 81, 81);">Tell me the truth at least once.</div>`;
vte[vte.length]=`<div id="text_8" class="textshirt mergershirt`+transws+`" style="top: 441px; left: 396px; font-family: NotoSansSemiCondensedLight; font-size: 19px; color: rgb(81, 81, 81);">Nobody came, not even the neighbors.</div>`;
vte[vte.length]=`<div id="text_6" class="textshirt mergershirt`+transws+`" style="top: 572px; left: 449px; font-size: 15px; font-family: OswaldRegular; color: rgb(81, 81, 81);">Even / At least / Not even (negative contexts or questions to emphasize a minimum)</div>`;

dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};
export function openBoard(){
    jve.dbF.qr.init(dbset,drabindex,defaultspeed);
}
