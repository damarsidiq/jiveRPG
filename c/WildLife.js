var textSt=`Bisons and moose, where can we find them in the world's forests and where can't we find them in the world's forests, and do human eat them?
Two large, shaggy reminders that evolution enjoys making tanks with antlers and attitude.
First, they are not interchangeable. Bison are wild cattle. Moose are the largest deer species on Earth.
One looks like a moving hill; the other looks like a horse designed by someone who had only heard descriptions of deer.
Where they live: Bison are mainly found in 'North America' and a smaller extent in 'Europe'.
- The American bison historically roamed huge parts of North America, especially prairies, grasslands, and open woodlands in what is now United States, Canada, and parts of northern Mexico.
- Today, wild and conservation herds are mostly in protected areas like Yellowstone National Park and parts of Canada.
- The European bison (wisent) lives in scattered forests in eastern and central Europe, such as in Poland and Belarus.
Moose are found across the 'northern forests' of the world, especially the boreal belt.
- In North America: Canada, United States (especially Alaska, New England, Rockies, upper Midwest).
- In Eurasia: Norway, Sweden, Finland, Russia, and parts of the Baltics and Siberia.
- They prefer cold forests, wetlands, lakes, and marshy areas.
Where you generally will 'not' find them:.
- 'Tropical rainforests': not in places like Indonesia, Brazil (Amazon), or central African jungles.
- 'Hot deserts': no Sahara, no Arabian Peninsula, no Australian Outback.
- 'Most of South Asia, Southeast Asia, and sub-Saharan Africa'.
- 'Australia' has neither as native wildlife.
- 'South America' has no native bison or moose.
- Moose especially avoid warm climates; heat stresses them badly.
So if you walk into a forest in Java expecting a moose, you are either in a dream or a very poorly managed zoo.
Do humans eat them? Absolutely.
- 'Bison meat' is widely eaten, especially in North America. It is leaner than beef, often described as slightly sweeter and richer.
- 'Moose meat' is also eaten, especially in northern regions by hunters and Indigenous communities. It is darker, lean, and gamey.
Both are considered nutritious sources of protein. In some places, they are part of cultural tradition and subsistence hunting.
Commercial bison farming exists. Moose farming is rare because moose are harder to domesticate and generally less cooperative, which frankly tracks with their facial expression.  
<muoborder>
Bisontes e alces: onde podemos encontrá-los nas florestas do mundo e onde não podemos encontrá-los? E os humanos os comem?
Dois grandes e peludos lembretes de que a evolução gosta de criar tanques com chifres e atitude.
Primeiro, eles não são intercambiáveis. Bisontes são bovinos selvagens. Alces são a maior espécie de cervo da Terra.
Um parece uma colina em movimento; O outro parece um cavalo desenhado por alguém que só ouviu descrições de veados.
Onde vivem: Os bisontes são encontrados principalmente na América do Norte e, em menor escala, na Europa.
- Historicamente, o bisão americano vagava por grandes partes da América do Norte, especialmente pradarias, pastagens e bosques abertos no que hoje são os Estados Unidos, Canadá e partes do norte do México.
- Hoje, os rebanhos selvagens e de conservação estão principalmente em áreas protegidas, como o Parque Nacional de Yellowstone e partes do Canadá.
- O bisão europeu (wisent) vive em florestas dispersas no leste e centro da Europa, como na Polônia e na Bielorrússia.
Os alces são encontrados nas florestas do norte do mundo, especialmente na região boreal.
- Na América do Norte: Canadá, Estados Unidos (especialmente Alasca, Nova Inglaterra, Montanhas Rochosas, região Centro-Oeste superior).
- Na Eurásia: Noruega, Suécia, Finlândia, Rússia e partes dos países bálticos e da Sibéria.
- Eles preferem florestas frias, pântanos, lagos e áreas alagadiças.
Onde você geralmente 'não' os encontrará:
- 'Florestas tropicais': não em lugares como Indonésia, Brasil (Amazônia) ou selvas da África Central.
- 'Desertos quentes': não no Saara, na Península Arábica, nem no interior da Austrália.
- 'A maior parte do Sul da Ásia, Sudeste Asiático e África subsaariana'.
- A 'Austrália' não possui nenhuma dessas espécies como fauna nativa.
- A 'América do Sul' não possui bisontes ou alces nativos.
- Os alces, em especial, evitam climas quentes; O calor os estressa muito.
Portanto, se você entrar em uma floresta em Java esperando encontrar um alce, ou está sonhando ou em um zoológico muito mal administrado.
Os humanos os comem? Absolutamente.
- A 'carne de bisão' é amplamente consumida, especialmente na América do Norte. É mais magra que a carne bovina, frequentemente descrita como ligeiramente mais doce e saborosa.
- A 'carne de alce' também é consumida, especialmente em regiões do norte, por caçadores e comunidades indígenas. É mais escura, magra e tem um sabor mais intenso.
Ambas são consideradas fontes nutritivas de proteína. Em alguns lugares, fazem parte da tradição cultural e da caça de subsistência.
Existe criação comercial de bisões. A criação de alces é rara porque os alces são mais difíceis de domesticar e geralmente menos cooperativos, o que, francamente, condiz com sua expressão facial.`

/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){EHIMGURL = jovuniverse.EHIMGURL+'cd/';}else{EHIMGURL = storyline.BIMG+'cd/';}
const svisual = ['3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','2.jpg','1.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg','n.jpg','o.jpg','p.jpg','q.jpg','r.jpg','s.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg','y.jpg','z.jpg','1a.jpg','g.jpg'];
const ImgRo = 1;
const oImg = '3.jpg';
const ehbmtitle = 'wl';

storyline.intro = `<p>Questioning about wild entities.</p>
<div style="font-size:smaller;">
<p>Total Slides:<br> 25</p>
<p>Story Text:<br><a href="https://chatgpt.com" target="_blank">ChatGPT</a></p>
<p>Translations:<br><a href="https://translate.google.com/" target="_blank">Google Translate</a></p>
<p>Images:<br><ul><li><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></li></ul></p></div>`;

storyline.lang = ['EN','PT-BR'];
storyline.clang = storyline.deflang = 'pt-br';
/*eo things to adjust*/


var reperc={starter:false,storylines:[],starterParagraph:false,bmidx:false,storyvis:svisual,setBookmark:function(x){if(reperc.localstorage==false){return}reperc.bookmark[reperc.bmidx].cpar=x;reperc.localstorage.setItem('easternHeadBM',JSON.stringify(reperc.bookmark))},initBookmark:function(){if(typeof localStorage=="object"){reperc.localstorage=localStorage}else if(typeof globalStorage=="object"){reperc.localstorage=globalStorage[location.host]}else{reperc.localstorage=false}if(reperc.localstorage!==false){reperc.bookmark=reperc.localstorage.getItem('easternHeadBM');if(reperc.bookmark==null){reperc.bookmark=[];reperc.bmidx=0;reperc.bookmark[0]={title:ehbmtitle,cpar:0}}else{reperc.bookmark=JSON.parse(reperc.bookmark);for(var i=0;i<reperc.bookmark.length;i++){if(reperc.bookmark[i].title==ehbmtitle){reperc.starterParagraph=reperc.bookmark[i].cpar;reperc.bmidx=i;break}}if(reperc.bmidx===false){reperc.bmidx=reperc.bookmark.length;reperc.bookmark[reperc.bmidx]={title:ehbmtitle,cpar:0}}}}},avdi:0,initDictionary:function(){if(typeof ptbrDiction!=='undefined'&&ptbrDiction!=''){ptbrDiction=JSON.parse(ptbrDiction);reperc.ptbrLM=JSON.parse(ptbrLM);reperc.avdi++}storyline.snd={};if(typeof ptbrSND!=='undefined'&&ptbrSND.length){storyline.snd.ptbr={};storyline.snd.ptbr.p=storyline.sndURL+ptbrSND[0];ptbrSND.splice(0,1);storyline.snd.ptbr.t=ptbrSND}},initStory:function(){reperc.initBookmark();reperc.initDictionary();reperc.storyvidx=[];for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}textSt=textSt.split('<muoborder>');for(var i=0;i<textSt.length;i++){textSt[i]=textSt[i].trim();if(textSt[i]=='')continue;reperc.storylines[i]=[];textSt[i]=textSt[i].split('\n');for(var ix=0;ix<textSt[i].length;ix++){textSt[i][ix]=textSt[i][ix].trim();if(textSt[i][ix]=='')continue;reperc.storylines[i][reperc.storylines[i].length]=textSt[i][ix]}}},nextHdlr:function(x){if(x%ImgRo==0){var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);if(!reperc.storyvidx.length){for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}}reperc.setBookmark(x)}},rp:function(){storyline.current_chap=reperc.starter;if(reperc.starterParagraph!==false){storyline.unfold_=true;storyline.chapters[storyline.current_chap].unfoldx(reperc.starterParagraph)}else{storyline.chapters[storyline.current_chap].unfold()}var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);document.addEventListener('unfoldx',e=>{reperc.nextHdlr(e.detail)})},xDict:function(p){$('body').append('<div id="dictionary" style="top:'+(p.top-40)+'px;left:'+p.left+'px;">Not Available</div>').addClass('dictionInq')},wo:function(r){window.open(r,'_blank')}};var chidx;var n;reperc.starter=1;config={type:'repercussion',effect:new repercussion(reperc.rp),prerequisite:false};chidx=storyline.addChapter(config);reperc.initStory();config={type:'narration',narration:false};n=new narration();n.addCustomLang(['pt-br']);for(var i=0;i<reperc.storylines[1].length;i++){n.addEnglish(reperc.storylines[0][i]);n.cLNarr('pt-br',reperc.storylines[1][i])}n.illustration=EHIMGURL+oImg;config.narration=n;chidx=storyline.addChapter(config);storyline.dictionfn=function(t,l){$('#dictionary').remove();$('.txtfrg.inq').removeClass('inq');const pos=$(l).offset();$(l).addClass('inq');if(!reperc.avdi){reperc.xDict(pos);return}t=t.toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu,'');t=t+' - ';let xx=t[0].toLowerCase();if(storyline.clang=='pt-br'){if(typeof reperc.ptbrLM==='undefined'){reperc.xDict(pos);return}if(!reperc.ptbrLM[xx]){reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');return}for(var i=reperc.ptbrLM[xx].start;i<=reperc.ptbrLM[xx].end;i++){if(ptbrDiction[i].indexOf(t)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+ptbrDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}for(var i=reperc.ptbrLM[xx].start;i<=reperc.ptbrLM[xx].end;i++){if(ptbrDiction[i].indexOf(jovuniverse.frw)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+ptbrDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate')}};$('#text5').prop('src',EHIMGURL+oImg);var cssa,cssb,cssc;cssa=document.createElement('style');cssa.type="text/css";document.getElementsByTagName("BODY")[0].appendChild(cssa);cssb=cssa.sheet;cssc='#dialoguebubble{min-height: 70px;}';cssb.insertRule(cssc,cssb.cssRules.length);    