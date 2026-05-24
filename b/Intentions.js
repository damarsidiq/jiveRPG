var textSt=`Intentions, im watching a taichi video on youtube, whats the intention of those movements that people make.
The intention behind Tai chi movements depends on which layer you’re looking at, because tai chi is annoyingly elegant in that it is several things at once.
At the surface, the movements train balance, coordination, posture, breathing, and body awareness. 
Slow, deliberate shifts of weight teach you where your center is. 
Your legs strengthen, your joints loosen, and your nervous system settles. So one intention is purely physical efficiency.
At the martial level, each motion originally has combative meaning. 
A graceful sweep might represent deflecting an incoming strike. A push may simulate redirecting force. A step backward may create space for a counter. 
What looks like dance is often disguised combat mechanics practiced in slow motion so precision becomes ingrained.
At the internal level, practitioners speak of cultivating 'qi' or internal energy.
Interpret that spiritually if you want, or more practically as breath regulation, focused attention, and subtle body control.
Even skeptically framed, the intention is to harmonize mind and body so movement is not fragmented.
And then there is the meditative intention: being fully present in motion. Not rushing, not forcing, not reacting impulsively. 
Each gesture becomes an exercise in awareness. That is why it often looks almost ceremonial. 
The slowness is not decorative, it is the point.
So if you’re watching a tai chi video and seeing flowing arms and measured steps, the “intention” is not the visible shape alone.
It is what the practitioner is cultivating through the shape: structure, control, sensitivity, calm, and responsiveness.
In other words, the movement is the vessel. The actual practice is what happens inside the person doing it.
Humans love to stare at forms and miss function. Same with rituals, prayers, exercise, politics, and half the internet. 
The outer gesture matters less than the inner state it trains.
<muoborder>
Tarkoitukset, katson taichi-videota YouTubessa, mikä on näiden ihmisten tekemien liikkeiden tarkoitus?
Tai chi -liikkeiden tarkoitus riippuu siitä, mitä tasoa katsot, koska tai chi on ärsyttävän elegantti siinä mielessä, että se on useita asioita samanaikaisesti.
Pinnallisesti liikkeet harjoittavat tasapainoa, koordinaatiota, ryhtiä, hengitystä ja kehotietoisuutta.
Hitaat, harkitut painonsiirrot opettavat sinulle, missä keskipisteesi on.
Jalkasi vahvistuvat, nivelesi löystyvät ja hermostosi rauhoittuu. Joten yksi tarkoitus on puhtaasti fyysinen tehokkuus.
Taistelutasolla jokaisella liikkeellä on alun perin taistelullinen merkitys.
Sulava pyyhkäisy voi edustaa tulevan iskun torjumista. Työntö voi simuloida voiman uudelleenohjausta. Askel taaksepäin voi luoda tilaa vastaliikkeelle.
Tanssilta näyttävä on usein naamioitua taistelumekaniikkaa, jota harjoitetaan hidastetusti, jotta tarkkuus juurtuu.
Sisäisellä tasolla harjoittajat puhuvat 'qin' eli sisäisen energian viljelemisestä.
Tulkitse tämä henkisesti, jos haluat, tai käytännönläheisemmin hengityksen säätelynä, keskittyneenä huomiona ja hienovaraisena kehon hallintana.
Jopa skeptisesti muotoiltuna tarkoituksena on harmonisoida mieli ja keho, jotta liike ei pirstoudu.
Ja sitten on meditatiivinen tarkoitus: olla täysin läsnä liikkeessä. Ei kiirehdittynä, ei pakotettuna, ei reagoitu impulsiivisesti.
Jokainen ele muuttuu tietoisuuden harjoitukseksi. Siksi se näyttää usein lähes seremonialliselta.
Hitaus ei ole koristeellista, se on tarkoitus.
Jos siis katsot taiji-videota ja näet virtaavia käsivarsia ja mitattuja askeleita, "tarkoitus" ei ole pelkästään näkyvä muoto.
Se on se, mitä harjoittaja viljelee muodon kautta: rakennetta, hallintaa, herkkyyttä, tyyneyttä ja reagointikykyä.
Toisin sanoen liike on astia. Varsinainen harjoitus on se, mitä tapahtuu sitä tekevän henkilön sisällä.
Ihmiset rakastavat tuijottaa muotoja ja jättää huomiotta niiden toiminnan. Sama pätee rituaaleihin, rukouksiin, liikuntaan, politiikkaan ja puoleen internetistä.
Ulkoinen ele on vähemmän tärkeä kuin sisäinen tila, jota se harjoittaa.`;

/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){EHIMGURL = jovuniverse.EHIMGURL+'eu/';}else{EHIMGURL = storyline.BIMG+'eu/';}
const svisual = ['de_a.jpg','de_b.jpg','de_c.jpg','de_d.jpg','de_e.jpg','de_f.jpg','es_a.jpg','es_b.jpg','es_c.jpg','es_d.jpg','es_e.jpg','es_f.jpg','es_g.jpg','es_h.jpg','es_i.jpg','ews.jpg','fr_a.jpg','fr_b.jpg','fr_c.jpg','fr_d.jpg','fr_e.jpg','fr_f.jpg','fr_g.jpg','fr_h.jpg','fr_i.jpg','fr_j.jpg','fr_k.jpg','fr_l.jpg','fr_m.jpg','fr_n.jpg','gr_a.jpg','gr_b.jpg','gr_c.jpg','gr_d.jpg','gr_e.jpg','gr_f.jpg','gr_g.jpg','gr_h.jpg','gr_i.jpg','gr_j.jpg','gr_k.jpg','gr_l.jpg','gr_m.jpg','gr_n.jpg','gr_o.jpg','gr_p.jpg','gr_q.jpg','gr_r.jpg','gr_s.jpg','it_a.jpg','it_b.jpg','it_c.jpg','it_d.jpg','it_e.jpg','it_f.jpg','it_g.jpg','it_h.jpg','it_i.jpg','it_j.jpg','it_k.jpg','it_l.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg'];
const ImgRo = 1;
const oImg = 'de_b.jpg';
const ehbmtitle = 'chiint';

storyline.intro = `<p>A conversation about the hidden intentions of doing taichi movements.</p>
<div style="font-size:smaller;">
<p>Total Slides:<br> 19</p>
<p>Story Text:<br><a href="https://chatgpt.com/" target="_blank">ChatGPT</a></p>
<p>Translations:<br><a href="https://translate.google.com/" target="_blank">Google Translate</a></p>
<p>Images:<br><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></p></div>`;

storyline.lang = ['EN','FI'];
storyline.clang = storyline.deflang = 'fi';
/*eo things to adjust*/

var reperc={starter:false,storylines:[],starterParagraph:false,bmidx:false,storyvis:svisual,setBookmark:function(x){if(reperc.localstorage==false){return}reperc.bookmark[reperc.bmidx].cpar=x;reperc.localstorage.setItem('southSideBM',JSON.stringify(reperc.bookmark))},initBookmark:function(){if(typeof localStorage=="object"){reperc.localstorage=localStorage}else if(typeof globalStorage=="object"){reperc.localstorage=globalStorage[location.host]}else{reperc.localstorage=false}if(reperc.localstorage!==false){reperc.bookmark=reperc.localstorage.getItem('southSideBM');if(reperc.bookmark==null){reperc.bookmark=[];reperc.bmidx=0;reperc.bookmark[0]={title:ehbmtitle,cpar:0}}else{reperc.bookmark=JSON.parse(reperc.bookmark);for(var i=0;i<reperc.bookmark.length;i++){if(reperc.bookmark[i].title==ehbmtitle){reperc.starterParagraph=reperc.bookmark[i].cpar;reperc.bmidx=i;break}}if(reperc.bmidx===false){reperc.bmidx=reperc.bookmark.length;reperc.bookmark[reperc.bmidx]={title:ehbmtitle,cpar:0}}}}},avdi:0,initDictionary:function(){if(typeof fiDiction!=='undefined'&&fiDiction!=''){fiDiction=JSON.parse(fiDiction);reperc.fiLM=JSON.parse(fiLM);reperc.avdi++}storyline.snd={};if(typeof fiSND!=='undefined'&&fiSND.length){storyline.snd.fi={};storyline.snd.fi.p=storyline.sndURL+fiSND[0];fiSND.splice(0,1);storyline.snd.fi.t=fiSND}},initStory:function(){reperc.initBookmark();reperc.initDictionary();reperc.storyvidx=[];for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}textSt=textSt.split('<muoborder>');for(var i=0;i<textSt.length;i++){textSt[i]=textSt[i].trim();if(textSt[i]=='')continue;reperc.storylines[i]=[];textSt[i]=textSt[i].split('\n');for(var ix=0;ix<textSt[i].length;ix++){textSt[i][ix]=textSt[i][ix].trim();if(textSt[i][ix]=='')continue;reperc.storylines[i][reperc.storylines[i].length]=textSt[i][ix]}}},nextHdlr:function(x){if(x%ImgRo==0){var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);if(!reperc.storyvidx.length){for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}}reperc.setBookmark(x)}},rp:function(){storyline.current_chap=reperc.starter;if(reperc.starterParagraph!==false){storyline.unfold_=true;storyline.chapters[storyline.current_chap].unfoldx(reperc.starterParagraph)}else{storyline.chapters[storyline.current_chap].unfold()}var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);document.addEventListener('unfoldx',e=>{reperc.nextHdlr(e.detail)})},xDict:function(p){$('body').append('<div id="dictionary" style="top:'+(p.top-40)+'px;left:'+p.left+'px;">Not Available</div>').addClass('dictionInq')},wo:function(r){window.open(r,'_blank')}};var chidx;var n;reperc.starter=1;config={type:'repercussion',effect:new repercussion(reperc.rp),prerequisite:false};chidx=storyline.addChapter(config);reperc.initStory();config={type:'narration',narration:false};n=new narration();for(var i=0;i<reperc.storylines[1].length;i++){n.addNarration(reperc.storylines[0][i],null,null,null,null,reperc.storylines[1][i])}n.illustration=EHIMGURL+oImg;config.narration=n;chidx=storyline.addChapter(config);storyline.dictionfn=function(t,l){$('#dictionary').remove();$('.txtfrg.inq').removeClass('inq');const pos=$(l).offset();$(l).addClass('inq');if(!reperc.avdi){reperc.xDict(pos);return}t=t.toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu,'');t=t+' - ';let xx=t[0].toLowerCase();if(storyline.clang=='fi'){if(typeof reperc.fiLM==='undefined'){reperc.xDict(pos);return}if(!reperc.fiLM[xx]){reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');return}for(var i=reperc.fiLM[xx].start;i<=reperc.fiLM[xx].end;i++){if(fiDiction[i].indexOf(t)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+fiDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate')}};$('#text5').prop('src',EHIMGURL+oImg);