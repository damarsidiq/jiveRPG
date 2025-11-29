var textSt = `Hago yoga, postura del árbol, postura del niño para el equilibrio, las piernas y el nivel de conciencia.  
Hago kapalbhati para limpiar el interior, el canal de respiración enfocándome en el movimiento del estómago.  
Hago suficiente trabajo de respiración y meditación fuera de las 5 oraciones diarias.  
Camino miles de pasos diariamente como cardio y entrenamiento para la rodilla.  
Me cepillo los dientes cada noche antes de dormir.  
Lavo ambas orejas, mi boca y también mi cara.  
Hago tapping EFT-Qigong en mi frente, mejillas, debajo del ojo, barbilla y debajo de la nariz.  
Hago ejercicio con una mancuerna para fortalecer mis bíceps, los brazos y el agarre de las manos.  
Me lavo el cabello varias veces a la semana. 
<muoborder>
Je fais du yoga, la posture de l'arbre, la posture de l'enfant pour l'équilibre, les jambes et le niveau de conscience.  
Je fais du kapalbhati pour nettoyer l'intérieur, le canal de respiration en me concentrant sur le mouvement de l'estomac.  
Je fais suffisamment de travail respiratoire et de méditation en dehors des 5 prières quotidiennes.  
Je marche des milliers de pas chaque jour comme cardio et entraînement pour le genou.  
Je me brosse les dents chaque nuit avant de me coucher.  
Je lave mes deux oreilles, ma bouche et mon visage aussi.  
Je fais du tapping EFT-Qigong sur mon front, mes joues, sous l'œil, le menton et sous le nez.  
Je fais de l'exercice avec un haltère pour renforcer mes biceps, les bras et la prise des mains.  
Je me lave les cheveux plusieurs fois par semaine.
<muoborder>
Faccio yoga, la posizione dell'albero, la posizione del bambino per l'equilibrio, le gambe e il livello di consapevolezza.  
Faccio kapalbhati per purificare l'interno, il canale respiratorio concentrandomi sul movimento dello stomaco.  
Faccio sufficiente lavoro di respirazione e meditazione al di fuori delle 5 preghiere quotidiane.  
Cammino migliaia di passi ogni giorno come cardio e allenamento per il ginocchio.  
Mi lavo i denti ogni sera prima di andare a letto.  
Lavo entrambe le orecchie, la bocca e anche il viso.  
Faccio tapping EFT-Qigong sulla fronte, sulle guance, sotto l'occhio, sul mento e sotto il naso.  
Esercizio con un manubrio per rafforzare i bicipiti, le braccia e le prese delle mani.  
Mi lavo i capelli diverse volte a settimana.
<muoborder>
Ich mache Yoga, den Baum, die Kindhaltung für das Gleichgewicht, die Beine und das Bewusstseinsniveau.  
Ich mache Kapalbhati zur Reinigung der inneren Atemwege, indem ich mich auf die Bewegung des Bauches konzentriere.  
Ich mache ausreichend Atemübungen und Meditation außerhalb der 5 täglichen Gebete.  
Ich gehe täglich tausende Schritte als Cardio und Workout für das Knie.  
Ich putze mir jeden Abend vor dem Schlafengehen die Zähne.  
Ich wasche beide Ohren, meinen Mund und auch mein Gesicht.  
Ich mache EFT-Qigong-Tapping auf meiner Stirn, den Wangen, unter dem Auge, dem Kinn und unter der Nase.  
Ich trainiere mit einer Hantel, um meine Bizeps, die Arme und die Griffkraft der Hände zu stärken.  
Ich wasche meine Haare mehrmals in der Woche.`;


var esDiction=`["agarre - grip / hold also used for grip strength exercises","ambas - both feminine plural","antes - before","árbol - tree","barbilla - chin","bíceps - biceps","boca - mouth","brazos - arms","cabello - hair","cada - each, every","camino - path, road, way","canal - channel energy channel (nadi) in yoga","cara - face","cardio - cardio","cepillo - brush","como - as, like, how","con - with","conciencia - consciousness","de - of, from","debajo - beneath","del - of the (de + el)","diariamente - daily","diarias - daily","dientes - teeth","dormir - to sleep","eft-qigong - eft-qigong emotional freedom techniques + qigong","ejercicio - exercise","el - the","en - in, on","enfocándome - focusing (myself) / concentrating reflexive form of enfocar","entrenamiento - training","equilibrio - balance","estómago - stomach","fortalecer - to strengthen","frente - front, forehead","fuera - outside, away, or were/was (subjunctive of ser or ir)","hago - i do or i make","interior - inside","kapalbhati - kapalbhati skull-shining breath (pranayama)","la - the (feminine singular)","las - the (feminine plural)","lavo - i wash from lavar","limpiar - to clean","los - the (masculine plural)","mancuerna - dumbbell","manos - hands","meditación - meditation","mejillas - cheeks","mi - my","miles - miles","mis - my (plural)","movimiento - movement","nariz - nose","niño - boy / child","nivel - level","noche - night","ojo - eye","oraciones - prayers","orejas - ears","para - for, in order to","pasos - steps","piernas - legs","postura - posture","respiración - breath","rodilla - knee","semana - week","suficiente - sufficient","también - also, too","tapping - tapping","trabajo - work","una - a, an (feminine)","varias - several","veces - times","y - and","yoga - yoga"]`;
var esLM=`{"a":{"start":0,"end":2},"á":{"start":3,"end":3},"b":{"start":4,"end":7},"c":{"start":8,"end":17},"d":{"start":18,"end":24},"e":{"start":25,"end":32},"f":{"start":33,"end":35},"h":{"start":36,"end":36},"i":{"start":37,"end":37},"k":{"start":38,"end":38},"l":{"start":39,"end":43},"m":{"start":44,"end":51},"n":{"start":52,"end":55},"o":{"start":56,"end":58},"p":{"start":59,"end":62},"r":{"start":63,"end":64},"s":{"start":65,"end":66},"t":{"start":67,"end":69},"u":{"start":70,"end":70},"v":{"start":71,"end":72},"y":{"start":73,"end":74}}`;

var itDiction=`["al - to the","allenamento - training / workout","anche - also","andare - to go","bambino - child / baby also 'child's pose' (balasana)","bicipiti - biceps","bocca - mouth","braccia - arms","cammino - i walk / walking","canale - channel  energy channel (nadi) in yoga","capelli - hair","cardio - cardio","come - like / as / how","con - with","concentrandomi - concentrating (reflexive) 'concentrandomi su…' = focusing on…","consapevolezza - awareness","del - of the (masculine singular)","dell'albero - of the tree also 'tree pose' in yoga","delle - of the","dello - of the","denti - teeth","di - of / from","diverse - different","e - and","eft-qigong - eft-qigong  emotional freedom technique + qigong","entrambe - both  feminine plural","esercizio - exercise","faccio - i do / i make from 'fare'","fronte - forehead","fuori - out","gambe - legs","ginocchio - knee","giorno - day","guance - cheeks","il - the (masculine singular)","kapalbhati - kapalbhati  skull-shining breath (pranayama)","l'equilibrio - the balance","l'interno - the inside","l'occhio - the eye","la - the (feminine singular)","lavo - i wash from 'lavare'","lavoro - work / job  also 'workout' in fitness context","le - the","letto - bed","livello - level","mani - hands","manubrio - dumbbell also 'handlebar'","meditazione - meditation","mento - chin","mi - me","migliaia - thousands","movimento - movement","naso - nose","ogni - every","orecchie - ears","passi - steps","per - for / to / in order to","posizione - position","preghiere - prayers","prese - grips / holds  also 'push-ups' in some contexts","prima - first","purificare - to purify / to cleanse","quotidiane - daily","rafforzare - to strengthen","respiratorio - respiratory","respirazione - breathing / respiration","sera - evening / night","settimana - week","sotto - under","stomaco - stomach","sufficiente - sufficient","sul - on","sulla - on","sulle - on the (feminine plural)","tapping - tapping","un - a / an (masculine)","viso - face","volte - times","yoga - yoga"]`;
var itLM=`{"a":{"start":0,"end":3},"b":{"start":4,"end":7},"c":{"start":8,"end":15},"d":{"start":16,"end":22},"e":{"start":23,"end":26},"f":{"start":27,"end":29},"g":{"start":30,"end":33},"i":{"start":34,"end":34},"k":{"start":35,"end":35},"l":{"start":36,"end":44},"m":{"start":45,"end":51},"n":{"start":52,"end":52},"o":{"start":53,"end":54},"p":{"start":55,"end":61},"q":{"start":62,"end":62},"r":{"start":63,"end":65},"s":{"start":66,"end":73},"t":{"start":74,"end":74},"u":{"start":75,"end":75},"v":{"start":76,"end":77},"y":{"start":78,"end":78}}`;

var deDiction=`["abend - evening","als - as / when / than","arme - arms","atemübungen - breathing exercises","atemwege - respiratory tracts / airways","auch - also","auf - on / upon","auge - eye","ausreichend - sufficient / adequate","außerhalb - outside / beyond","bauches - abdomen / belly (genitive of 'bauch')","baum - tree","beide - both","beine - legs","bewegung - movement","bewusstseinsniveau - level of consciousness","bizeps - biceps","cardio - cardio","das - the / that","dem - the (dative masculine/neuter)","den - the (masculine accusative)","der - the","des - of the (genitive masculine/neuter)","die - the (feminine)","eft-qigong-tapping - eft/qigong tapping (remains the same, it’s a technique name)","einer - one / a (masculine nominative)","für - for","gebete - prayers","gehe - go / walk","gesicht - face","gleichgewicht - balance / equilibrium","griffkraft - grip strength","haare - hair","hände - hands","hantel - dumbbell","ich - i","indem - by","inneren - inner (accusative/dative form)","jeden - every / each","kapalbhati - kapalbhati (a pranayama breathing technique, name stays the same)","kindhaltung - child's pose (yoga position, 'kindhaltung' or 'balasana')","kinn - chin","knie - knees","konzentriere - concentrate (1st person singular or imperative)","mache - make / do","meditation - meditation","mehrmals - several times / multiple times","mein - my","meine - my (feminine)","meinen - to think / to mean / my (plural)","meiner - my / mine (dative/genitive feminine or plural)","mich - me (accusative)","mir - me (dative)","mit - with","mund - mouth","nase - nose","ohren - ears","putze - clean / brush","reinigung - cleansing / purification","schlafengehen - going to bed / bedtime","schritte - steps","stärken - strengthen","stirn - forehead","täglich - daily","täglichen - daily (accusative/dative form)","tausende - thousands","trainiere - train / exercise / work out","um - around / at","und - and","unter - under","vor - before","wangen - cheeks","wasche - wash","woche - week","workout - workout","yoga - yoga","zähne - teeth","zu - to","zur - to"]`;
var deLM=`{"a":{"start":0,"end":9},"b":{"start":10,"end":16},"c":{"start":17,"end":17},"d":{"start":18,"end":23},"e":{"start":24,"end":25},"f":{"start":26,"end":26},"g":{"start":27,"end":31},"h":{"start":32,"end":34},"i":{"start":35,"end":37},"j":{"start":38,"end":38},"k":{"start":39,"end":43},"m":{"start":44,"end":54},"n":{"start":55,"end":55},"o":{"start":56,"end":56},"p":{"start":57,"end":57},"r":{"start":58,"end":58},"s":{"start":59,"end":62},"t":{"start":63,"end":66},"u":{"start":67,"end":69},"v":{"start":70,"end":70},"w":{"start":71,"end":74},"y":{"start":75,"end":75},"z":{"start":76,"end":78}}`;

var frDiction=`["aussi - also; too","avant - before","avec - with","biceps - biceps","bouche - mouth","bras - arms","brosse - brush","canal - canal / channel (in yoga often “nadi” = energy channel)","cardio - cardio","chaque - each; every","cheveux - hair","comme - like, as","concentrant - concentrating (present participle of “concentrer”)","conscience - consciousness / awareness","coucher - 'bedtime, lying down, setting (of the sun)'","de - of, from","dehors - outside","dents - teeth","des - of the, some","deux - two","du - of the, from the","eft-qigong - eft-qigong (emotional freedom techniques combined with qigong)","en - in, into, as","entraînement - 'training, practice'","et - and","fais - do / make (imperative of 'faire')","fois -  time / occasion","front - forehead","genou - knee","haltère - dumbbell","jambes - legs","je - i","joues - cheeks","jour - day","kapalbhati - kapalbhati (a pranayama breathing technique, often translated as “skull-shining breath”)","l'arbre - the tree","l'enfant - the child","l'équilibre - balance / equilibrium","l'estomac - the stomach","l'exercice - the exercise","l'intérieur - the inside / interior","l'œil - the eye","la - the","lave - wash (imperative of 'laver')","le - the","les - the","ma - my (feminine)","mains - hands","marche - walk / walking / march","méditation - meditation","menton - chin","mes - my (plural)","milliers - thousands","mon - my","mouvement - 'movement, motion'","nettoyer - to clean / to cleanse","nez - nose","niveau -  level","nuit - night","oreilles - ears","par - by, through","pas - not","plusieurs - several","posture - posture","pour - for","prières - prayers","prise - 'catch, capture (noun)'","quotidiennes - daily","renforcer - to strengthen","respiration - breathing","respiratoire - respiratory / breathing-related","semaine - week","sous - under","suffisamment - enough / sufficiently","sur - on, about","tapping - tapping","travail - work","un - a, an, one","visage - face","yoga - yoga"]`;
var frLM=`{"a":{"start":0,"end":2},"b":{"start":3,"end":6},"c":{"start":7,"end":14},"d":{"start":15,"end":20},"e":{"start":21,"end":24},"f":{"start":25,"end":27},"g":{"start":28,"end":28},"h":{"start":29,"end":29},"j":{"start":30,"end":33},"k":{"start":34,"end":34},"l":{"start":35,"end":45},"m":{"start":46,"end":54},"n":{"start":55,"end":58},"o":{"start":59,"end":59},"p":{"start":60,"end":66},"q":{"start":67,"end":67},"r":{"start":68,"end":70},"s":{"start":71,"end":74},"t":{"start":75,"end":76},"u":{"start":77,"end":77},"v":{"start":78,"end":78},"y":{"start":79,"end":79}}`;


/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){
    EHIMGURL = 'https://ik.imagekit.io/pnscgil5d/up/';
}
else{
    EHIMGURL = './jiveRPG/up/';
}
const svisual = ['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg','n.jpg','o.jpg','p.jpg','q.jpg','r.jpg','s.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg','y.jpg','z.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','1a.jpg','1b.jpg','1c.jpg','1d.jpg','1e.jpg'];
const ImgRo = 1;
const oImg = 'k.jpg';
const ehbmtitle = 'rtn';

storyline.intro = `<p>Routine listing.</p>
<div style="font-size:smaller;">
<p>Credits:</p>
<p>Translations:<ul><li><a href="https://www.easemate.ai/ai-translator" target="_blank">EaseMate AI</a></li>
<li><a href="https://grok.com/" target="_blank">Grok</a></li>
</ul></p>
<p>Images:<br><ul><li><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></li></ul></p></div>`;

storyline.lang = ['IT','FR','DE','ES'];
storyline.clang = storyline.deflang = 'es';
/*eo things to adjust*/


var reperc = {
    starter:false,
    storylines:[],
    starterParagraph:false,
    bmidx:false,
    storyvis:svisual,
    setBookmark:function(x){
        if(reperc.localstorage == false){return;}
        reperc.bookmark[reperc.bmidx].cpar = x;
        reperc.localstorage.setItem('easternHeadBM',JSON.stringify(reperc.bookmark));
    },
    initBookmark:function(){
        if (typeof localStorage == "object"){
            reperc.localstorage =  localStorage;
        } else if (typeof globalStorage == "object"){
            reperc.localstorage = globalStorage[location.host];
        } else {
            reperc.localstorage = false;
        }
        if(reperc.localstorage !== false){
            reperc.bookmark = reperc.localstorage.getItem('easternHeadBM');
            if(reperc.bookmark == null){
                reperc.bookmark = [];
                reperc.bmidx = 0;
                reperc.bookmark[0] = {title:ehbmtitle,cpar:0};
            }
            else{
                reperc.bookmark = JSON.parse(reperc.bookmark);
                for(var i=0;i<reperc.bookmark.length;i++){
                    if(reperc.bookmark[i].title == ehbmtitle){
                        reperc.starterParagraph = reperc.bookmark[i].cpar;
                        reperc.bmidx = i;
                        break;
                    }
                }
                if(reperc.bmidx === false){
                    reperc.bmidx = reperc.bookmark.length;
                    reperc.bookmark[reperc.bmidx] = {title:ehbmtitle,cpar:0};
                }
            }
        }
    },
    initDictionary:function(){
        itDiction = JSON.parse(itDiction);
        reperc.itLM = JSON.parse(itLM);
        
        frDiction = JSON.parse(frDiction);
        reperc.frLM = JSON.parse(frLM);

        deDiction = JSON.parse(deDiction);
        reperc.deLM = JSON.parse(deLM);

        esDiction = JSON.parse(esDiction);
        reperc.esLM = JSON.parse(esLM);
    },
    initStory:function(){
        reperc.initBookmark();
        reperc.initDictionary();
        reperc.storyvidx = [];
        for(var i=0;i<reperc.storyvis.length;i++){
            reperc.storyvidx[reperc.storyvidx.length] = i;
        }
        textSt = textSt.split('<muoborder>');
        for(var i=0;i<textSt.length;i++){
            textSt[i] = textSt[i].trim();
            if(textSt[i] == '') continue;
            reperc.storylines[i] = [];
            textSt[i] = textSt[i].split('\n');
            for(var ix=0;ix<textSt[i].length;ix++){
                textSt[i][ix] = textSt[i][ix].trim();
                if(textSt[i][ix] == '') continue;
                reperc.storylines[i][reperc.storylines[i].length] = textSt[i][ix];
            }
        }
	},
    nextHdlr:function(x){
      if(x%ImgRo == 0){          
          var stvidx = jovuniverse.getrand(0,reperc.storyvidx.length);
          var stvi = reperc.storyvidx[stvidx];
          storyline.chapters[storyline.current_chap].elements.narration.illustration = EHIMGURL+reperc.storyvis[stvi];
          reperc.storyvidx.splice(stvidx,1);
          if(!reperc.storyvidx.length){
              for(var i=0;i<reperc.storyvis.length;i++){
                  reperc.storyvidx[reperc.storyvidx.length] = i;
              }
          }
          reperc.setBookmark(x);
      }
    },
    rp:function(){
        storyline.current_chap = reperc.starter;
        if(reperc.starterParagraph !== false){
          storyline.unfold_ = true;
          storyline.chapters[storyline.current_chap].unfoldx(reperc.starterParagraph);
        }
        else {
          storyline.chapters[storyline.current_chap].unfold();
        }
        //$('#text5').css('object-fit','contain');
        var stvidx = jovuniverse.getrand(0,reperc.storyvidx.length);
        var stvi = reperc.storyvidx[stvidx];
        storyline.chapters[storyline.current_chap].elements.narration.illustration = EHIMGURL+reperc.storyvis[stvi];
        reperc.storyvidx.splice(stvidx,1);
        
        document.addEventListener('unfoldx', e => {
            reperc.nextHdlr(e.detail);          
        });
  }
};
var chidx;
var n;

reperc.starter = 1;
config = {type:'repercussion',effect:new repercussion(reperc.rp),prerequisite:false};
chidx = storyline.addChapter(config);

reperc.initStory();
config = {type:'narration',narration:false};
n = new narration();
for(var i=0;i<reperc.storylines[1].length;i++){
    //es,en,fr,de,it
	n.addNarration(reperc.storylines[0][i],null,reperc.storylines[1][i],reperc.storylines[3][i],reperc.storylines[2][i]);
}
n.illustration = EHIMGURL+oImg;
config.narration = n;
chidx = storyline.addChapter(config);

storyline.dictionfn = function(t,l){
    $('#dictionary').remove();
    $('.txtfrg.inq').removeClass('inq');
    const pos = $(l).offset();
    $(l).addClass('inq');
    t = t.toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu, '');
    t = t +' - ';
    let xx = t[0].toLowerCase();

    if(storyline.clang == 'it'){
        if (!reperc.itLM[xx]){
            window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.itLM[xx].start;i<=reperc.itLM[xx].end;i++){
            if(itDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+itDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
    else if(storyline.clang == 'fr'){
        if (!reperc.frLM[xx]){
            window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.frLM[xx].start;i<=reperc.frLM[xx].end;i++){
            if(frDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+frDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
    else if(storyline.clang == 'es'){
        if (!reperc.esLM[xx]){
            window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.esLM[xx].start;i<=reperc.esLM[xx].end;i++){
            if(esDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+esDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
    else if(storyline.clang == 'de'){
        if (!reperc.deLM[xx]){
            window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.deLM[xx].start;i<=reperc.deLM[xx].end;i++){
            if(deDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+deDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        window.open('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
};
$('#text5').prop('src',EHIMGURL+oImg);
