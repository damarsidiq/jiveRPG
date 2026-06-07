var textSt=`But snakes are not nocturnal, they usually sleep at night? 
what makes tarantula spiders and piranha fishes famous, whats so special about them?
Not all snakes are nocturnal. That’s the first cleanup job here, because humans love putting entire animal groups into one behavioral box.
Snake activity depends on species, habitat, and temperature.
- Some are 'diurnal' (active during the day), like many garter snakes.
- Some are 'nocturnal', especially desert or tropical species that avoid daytime heat.
- Some are 'crepuscular', active at dawn and dusk.
So yes, many snakes sleep at night, but plenty do not. 
Since they’re ectothermic, temperature heavily controls their schedule. A cold-blooded animal basically runs on environmental budgeting.
Now, why are tarantulas and piranhas famous? Mostly because humans are obsessed with anything that looks dangerous.
Tarantula are famous because they are 'big, hairy spiders'. That alone is enough for mythology, films, and unnecessary screaming.
What makes them special: They are among the largest spiders in the world by mass and leg span.
Many live long lives, especially females, sometimes 20+ years. They use venom, but most species are not deadly to humans.
Some defend themselves by flicking irritating hairs from their abdomen. They are ambush predators, not web trappers.
So their fame is visual and psychological. They look like nightmares, but they are usually reclusive and far less aggressive than their reputation suggests.
Piranha are famous for their teeth and feeding behavior. What makes them special: Sharp interlocking teeth designed for slicing.
Powerful bite relative to size. Some species feed on fish, insects, fruit, and carrion, not just flesh.
They often hunt in groups, though the “frenzied man eater swarm” image is exaggerated.
Their reputation came from sensational stories, documentaries, and public demonstrations.
In reality, attacks on humans are uncommon and usually linked to stress, low water, or food scarcity.
So what’s special? Tarantulas are giant, ancient looking predators that trigger primal fear.
Piranhas are efficient aquatic feeders with cinematic branding.
Neither deserves the level of legend they got, but legend sells better than ecology. 
Nature keeps getting turned into horror trailers because subtlety bores people.
<muoborder>
Mas as cobras não são noturnas, elas geralmente dormem à noite?
O que torna as aranhas tarântula e os peixes piranha famosos, o que eles têm de tão especial?
Nem todas as cobras são noturnas. Essa é a primeira coisa a esclarecer, porque os humanos adoram colocar grupos inteiros de animais em uma única categoria comportamental.
A atividade das cobras depende da espécie, do habitat e da temperatura.
Algumas são diurnas (ativas durante o dia), como muitas cobras-liga.
Algumas são noturnas, especialmente espécies do deserto ou tropicais que evitam o calor do dia.
Algumas são crepusculares, ativas ao amanhecer e ao entardecer.
Então, sim, muitas cobras dormem à noite, mas muitas não.
Como são ectotérmicas, a temperatura controla fortemente seu ciclo de vida. Um animal de sangue frio basicamente funciona com base no orçamento ambiental.
Agora, por que tarântulas e piranhas são famosas? Principalmente porque os humanos são obcecados por tudo que parece perigoso.
As tarântulas são famosas porque são 'aranhas grandes e peludas'. Só isso já basta para mitologia, filmes e gritos desnecessários.
O que as torna especiais: Elas estão entre as maiores aranhas do mundo em massa e envergadura.
Muitas vivem vidas longas, especialmente as fêmeas, às vezes mais de 20 anos. Elas usam veneno, mas a maioria das espécies não é mortal para os humanos.
Algumas se defendem lançando pelos irritantes do abdômen. Elas são predadoras de emboscada, não caçadoras de teias.
Portanto, sua fama é visual e psicológica. Elas parecem pesadelos, mas geralmente são reclusas e muito menos agressivas do que sua reputação sugere.
As piranhas são famosas por seus dentes e comportamento alimentar. O que os torna especiais: Dentes afiados e entrelaçados, projetados para cortar.
Mordida poderosa em relação ao tamanho. Algumas espécies se alimentam de peixes, insetos, frutas e carniça, não apenas de carne.
Frequentemente caçam em grupos, embora a imagem de um “enxame frenético de devoradores de homens” seja exagerada.
Sua reputação surgiu de histórias sensacionalistas, documentários e demonstrações públicas.
Na realidade, ataques a humanos são incomuns e geralmente estão ligados ao estresse, à falta de água ou à escassez de alimentos.
Então, o que há de especial? As tarântulas são predadoras gigantes com aparência ancestral que despertam medo primitivo.
As piranhas são predadoras aquáticas eficientes com uma imagem cinematográfica.
Nenhuma delas merece o nível de lenda que conquistou, mas a lenda vende mais do que a ecologia.
A natureza continua sendo transformada em trailers de terror porque a sutileza entedia as pessoas.`;

/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){EHIMGURL = jovuniverse.EHIMGURL+'cd/';}else{EHIMGURL = storyline.BIMG+'cd/';}
const svisual = ['3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','2.jpg','1.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg','n.jpg','o.jpg','p.jpg','q.jpg','r.jpg','s.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg','y.jpg','z.jpg','1a.jpg','g.jpg'];
const ImgRo = 1;
const oImg = 'r.jpg';
const ehbmtitle = 'wl3';

storyline.intro = `<p>Questioning about wild entities. Part 3.</p>
<div style="font-size:smaller;">
<p>Total Slides:<br> 24</p>
<p>Story Text:<br><a href="https://chatgpt.com" target="_blank">ChatGPT</a></p>
<p>Translations:<br><a href="https://translate.google.com/" target="_blank">Google Translate</a></p>
<p>Images:<br><ul><li><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></li></ul></p></div>`;

storyline.lang = ['EN','PT-BR'];
storyline.clang = storyline.deflang = 'pt-br';
/*eo things to adjust*/


var reperc={starter:false,storylines:[],starterParagraph:false,bmidx:false,storyvis:svisual,setBookmark:function(x){if(reperc.localstorage==false){return}reperc.bookmark[reperc.bmidx].cpar=x;reperc.localstorage.setItem('easternHeadBM',JSON.stringify(reperc.bookmark))},initBookmark:function(){if(typeof localStorage=="object"){reperc.localstorage=localStorage}else if(typeof globalStorage=="object"){reperc.localstorage=globalStorage[location.host]}else{reperc.localstorage=false}if(reperc.localstorage!==false){reperc.bookmark=reperc.localstorage.getItem('easternHeadBM');if(reperc.bookmark==null){reperc.bookmark=[];reperc.bmidx=0;reperc.bookmark[0]={title:ehbmtitle,cpar:0}}else{reperc.bookmark=JSON.parse(reperc.bookmark);for(var i=0;i<reperc.bookmark.length;i++){if(reperc.bookmark[i].title==ehbmtitle){reperc.starterParagraph=reperc.bookmark[i].cpar;reperc.bmidx=i;break}}if(reperc.bmidx===false){reperc.bmidx=reperc.bookmark.length;reperc.bookmark[reperc.bmidx]={title:ehbmtitle,cpar:0}}}}},avdi:0,initDictionary:function(){if(typeof ptbrDiction!=='undefined'&&ptbrDiction!=''){ptbrDiction=JSON.parse(ptbrDiction);reperc.ptbrLM=JSON.parse(ptbrLM);reperc.avdi++}storyline.snd={};if(typeof ptbrSND!=='undefined'&&ptbrSND.length){storyline.snd.ptbr={};storyline.snd.ptbr.p=storyline.sndURL+ptbrSND[0];ptbrSND.splice(0,1);storyline.snd.ptbr.t=ptbrSND}},initStory:function(){reperc.initBookmark();reperc.initDictionary();reperc.storyvidx=[];for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}textSt=textSt.split('<muoborder>');for(var i=0;i<textSt.length;i++){textSt[i]=textSt[i].trim();if(textSt[i]=='')continue;reperc.storylines[i]=[];textSt[i]=textSt[i].split('\n');for(var ix=0;ix<textSt[i].length;ix++){textSt[i][ix]=textSt[i][ix].trim();if(textSt[i][ix]=='')continue;reperc.storylines[i][reperc.storylines[i].length]=textSt[i][ix]}}},nextHdlr:function(x){if(x%ImgRo==0){var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);if(!reperc.storyvidx.length){for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}}reperc.setBookmark(x)}},rp:function(){storyline.current_chap=reperc.starter;if(reperc.starterParagraph!==false){storyline.unfold_=true;storyline.chapters[storyline.current_chap].unfoldx(reperc.starterParagraph)}else{storyline.chapters[storyline.current_chap].unfold()}var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);document.addEventListener('unfoldx',e=>{reperc.nextHdlr(e.detail)})},xDict:function(p){$('body').append('<div id="dictionary" style="top:'+(p.top-40)+'px;left:'+p.left+'px;">Not Available</div>').addClass('dictionInq')},wo:function(r){window.open(r,'_blank')}};var chidx;var n;reperc.starter=1;config={type:'repercussion',effect:new repercussion(reperc.rp),prerequisite:false};chidx=storyline.addChapter(config);reperc.initStory();config={type:'narration',narration:false};n=new narration();n.addCustomLang(['pt-br']);for(var i=0;i<reperc.storylines[1].length;i++){n.addEnglish(reperc.storylines[0][i]);n.cLNarr('pt-br',reperc.storylines[1][i])}n.illustration=EHIMGURL+oImg;config.narration=n;chidx=storyline.addChapter(config);storyline.dictionfn=function(t,l){$('#dictionary').remove();$('.txtfrg.inq').removeClass('inq');const pos=$(l).offset();$(l).addClass('inq');if(!reperc.avdi){reperc.xDict(pos);return}t=t.toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu,'');t=t+' - ';let xx=t[0].toLowerCase();if(storyline.clang=='pt-br'){if(typeof reperc.ptbrLM==='undefined'){reperc.xDict(pos);return}if(!reperc.ptbrLM[xx]){reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');return}for(var i=reperc.ptbrLM[xx].start;i<=reperc.ptbrLM[xx].end;i++){if(ptbrDiction[i].indexOf(t)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+ptbrDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}for(var i=reperc.ptbrLM[xx].start;i<=reperc.ptbrLM[xx].end;i++){if(ptbrDiction[i].indexOf(jovuniverse.frw)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+ptbrDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate')}};$('#text5').prop('src',EHIMGURL+oImg);var cssa,cssb,cssc;cssa=document.createElement('style');cssa.type="text/css";document.getElementsByTagName("BODY")[0].appendChild(cssa);cssb=cssa.sheet;cssc='#dialoguebubble{min-height: 70px;}';cssb.insertRule(cssc,cssb.cssRules.length);
    