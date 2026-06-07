var textSt=`some birds build a basket-like nest for their children on the tree top, how do they make those nests it almost looks like man-made
Some birds are better craftsmen than half the people selling “handmade artisan décor” online.
Those basket-like nests are usually made by species such as Weaver bird, Oriole, and certain Sunbird species.
The most famous are weaver birds. Their nests can look like hanging baskets, gourds, or woven chambers suspended from branches, often over water or in thorny trees for protection.
How they make them: they use their beaks as tools and their feet for grip.
A male weaver bird typically starts by collecting long strips of grass, palm fibers, reeds, or leaves. 
He knots the first strand around a branch, then weaves additional strands through and around it using repeated looping and threading motions.
No hands. Just beak precision and instinct refined over millions of years.
The process is not random. It follows a species-specific behavioral sequence: anchor strand. create supporting ring. build framework. 
weave walls. shape entrance tunnel. reinforce structure.
Some species can complete early stages in a day or two, then refine it over several more days.
Why it looks man-made: Because weaving obeys structural logic. Interlocking fibers distribute tension and create lightweight strength.
Humans and birds independently arrived at similar engineering principles because physics does not care who discovered them first.
The bird is not consciously drafting blueprints, but it has inherited a behavioral program that produces sophisticated architecture.
And there’s another twist: in many species, the nest is also a courtship display.
A female inspects the male’s craftsmanship. If she approves, mating may follow. If not, he gets rejected despite all that labor.
So yes, nest-building is partly childcare and partly real-estate marketing. Evolution invented home design competitions long before television did.
Some nests are so intricate because survival depends on them: Protection from predators, weather, and parasites.
To us they look artistic. To the bird they are function first.
Still, the result is often astonishingly elegant, which says something about what instinct plus necessity can create.
<muoborder>
Algumas aves constroem ninhos em forma de cesta para seus filhotes no topo das árvores. Como elas fazem esses ninhos? Parece até que foram feitos pelo homem.
Algumas aves são artesãs melhores do que metade das pessoas que vendem "decoração artesanal" online.
Esses ninhos em forma de cesta geralmente são feitos por espécies como o tecelão, o oriol e certas espécies de beija-flor.
Os mais famosos são os tecelões. Seus ninhos podem parecer cestos suspensos, cabaças ou câmaras tecidas penduradas em galhos, frequentemente sobre a água ou em árvores espinhosas para proteção.
Como os constroem: usam seus bicos como ferramentas e seus pés para se agarrar.
Um tecelão macho normalmente começa coletando longas tiras de grama, fibras de palmeira, juncos ou folhas.
Ele amarra o primeiro fio em volta de um galho e, em seguida, tece fios adicionais através e ao redor dele usando movimentos repetidos de laço e entrelaçamento.
Sem mãos. Apenas a precisão do bico e o instinto refinado ao longo de milhões de anos.
O processo não é aleatório. Segue uma sequência comportamental específica da espécie: fio de ancoragem. criar anel de suporte. construir estrutura.
Tecer paredes. moldar o túnel de entrada. reforçar a estrutura.
Algumas espécies conseguem completar os estágios iniciais em um ou dois dias e, em seguida, refiná-los ao longo de vários outros dias.
Por que parece feito pelo homem: porque a tecelagem obedece à lógica estrutural. As fibras entrelaçadas distribuem a tensão e criam uma resistência leve.
Humanos e pássaros chegaram independentemente a princípios de engenharia semelhantes porque a física não se importa com quem os descobriu primeiro.
O pássaro não está conscientemente criando projetos, mas herdou um programa comportamental que produz arquitetura sofisticada.
E há outra reviravolta: em muitas espécies, o ninho também é uma demonstração de cortejo.
Uma fêmea inspeciona o trabalho artesanal do macho. Se ela aprovar, o acasalamento pode ocorrer. Caso contrário, ele é rejeitado apesar de todo o trabalho.
Então, sim, a construção do ninho é em parte cuidado com os filhotes e em parte marketing imobiliário. A evolução inventou competições de design de casas muito antes da televisão.
Alguns ninhos são tão complexos porque a sobrevivência depende deles: proteção contra predadores, intempéries e parasitas.
Para nós, eles parecem artísticos. Para o pássaro, a função vem em primeiro lugar.
Ainda assim, o resultado costuma ser surpreendentemente elegante, o que diz algo sobre o que o instinto somado à necessidade pode criar.`;

/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){EHIMGURL = jovuniverse.EHIMGURL+'cd/';}else{EHIMGURL = storyline.BIMG+'cd/';}
const svisual = ['3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','2.jpg','1.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg','n.jpg','o.jpg','p.jpg','q.jpg','r.jpg','s.jpg','t.jpg','u.jpg','v.jpg','w.jpg','x.jpg','y.jpg','z.jpg','1a.jpg','g.jpg'];
const ImgRo = 1;
const oImg = 'p.jpg';
const ehbmtitle = 'wl5';

storyline.intro = `<p>Questioning about wild entities. Part 5.</p>
<div style="font-size:smaller;">
<p>Total Slides:<br> 20</p>
<p>Story Text:<br><a href="https://chatgpt.com" target="_blank">ChatGPT</a></p>
<p>Translations:<br><a href="https://translate.google.com/" target="_blank">Google Translate</a></p>
<p>Images:<br><ul><li><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></li></ul></p></div>`;

storyline.lang = ['EN','PT-BR'];
storyline.clang = storyline.deflang = 'pt-br';
/*eo things to adjust*/


var reperc={starter:false,storylines:[],starterParagraph:false,bmidx:false,storyvis:svisual,setBookmark:function(x){if(reperc.localstorage==false){return}reperc.bookmark[reperc.bmidx].cpar=x;reperc.localstorage.setItem('easternHeadBM',JSON.stringify(reperc.bookmark))},initBookmark:function(){if(typeof localStorage=="object"){reperc.localstorage=localStorage}else if(typeof globalStorage=="object"){reperc.localstorage=globalStorage[location.host]}else{reperc.localstorage=false}if(reperc.localstorage!==false){reperc.bookmark=reperc.localstorage.getItem('easternHeadBM');if(reperc.bookmark==null){reperc.bookmark=[];reperc.bmidx=0;reperc.bookmark[0]={title:ehbmtitle,cpar:0}}else{reperc.bookmark=JSON.parse(reperc.bookmark);for(var i=0;i<reperc.bookmark.length;i++){if(reperc.bookmark[i].title==ehbmtitle){reperc.starterParagraph=reperc.bookmark[i].cpar;reperc.bmidx=i;break}}if(reperc.bmidx===false){reperc.bmidx=reperc.bookmark.length;reperc.bookmark[reperc.bmidx]={title:ehbmtitle,cpar:0}}}}},avdi:0,initDictionary:function(){if(typeof ptbrDiction!=='undefined'&&ptbrDiction!=''){ptbrDiction=JSON.parse(ptbrDiction);reperc.ptbrLM=JSON.parse(ptbrLM);reperc.avdi++}storyline.snd={};if(typeof ptbrSND!=='undefined'&&ptbrSND.length){storyline.snd.ptbr={};storyline.snd.ptbr.p=storyline.sndURL+ptbrSND[0];ptbrSND.splice(0,1);storyline.snd.ptbr.t=ptbrSND}},initStory:function(){reperc.initBookmark();reperc.initDictionary();reperc.storyvidx=[];for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}textSt=textSt.split('<muoborder>');for(var i=0;i<textSt.length;i++){textSt[i]=textSt[i].trim();if(textSt[i]=='')continue;reperc.storylines[i]=[];textSt[i]=textSt[i].split('\n');for(var ix=0;ix<textSt[i].length;ix++){textSt[i][ix]=textSt[i][ix].trim();if(textSt[i][ix]=='')continue;reperc.storylines[i][reperc.storylines[i].length]=textSt[i][ix]}}},nextHdlr:function(x){if(x%ImgRo==0){var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);if(!reperc.storyvidx.length){for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}}reperc.setBookmark(x)}},rp:function(){storyline.current_chap=reperc.starter;if(reperc.starterParagraph!==false){storyline.unfold_=true;storyline.chapters[storyline.current_chap].unfoldx(reperc.starterParagraph)}else{storyline.chapters[storyline.current_chap].unfold()}var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);document.addEventListener('unfoldx',e=>{reperc.nextHdlr(e.detail)})},xDict:function(p){$('body').append('<div id="dictionary" style="top:'+(p.top-40)+'px;left:'+p.left+'px;">Not Available</div>').addClass('dictionInq')},wo:function(r){window.open(r,'_blank')}};var chidx;var n;reperc.starter=1;config={type:'repercussion',effect:new repercussion(reperc.rp),prerequisite:false};chidx=storyline.addChapter(config);reperc.initStory();config={type:'narration',narration:false};n=new narration();n.addCustomLang(['pt-br']);for(var i=0;i<reperc.storylines[1].length;i++){n.addEnglish(reperc.storylines[0][i]);n.cLNarr('pt-br',reperc.storylines[1][i])}n.illustration=EHIMGURL+oImg;config.narration=n;chidx=storyline.addChapter(config);storyline.dictionfn=function(t,l){$('#dictionary').remove();$('.txtfrg.inq').removeClass('inq');const pos=$(l).offset();$(l).addClass('inq');if(!reperc.avdi){reperc.xDict(pos);return}t=t.toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu,'');t=t+' - ';let xx=t[0].toLowerCase();if(storyline.clang=='pt-br'){if(typeof reperc.ptbrLM==='undefined'){reperc.xDict(pos);return}if(!reperc.ptbrLM[xx]){reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');return}for(var i=reperc.ptbrLM[xx].start;i<=reperc.ptbrLM[xx].end;i++){if(ptbrDiction[i].indexOf(t)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+ptbrDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}for(var i=reperc.ptbrLM[xx].start;i<=reperc.ptbrLM[xx].end;i++){if(ptbrDiction[i].indexOf(jovuniverse.frw)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+ptbrDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate')}};$('#text5').prop('src',EHIMGURL+oImg);var cssa,cssb,cssc;cssa=document.createElement('style');cssa.type="text/css";document.getElementsByTagName("BODY")[0].appendChild(cssa);cssb=cssa.sheet;cssc='#dialoguebubble{min-height: 70px;}';cssb.insertRule(cssc,cssb.cssRules.length);    