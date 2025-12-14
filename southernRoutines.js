var textSt = `i do yoga, tree pose,child pose for balance, the legs and awareness level.
i do kapalbhati for cleansing the internal,respiration channel by focusing on the movement of the stomach.
i do sufficient breathwork and meditation outside of the 5 daily prayers.
i walk thousands of steps daily as a cardio and workout for the knee.
i brush my teeth every night before bed.
i wash both of my ears, my mouth and face too.
i do EFT-Qigong tapping on my forehead, cheeks, below the eye, chin and below the nose.
i exercise with a dumbbell to strengthen my biceps, the arms, and grips of the hands.
i wash my hair several times a week.
<muoborder>
Я занимаюсь йогой, позой дерева, позой ребенка для баланса, ног и уровня осознания.  
Я делаю капалабхати для очищения внутренних дыхательных путей, сосредотачиваясь на движении живота.  
Я выполняю достаточное количество дыхательных упражнений и медитации вне 5 ежедневных молитв.  
Я ежедневно прохожу тысячи шагов как кардио и тренировка для коленей.  
Я чищу зубы каждую ночь перед сном.  
Я мою оба уха, рот и лицо тоже.  
Я делаю EFT-Цигун, постукивая по лбу, щекам, под глазом, подбородку и под носом.  
Я занимаюсь с гантелей, чтобы укрепить свои бицепсы, руки и хват рук.  
Я мою волосы несколько раз в неделю.
<muoborder>
Jag gör yoga, trädpose, barnpose för balans, benen och medvetandenivå.  
Jag gör kapalbhati för att rena de inre andningskanalerna genom att fokusera på rörelsen av magen.  
Jag gör tillräckligt med andningsövningar och meditation utanför de fem dagliga bönerna.  
Jag går tusentals steg dagligen som konditionsträning och träning för knäet.  
Jag borstar tänderna varje kväll innan jag går till sängs.  
Jag tvättar båda mina öron, min mun och ansikte också.  
Jag gör EFT-Qigong-tapping på min panna, kinder, under ögat, haka och under näsan.  
Jag tränar med en hantel för att stärka mina biceps, armarna och greppet i händerna.  
Jag tvättar mitt hår flera gånger i veckan.
<muoborder>
Jeg laver yoga, træstilling, barnets stilling for balance, benene og bevidsthedsniveauet.  
Jeg laver kapalbhati for at rense de indre, respirationskanalen ved at fokusere på bevægelsen af maven.  
Jeg laver tilstrækkelig åndedrætsarbejde og meditation uden for de 5 daglige bønner.  
Jeg går tusindvis af skridt dagligt som cardio og træning for knæet.  
Jeg børster mine tænder hver aften før sengetid.  
Jeg vasker begge mine ører, min mund og ansigtet også.  
Jeg laver EFT-Qigong tapping på min pande, kinder, under øjet, hagen og under næsen.  
Jeg træner med en håndvægt for at styrke mine biceps, armene og grebet i hænderne.  
Jeg vasker mit hår flere gange om ugen.
<muoborder>
Jeg gjør yoga, treposisjon, barnets posisjon for balanse, bena og bevissthetsnivået.  
Jeg gjør kapalbhati for å rense de indre, respirasjonskanalene ved å fokusere på bevegelsen av magen.  
Jeg gjør tilstrekkelig pustearbeid og meditasjon utenom de 5 daglige bønnene.  
Jeg går tusenvis av skritt daglig som cardio og trening for kneet.  
Jeg pusser tennene hver kveld før jeg legger meg.  
Jeg vasker begge ørene, munnen og ansiktet også.  
Jeg gjør EFT-Qigong tapping på pannen, kinnene, under øyet, haken og under nesen.  
Jeg trener med en manual for å styrke bicepsene, armene og grepene i hendene.  
Jeg vasker håret flere ganger i uken.
<muoborder>
Teen joogaa, puu-asentoa, lapsiasentoa tasapainon, jalkojen ja tietoisuuden tason vuoksi.  
Teen kapalbhati-harjoitusta puhdistaakseni sisäiset hengityskanavat keskittymällä vatsan liikkeeseen.  
Teen riittävästi hengitysharjoituksia ja meditaatiota viiden päivittäisen rukouksen ulkopuolella.  
Kävelen päivittäin tuhansia askelia sydän- ja lihaskuntotreeninä polville.  
Harjaan hampaani joka ilta ennen nukkumaanmenoa.  
Pesin molemmat korvani, suuni ja kasvoni myös.  
Teen EFT-Qigong-taputusta otsassani, poskissani, silmien alapuolella, leuassa ja nenän alapuolella.  
Harjoittelen käsipainolla vahvistaakseni hauiksiani, käsiäni ja otteitani.  
Pesin hiukseni useita kertoja viikossa.
`;

var svDiction='';
var svLM='';

var ruDiction='';
var ruLM='';

var noDiction='';
var noLM='';

var daDiction='';
var daLM='';

var fiDiction='';
var fiLM='';


var svSND = ['Msv.mp3',[0.000000,7.202914,0],[7.489987,14.353634,1],[14.823389,21.086793,2],[21.556548,27.376294,3],[28.002635,32.021652,4],[32.674090,37.423838,5],[37.815301,45.748946,6],[46.244799,52.456007,7],[52.821373,56.501122,8]];

/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){
    EHIMGURL = jovuniverse.EHIMGURL+'up/';
}
else{
    EHIMGURL = storyline.BIMG+'up/';
}
const svisual = ['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg','n.jpg','o.jpg','p.jpg','q.jpg','r.jpg','s.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg','y.jpg','z.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','1a.jpg','1b.jpg','1c.jpg','1d.jpg','1e.jpg'];
const ImgRo = 1;
const oImg = 'k.jpg';
const ehbmtitle = 'Srtn';

storyline.intro = `<p>Routine listing. 9 slides in total.</p>
<div style="font-size:smaller;">
<p>Voice Available:<br>SV</p>
<p>Voices:<br><a href="https://voicertool.com/" target="_blank">Voicertool</a></p>
<p>Translations:<ul><li><a href="https://www.easemate.ai/ai-translator" target="_blank">EaseMate AI</a></li>
<li><a href="https://grok.com/" target="_blank">Grok</a></li>
</ul></p>
<p>Images:<br><ul><li><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></li></ul></p></div>`;

storyline.lang = ['EN','SV','NO','DA','FI','RU'];
storyline.clang = storyline.deflang = 'sv';
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
        reperc.localstorage.setItem('southSideBM',JSON.stringify(reperc.bookmark));
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
            reperc.bookmark = reperc.localstorage.getItem('southSideBM');
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
    avdi:0,
    initDictionary:function(){
        if(typeof svDiction !== 'undefined' && svDiction!=''){
          svDiction = JSON.parse(svDiction);
          reperc.svLM = JSON.parse(svLM);   reperc.avdi++;
        }        
        if(typeof noDiction !== 'undefined' && noDiction!=''){
          noDiction = JSON.parse(noDiction);
          reperc.noLM = JSON.parse(noLM); reperc.avdi++;
        }        
        if(typeof ruDiction !== 'undefined' && ruDiction!=''){
          ruDiction = JSON.parse(ruDiction);
          reperc.ruLM = JSON.parse(ruLM); reperc.avdi++;
        }        
        if(typeof daDiction !== 'undefined' && daDiction!=''){
          daDiction = JSON.parse(daDiction);
          reperc.daLM = JSON.parse(daLM); reperc.avdi++;
        }        
        if(typeof fiDiction !== 'undefined' && fiDiction!=''){
          fiDiction = JSON.parse(fiDiction);
          reperc.fiLM = JSON.parse(fiLM); reperc.avdi++;
        }
        
        storyline.snd = {};
        if(typeof svSND !== 'undefined' && svSND.length){            
            storyline.snd.sv = {};
            storyline.snd.sv.p = storyline.sndURL+svSND[0];
            svSND.splice(0,1);
            storyline.snd.sv.t = svSND;
        }
        if(typeof noSND !== 'undefined' && noSND.length){            
            storyline.snd.no = {};
            storyline.snd.no.p = storyline.sndURL+noSND[0];
            noSND.splice(0,1);
            storyline.snd.no.t = noSND;
        }
        if(typeof daSND !== 'undefined' && daSND.length){            
            storyline.snd.da = {};
            storyline.snd.da.p = storyline.sndURL+daSND[0];
            daSND.splice(0,1);
            storyline.snd.da.t = daSND;
        }
        if(typeof fiSND !== 'undefined' && fiSND.length){            
            storyline.snd.fi = {};
            storyline.snd.fi.p = storyline.sndURL+fiSND[0];
            fiSND.splice(0,1);
            storyline.snd.fi.t = fiSND;
        }
        if(typeof ruSND !== 'undefined' && ruSND.length){            
            storyline.snd.ru = {};
            storyline.snd.ru.p = storyline.sndURL+ruSND[0];
            ruSND.splice(0,1);
            storyline.snd.ru.t = ruSND;
        }
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
        var stvidx = jovuniverse.getrand(0,reperc.storyvidx.length);
        var stvi = reperc.storyvidx[stvidx];
        storyline.chapters[storyline.current_chap].elements.narration.illustration = EHIMGURL+reperc.storyvis[stvi];
        reperc.storyvidx.splice(stvidx,1);

        document.addEventListener('unfoldx', e => {
            reperc.nextHdlr(e.detail);
        });
    },    
    xDict:function(p){
        $('body').append('<div id="dictionary" style="top:'+(p.top-40)+'px;left:'+p.left+'px;">Not Available</div>').addClass('dictionInq');
    },
    wo:function(r){
      window.open(r, '_blank');
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
	//en,ru,sv,da,no,fi
	n.addNarration(reperc.storylines[0][i],reperc.storylines[1][i],reperc.storylines[2][i],reperc.storylines[4][i],reperc.storylines[3][i],reperc.storylines[5][i]);
}
n.illustration = EHIMGURL+oImg;
config.narration = n;
chidx = storyline.addChapter(config);

storyline.dictionfn = function(t,l){
      $('#dictionary').remove();
    $('.txtfrg.inq').removeClass('inq');
    const pos = $(l).offset();
    $(l).addClass('inq');
    if(!reperc.avdi){reperc.xDict(pos);return;}
    
    t = t.toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu, '');
    t = t +' - ';
    let xx = t[0].toLowerCase();
    
    if(storyline.clang == 'sv'){
        if(typeof reperc.svLM === 'undefined'){reperc.xDict(pos);return;}
        if (!reperc.svLM[xx]){
            reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.svLM[xx].start;i<=reperc.svLM[xx].end;i++){
            if(svDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+svDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
    else if(storyline.clang == 'no'){
        if(typeof reperc.noLM === 'undefined'){reperc.xDict(pos);return;}
        if (!reperc.noLM[xx]){
            reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.noLM[xx].start;i<=reperc.noLM[xx].end;i++){
            if(noDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+noDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
    else if(storyline.clang == 'da'){
        if(typeof reperc.daLM === 'undefined'){reperc.xDict(pos);return;}
        if (!reperc.daLM[xx]){
            reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.daLM[xx].start;i<=reperc.daLM[xx].end;i++){
            if(daDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+daDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
    else if(storyline.clang == 'ru'){
        if(typeof reperc.ruLM === 'undefined'){reperc.xDict(pos);return;}
        if (!reperc.ruLM[xx]){
            reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.ruLM[xx].start;i<=reperc.ruLM[xx].end;i++){
            if(ruDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+ruDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
    else if(storyline.clang == 'fi'){
        if(typeof reperc.fiLM === 'undefined'){reperc.xDict(pos);return;}
        if (!reperc.fiLM[xx]){
            reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
            return;
        }
        for(var i=reperc.fiLM[xx].start;i<=reperc.fiLM[xx].end;i++){
            if(fiDiction[i].indexOf(t) === 0){
                $('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+fiDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');
                return;
            }
        }
        reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');
    }
};
$('#text5').prop('src',EHIMGURL+oImg);

var cssa,cssb,cssc;        
cssa = document.createElement('style');
cssa.type = "text/css";
document.getElementsByTagName("BODY")[0].appendChild(cssa);
cssb = cssa.sheet;
cssc = '#dialoguebubble{min-height: 160px;}';
cssb.insertRule(cssc, cssb.cssRules.length);