export const dbtitle = 'ciertas vias';
export var dbset = [];

var vt = [];
var vte = [];



var dbbg =`<div id="dbbackg" class="textshirt imageshirt" style="width: 1280px; height: 720px;"><img src="http://pxpedia/pxpedia/drawing-pad-1209781_1280.jpg?timeit=2907" style=""></div>`;
var dbbtn = `<div id="dbbutton" class="textshirt dbbutton" style="top: 91.3769%; left: 95.4652%; width: 36px; height: 36px;"><div id="dbbutton2" class="dbbutton textshirt circleshirt" style="height: 36px; width: 36px; top: 91.3769%; left: 95.4652%; background-color: rgb(255, 255, 255); border-color: rgb(255, 255, 255); color: rgb(255, 255, 255);"></div><div id="dbbutton3" class="dbbutton textshirt circleshirt" style="height: 22px; width: 22px; top: 92.4896%; left: 96.0907%;"></div></div>`;

dbbg += '<style>.textshirt{color:#000;}</style>';

vt[vt.length] = `<div id="text_29" class="textshirt mergershirt" style="top: 157px; left: 436px; font-size: 15px;">Mecánicamente, la nicotina aumenta la actividad neuronal en ciertas vías.</div>`;
vt[vt.length] = `<div id="text_31" class="textshirt mergershirt" style="top: 278px; left: 252px; font-size: 15px;">Para llegar al pueblo, hay que tomar  'ciertas vías' secundarias que no aparecen en el GPS.</div>`;
vt[vt.length] = `<div id="text_30" class="textshirt mergershirt" style="top: 414px; left: 251px; font-size: 15px;">La infección puede propagarse por  'ciertas vías'  que aún no comprendemos del todo.</div>`;
vt[vt.length] = `<div id="text_28" class="textshirt mergershirt wspeed_120" style="top: 565px; left: 801px; font-size: 25px;">Ciertas vías</div>`;



vte[vte.length] = `<div id="text_29" class="textshirt mergershirt wspeed_10" style="top: 157px; left: 436px; font-size: 15px;">mechanistically, nicotine increases neural activity in certain pathways.</div>`;
vte[vte.length] = `<div id="text_31" class="textshirt mergershirt wspeed_10" style="top: 278px; left: 252px; font-size: 15px;">To get to the village, you have to take  'certain routes'  that do not appear on the GPS.</div>`;
vte[vte.length] = `<div id="text_30" class="textshirt mergershirt wspeed_10" style="top: 414px; left: 251px; font-size: 15px;">  The infection can spread through  'certain pathways'  that we do not yet fully understand.</div>`;
vte[vte.length] = `<div id="text_28" class="textshirt mergershirt wspeed_10" style="top: 581px; left: 632px; font-size: 25px;">certain pathways / certain routes</div>`;


dbset[dbset.length] = {dbbg:dbbg,dbbtn:dbbtn,vt:vt,vte:vte};

export function openBoard(){
    jve.dbF.qr.init(dbset,4,50);
}