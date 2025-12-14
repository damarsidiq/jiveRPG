var textSt = `I am finally ready to travel to Europe.
I have my wallet,my backpack,my airplane ticket, all of my shirts,the t shirts, pants, trousers.
And my jacket too right here in my suitcase.
I'm really going to miss my room.
The carpet, my computer, the clock on the wall.
The cats, the good people. 
My office desk, that yellow lamp on the table.
Maybe i dont want to travel to another country, i like being here.
But i have to see the world.
This travel is more important than what i have here.
I take my passport and walk out the door. 
The sun is shining and the birds are singing.
It is a beautiful day to travel.
I get into a taxi to the airport.
In the taxi, I look out the window.
All the houses and trees look so familiar.
I want to stay.
But I think of my friends.
They say "Good luck!" and "Send pictures!"
I have to be brave.
New adventures are waiting in Europe.
I will see Sweden, France, maybe also Italy.
It will be good.
I am both nervous and happy. 
The airplane is big and white.
Here we go!

<muoborder>

Jag är äntligen redo att resa till Europa.  
Jag har min plånbok, min ryggsäck, min flygbiljett, alla mina skjortor, t-shirts, byxor.
Och min jacka också här i min resväska.  
Jag kommer verkligen att sakna mitt rum.  
Mattan, min dator, klockan på väggen.  
Katterna, de goda människorna.  
Mitt kontorsbord, den gula lampan på bordet.  
Kanske vill jag inte resa till ett annat land, jag gillar att vara här.  
Men jag måste se världen.  
Denna resa är viktigare än vad jag har här.  
Jag tar mitt pass och går ut genom dörren.  
Solen skiner och fåglarna sjunger.  
Det är en vacker dag att resa.  
Jag sätter mig i en taxi till flygplatsen.  
I taxin tittar jag ut genom fönstret.  
Alla hus och träd ser så bekanta ut.  
Jag vill stanna.  
Men jag tänker på mina vänner.  
De säger "Lycka till!" och "Skicka bilder!"  
Jag måste vara modig.  
Nya äventyr väntar i Europa.  
Jag kommer att se Sverige, Frankrike, kanske även Italien.  
Det kommer att bli bra.  
Jag är både nervös och glad.  
Flygplanet är stort och vitt.  
Nu kör vi!

<muoborder>

Jeg er endelig klar til å reise til Europa.  
Jeg har lommeboken min, ryggsekken min, flybilletten min, alle skjortene mine, t-skjortene, buksene.  
Og jakken min også, rett her i kofferten min.  
Jeg kommer virkelig til å savne rommet mitt.  
Teppet, datamaskinen min, klokken på veggen.  
Kattene, de gode menneskene.  
Kontorpulten min, den gule lampen på bordet.  
Kanskje jeg ikke vil reise til et annet land, jeg liker å være her.  
Men jeg må se verden.  
Denne reisen er viktigere enn det jeg har her.  
Jeg tar passet mitt og går ut døren.  
Solen skinner og fuglene synger.  
Det er en vakker dag å reise.  
Jeg setter meg inn i en taxi til flyplassen.  
I taxien ser jeg ut av vinduet.  
Alle husene og trærne ser så kjent ut.  
Jeg vil bli.  
Men jeg tenker på vennene mine.  
De sier "Lykke til!" og "Send bilder!"  
Jeg må være modig.  
Nye eventyr venter i Europa.  
Jeg skal se Sverige, Frankrike, kanskje også Italia.  
Det blir bra.  
Jeg er både nervøs og glad.  
Flyet er stort og hvitt.  
Her går vi!`;


var svDiction=`["alla - all / everyone","annat - other / something else","att - to/that","bekanta - familiar","bilder - pictures","bli - to become","bordet - the table","bra - good, well","byxor - pants / trousers","både - both","dag - day","dator - the computer","de - they/the","den - the/that (common gender)","denna - this (feminine/common form)","det - it/that","dörren - the door","en - a/one","ett - a/one","europa - europe","flygbiljett - airplane ticket","flygplanet - the airplane","flygplatsen - the airport","frankrike - france","fåglarna - the birds","fönstret - the window","genom - through","gillar - like, likes","glad - happy","goda - good","gula - the yellow (here, 'den gula' = the yellow one)","går - goes, walk","har - has","hus - houses","här - here","i - in","inte - not","italien - italy","jacka - jacket (or coat)","jag - i / me","kanske - maybe/perhaps","katterna - the cats","kavaj - blazer / suit jacket","klockan - the clock / the watch","kommer - comes","kontorsbord - the office desk","kör - drive / am driving / go! (as a command)","lampan - the lamp","land - country","lycka - luck / happiness (in 'lycka till!', it means 'good luck!')","mattan - the carpet / the mat","men - but","mig - me / myself","min - my","mina - my","mitt - my / mine","modig - brave","måste - 'must, have to'","människorna - the people","nervös - nervous","nu - now","nya - new","och - and","också - also","pass - passport","plånbok - wallet","på - on/upon","redo - ready","resa - journey / travel","resväska - suitcase","rum - room","ryggsäck - backpack","sakna - to miss (someone/something)","se - see","ser - 'sees, looks'","sjunger - sing","skicka - send","skiner - shines","skjortor - shirts (usually dress shirts)","solen - the sun","stanna - to stay / to stop","stort - big","sverige - sweden","så - so/thus","säger - say","sätter - 'puts, sets'","t-shirts - t-shirts","tar - take","taxi - taxi","taxin - the taxi","till - to","tittar - look","träd - trees","tänker - think / am thinking","ut - out","vacker - beautiful","vad - what","vara - to be","verkligen - really / truly","vi - we","viktigare - more important","vill - want (to)","vitt - white","väggen - the wall","vänner - friends","väntar - wait (are waiting)","världen - the world","än - than, yet","äntligen - finally","är - is/are","även - also / even","äventyr - adventures"]`;
var svLM=`{"a":{"start":0,"end":2},"b":{"start":3,"end":9},"d":{"start":10,"end":16},"e":{"start":17,"end":19},"f":{"start":20,"end":25},"g":{"start":26,"end":31},"h":{"start":32,"end":34},"i":{"start":35,"end":37},"j":{"start":38,"end":39},"k":{"start":40,"end":46},"l":{"start":47,"end":49},"m":{"start":50,"end":58},"n":{"start":59,"end":61},"o":{"start":62,"end":63},"p":{"start":64,"end":66},"r":{"start":67,"end":71},"s":{"start":72,"end":85},"t":{"start":86,"end":93},"u":{"start":94,"end":94},"v":{"start":95,"end":106},"ä":{"start":107,"end":111}}`;


var noDiction=`["alle - all / everyone","annet - other / different","av - of / from / by","bilder - pictures","bli - become / stay / be","blir - becomes / gets","bordet - the table","bra - good","buksene - the pants","både - both","dag - day","datamaskinen - the computer","de - they / them","den - it / that / the","denne - this","det - it / that","døren - the door","en - a / an / one","endelig - finally","enn - than","er - is / are","et - a / an / one","europa - europe","eventyr - adventures","flybilletten - the plane ticket","flyet - the plane","flyplassen - the airport","frankrike - france","fuglene - the birds","glad - happy","gode - good","gule - yellow","går - goes / walks","har - have / has","husene - the houses","hvitt - white","ikke - not","inn - in / into","italia - italy","jakken - the jacket","jeg - i","kanskje - perhaps","kattene - the cats","kjent - known","klar - clear / ready","klokken - the clock","kofferten - the suitcase","kommer - comes","kontorpulten - the desk","lampen - the lamp","land - country","liker - like","lommeboken - the wallet","lykke - happiness","meg - me","men - but","menneskene - the people","min - my","mine - my / mine","mitt - my","modig - brave","må - must","nervøs - nervous","nye - new","og - and","også - also / too","passet - the passport","på - on / at / in","reise - journey / trip","reisen - the trip","rett - right / straight / just","rommet - the room","ryggsekken - the backpack","savne - miss","se - see","send - send","ser - see / look","setter - puts","sier - says","skal - shall","skinner - shines","skjortene - the shirts","solen - the sun","stort - large / big","sverige - sweden","synger - sing","så - so / thus / then","t-skjortene - the t-shirts","tar - takes","taxi - taxi","taxien - the taxi","tenker - think","teppet - the carpet","til - to / for / until","trærne - the trees","ut - out","vakker - beautiful","veggen - the wall","vennene - the friends","venter - waits","verden - world","vi - we","viktigere - more important","vil - will / want","vinduet - the window","virkelig - real / really","være - be","å - to (infinitive marker)"]`;
var noLM=`{"a":{"start":0,"end":2},"b":{"start":3,"end":9},"d":{"start":10,"end":16},"e":{"start":17,"end":23},"f":{"start":24,"end":28},"g":{"start":29,"end":32},"h":{"start":33,"end":35},"i":{"start":36,"end":38},"j":{"start":39,"end":40},"k":{"start":41,"end":48},"l":{"start":49,"end":53},"m":{"start":54,"end":61},"n":{"start":62,"end":63},"o":{"start":64,"end":65},"p":{"start":66,"end":67},"r":{"start":68,"end":72},"s":{"start":73,"end":86},"t":{"start":87,"end":94},"u":{"start":95,"end":95},"v":{"start":96,"end":106},"å":{"start":107,"end":107}}`;



var svSND = ['Nsv.mp3',[0.000000,3.484913,0],[4.071540,12.185578,1],[12.708315,16.042214,2],[16.657882,19.736222,3],[20.328657,24.696414,4],[25.149453,28.111628,5],[28.564667,32.758178,6],[33.350614,37.892616,7],[38.392121,40.517917,8],[41.145201,44.583649,9],[45.118002,48.219574,10],[48.800393,51.983280,11],[52.552482,54.829292,12],[55.514658,58.906639,13],[59.499075,62.635496,14],[63.251164,66.956787,15],[67.328511,69.221981,16],[69.849265,72.335169,17],[72.962454,76.668077,18],[77.504456,79.746417,19],[80.257537,83.324260,20],[83.858614,88.667793,21],[89.248612,91.223396,22],[91.722900,94.417899,23],[94.998718,98.053824,24],[98.413932,100.853371,25]];

/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){
    EHIMGURL = jovuniverse.EHIMGURL+'eu/';
}
else{
    EHIMGURL = storyline.BIMG+'eu/';
}

const svisual=['es_h.jpg','es_i.jpg','ews.jpg','fr_a.jpg','fr_b.jpg','fr_c.jpg','fr_d.jpg','fr_e.jpg','fr_f.jpg','fr_g.jpg','fr_h.jpg','fr_i.jpg','fr_j.jpg','fr_k.jpg','fr_l.jpg','fr_m.jpg','fr_n.jpg','gr_a.jpg','gr_b.jpg','gr_c.jpg','gr_d.jpg','gr_e.jpg','gr_f.jpg','gr_g.jpg','gr_h.jpg','gr_i.jpg','gr_j.jpg','gr_k.jpg','gr_l.jpg','gr_m.jpg','gr_n.jpg','gr_o.jpg','gr_p.jpg','gr_q.jpg','gr_r.jpg','gr_s.jpg','it_a.jpg','it_b.jpg','it_c.jpg','it_d.jpg','it_e.jpg','it_f.jpg','it_g.jpg','it_h.jpg','it_i.jpg','it_j.jpg','it_k.jpg'];
const ImgRo = 1;
const oImg = 'it_d.jpg';
const ehbmtitle = 'svTr';

storyline.intro = `<p>A short story-narrative with basic vocabularies about travelling. 26 slides in total.</p>
<div style="font-size:smaller;">
<p>Voice Available:<br>SV</p>
<p>Story Text:<br><a href="https://www.deepseek.com/" target="_blank">DeepSeek</a></p>
<p>Voices:<br><a href="https://voicertool.com/" target="_blank">Voicertool</a></p>
<p>Translation:<ul>
<li><a href="https://www.easemate.ai/ai-translator" target="_blank">EaseMate AI</a></li>
<li><a href="https://www.deepseek.com/" target="_blank">DeepSeek</a></li>
</ul>
</p>
<p>Images:<br><ul><li><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></li></ul></p></div>`;

storyline.lang = ['EN','SV','NO'];
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
	n.addNarration(reperc.storylines[0][i],null,reperc.storylines[1][i],null,reperc.storylines[2][i],null);
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
