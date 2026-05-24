var textSt=`Php's mt_rand description: This function does not generate cryptographically secure values, and should not be used for cryptographic purposes. 
If you need a cryptographically secure value, consider using random_int() , random_bytes() , or openssl_random_pseudo_bytes() instead.
Many random number generators of older libcs have dubious or unknown characteristics and are slow. 
The mt_rand() function is a drop-in replacement for the older rand() . It uses a random number generator with known characteristics using the » Mersenne Twister , which will produce random numbers four times faster than what the average libc rand() provides. 
several questions popped up from that description: why is it not crypto-safe and what would make something else crypto-safe? 
why is it good to have a known characteristic and what does this characteristic look like? 
and to digress, tetris next block is random? how or using what type of random? is it relatable to that php function?
Good, a proper question about randomness. Humanity’s favorite thing to misunderstand after nutrition.
mt_rand() in PHP uses the Mersenne Twister, specifically a variant of MT19937. It is 'pseudorandom', meaning it does not create true randomness. 
It generates numbers through a deterministic algorithm starting from a seed. That distinction is the whole story.
If you know the algorithm and enough of its outputs, you can often reconstruct its internal state and predict future outputs. 
That is exactly why it is not cryptographically safe.
A cryptographically secure RNG (CSPRNG) is designed so that even if you see many outputs, you still cannot feasibly predict the next one. 
It should also resist attempts to infer its internal state. That’s the bar.
So: mt_rand() = statistically decent, fast, predictable if attacked.
random_int() / random_bytes() = security-oriented, unpredictable.
The difference is not “more random.” It is “harder to reverse-engineer.”.
A normal PRNG is like a complicated clock. A CSPRNG is like a locked machine with hidden moving parts and fresh outside noise constantly stirred in.
That “outside noise” is called entropy. Cryptographic generators often pull entropy from things like system interrupts, hardware events, timing jitter, or dedicated hardware RNGs. 
Then they run it through secure algorithms such as ChaCha20 or AES in special modes.
Now, about “known characteristics.”. That phrase means researchers understand how the generator behaves mathematically.
For a PRNG, useful characteristics include: period length. distribution uniformity. correlation between outputs.
speed. reproducibility. equidistribution in many dimensions.
For example, Mersenne Twister has an enormous period: (2^{19937} - 1). That means it can produce an absurdly long sequence before repeating.
Its outputs are well distributed for simulations and games. That is why it became popular.
So “known characteristics” means: tested, measured, mathematically studied.
But those same known properties can also reveal weaknesses. Mersenne Twister is excellent for simulation, terrible for secrets.
Why? Because after observing enough outputs (624 values for MT19937), an attacker can reconstruct the full internal state.
At that point, future numbers are basically exposed. That’s not a bug. That’s just not what it was built for.
Now your Tetris question. Excellent detour.
Modern Tetris does 'not' usually use pure random block selection. Most versions use something called the “7-bag” system.
Instead of picking each piece independently, the game creates a shuffled bag containing exactly one of each seven tetrominoes: I, O, T, S, Z, J, L.
Then it deals them one by one until the bag is empty, then reshuffles another bag.
So over every 7 pieces, you are guaranteed one of each. That prevents nightmare droughts like going 50 pieces without an I-block.
Because apparently even Tetris developers decided pure randomness was too cruel.
How is the shuffle done? That depends on implementation. It may use a PRNG like Mersenne Twister, or some other lightweight generator.
For a game like Tetris, cryptographic safety is unnecessary. What matters is: fairness. unpredictability to players. repeatability if needed. speed.
So yes, conceptually it’s related to mt_rand().
A Tetris game might use a standard PRNG to shuffle the bag. But the randomness model is constrained by design, unlike raw number generation.
So the result 'feels' random while actually being structured. Which is, incidentally, how much of life works.
True randomness is often undesirable in games because humans interpret fairness emotionally, not mathematically.
A perfectly random system can feel unfair. A structured pseudo-random system often feels better.
That’s why games fake randomness all the time. And honestly, so do people.
<muoborder>
Php:n mt_rand-kuvaus: Tämä funktio ei luo kryptografisesti turvallisia arvoja, eikä sitä tule käyttää kryptografisiin tarkoituksiin.
Jos tarvitset kryptografisesti turvallisen arvon, harkitse random_int():n, random_bytes():n tai openssl_random_pseudo_bytes():n käyttöä.
Monilla vanhempien libcs-järjestelmien satunnaislukugeneraattoreilla on kyseenalaisia tai tuntemattomia ominaisuuksia ja ne ovat hitaita.
mt_rand()-funktio on korvaava versio vanhemmasta rand():sta. Se käyttää satunnaislukugeneraattoria, jolla on tunnetut ominaisuudet käyttäen » Mersenne Twisteriä, joka tuottaa satunnaislukuja neljä kertaa nopeammin kuin keskimääräinen libc rand() tarjoaa.
Kuvauksesta heräsi useita kysymyksiä: miksi se ei ole kryptoturvallinen ja mikä tekisi jostakin muusta kryptoturvallisen?
Miksi on hyvä, että on tunnettu ominaisuus ja miltä tämä ominaisuus näyttää?
Ja sivupolulla, tetriksen seuraava lohko on satunnainen? Miten tai minkä tyyppistä satunnaisuutta käytetään? Onko se yhteydessä kyseiseen PHP-funktioon?
Hyvä, oikea kysymys satunnaisuudesta. Ihmiskunnan suosikkiasia väärinymmärrettäväksi ravinnon jälkeen.
mt_rand() PHP:ssä käyttää Mersenne Twisteriä, erityisesti MT19937:n muunnosta. Se on 'näennäissatunnainen', mikä tarkoittaa, että se ei luo todellista satunnaisuutta.
Se luo lukuja deterministisen algoritmin avulla alkaen siemenestä. Tuo ero on koko totuus.
Jos tunnet algoritmin ja riittävästi sen tuotoksia, voit usein rekonstruoida sen sisäisen tilan ja ennustaa tulevia tuotoksia.
Juuri siksi se ei ole kryptografisesti turvallinen.
Kryptografisesti turvallinen satunnaislukugeneraattori (CSPRNG) on suunniteltu siten, että vaikka näkisit useita tuotoksia, et silti voi ennustaa seuraavaa.
Sen tulisi myös vastustaa yrityksiä päätellä sen sisäinen tila. Siinä kaikki.
Joten: mt_rand() = tilastollisesti kohtuullinen, nopea, ennustettavissa hyökkäyksen sattuessa.
random_int() / random_bytes() = turvallisuuspainotteinen, arvaamaton.
Ero ei ole "satunnaisempi". Sitä on "vaikeampi takaisinmallintaa".
Normaali PRNG on kuin monimutkainen kello. CSPRNG on kuin lukittu kone, jossa on piilotettuja liikkuvia osia ja jatkuvasti uutta ulkoista kohinaa.
Tätä "ulkoista kohinaa" kutsutaan entropiaksi. Kryptografiset generaattorit usein vetävät entropiaa esimerkiksi järjestelmän keskeytyksistä, laitteistotapahtumista, ajoitusvirheestä tai erillisistä laitteiston satunnaislukugeneraattoreista.
Sitten ne ajavat sen läpi turvallisilla algoritmeilla, kuten ChaCha20 tai AES erityistiloissa.
Nyt "tunnetuista ominaisuuksista". Tämä ilmaus tarkoittaa, että tutkijat ymmärtävät, miten generaattori käyttäytyy matemaattisesti.
PRNG:n hyödyllisiä ominaisuuksia ovat: periodin pituus. jakauman tasaisuus. korrelaatio tulosteiden välillä.
Nopeus. toistettavuus. tasainen jakauma monissa ulottuvuuksissa.
Esimerkiksi Mersenne Twisterillä on valtava periodi: (2^{19937} - 1). Tämä tarkoittaa, että se voi tuottaa järjettömän pitkän sekvenssin ennen toistumista.
Sen tuotokset ovat hyvin jakautuneita simulaatioita ja pelejä varten. Siksi siitä tuli suosittu.
Joten "tunnetut ominaisuudet" tarkoittaa: testattua, mitattua, matemaattisesti tutkittua.
Mutta samat tunnetut ominaisuudet voivat myös paljastaa heikkouksia. Mersenne Twister on erinomainen simulointiin, mutta huono salaisuuksien tutkimiseen.
Miksi? Koska havaittuaan riittävästi tuloksia (624 arvoa MT19937:lle), hyökkääjä voi rekonstruoida koko sisäisen tilan.
Siinä vaiheessa tulevat luvut ovat käytännössä paljastuneet. Se ei ole bugi. Sitä ei vain ole tarkoitettu.
Nyt Tetris-kysymyksesi. Erinomainen kiertotie.
Moderni Tetris "ei" yleensä käytä puhdasta satunnaista lohkovalintaa. Useimmat versiot käyttävät niin sanottua "7-pussin" järjestelmää.
Sen sijaan, että jokainen pala poimittaisiin erikseen, peli luo sekoitetun pussin, joka sisältää täsmälleen yhden jokaisesta seitsemästä tetrominosta: I, O, T, S, Z, J, L.
Sitten se jakaa ne yksi kerrallaan, kunnes pussi on tyhjä, ja sekoittaa sitten uuden pussin.
Joten jokaista seitsemää palaa kohden sinulle taataan yksi kutakin. Tämä estää painajaismaiset kuivuudet, kuten 50 palan menettämisen ilman I-lohkoa.
Koska ilmeisesti jopa Tetrisin kehittäjät päättivät, että puhdas satunnaisuus oli liian julmaa.
Miten sekoitus tehdään? Se riippuu toteutuksesta. Se voi käyttää PRNG:tä, kuten Mersenne Twisteriä, tai jotain muuta kevyttä generaattoria.
Tetrisin kaltaisessa pelissä kryptografinen turvallisuus on tarpeetonta. Tärkeintä on: reiluus. Ennustamattomuus pelaajille. Toistettavuus tarvittaessa. nopeus.
Joten kyllä, käsitteellisesti se liittyy mt_rand()-funktioon.
Tetris-peli saattaa käyttää tavallista PRNG:tä pussin sekoittamiseen. Mutta satunnaisuusmalli on suunnittelultaan rajoitettu, toisin kuin raakalukujen generointi.
Joten tulos "tuntuu" satunnaiselta, vaikka se onkin itse asiassa strukturoitu. Mikä on muuten se, miten suuri osa elämästä toimii.
Todellinen satunnaisuus on usein ei-toivottavaa peleissä, koska ihmiset tulkitsevat reiluuden emotionaalisesti, eivät matemaattisesti.
Täysin satunnainen järjestelmä voi tuntua epäreilulta. Rakenteinen pseudo-satunnainen järjestelmä tuntuu usein paremmalta.
Siksi pelit teeskentelevät satunnaisuutta koko ajan. Ja rehellisesti sanottuna, niin tekevät ihmisetkin.`;

/*things to adjust*/
var EHIMGURL;
if(storyline.gtUrl.indexOf('https:') === 0){EHIMGURL = jovuniverse.EHIMGURL+'eu/';}else{EHIMGURL = storyline.BIMG+'eu/';}
const svisual = ['de_a.jpg','de_b.jpg','de_c.jpg','de_d.jpg','de_e.jpg','de_f.jpg','es_a.jpg','es_b.jpg','es_c.jpg','es_d.jpg','es_e.jpg','es_f.jpg','es_g.jpg','es_h.jpg','es_i.jpg','ews.jpg','fr_a.jpg','fr_b.jpg','fr_c.jpg','fr_d.jpg','fr_e.jpg','fr_f.jpg','fr_g.jpg','fr_h.jpg','fr_i.jpg','fr_j.jpg','fr_k.jpg','fr_l.jpg','fr_m.jpg','fr_n.jpg','gr_a.jpg','gr_b.jpg','gr_c.jpg','gr_d.jpg','gr_e.jpg','gr_f.jpg','gr_g.jpg','gr_h.jpg','gr_i.jpg','gr_j.jpg','gr_k.jpg','gr_l.jpg','gr_m.jpg','gr_n.jpg','gr_o.jpg','gr_p.jpg','gr_q.jpg','gr_r.jpg','gr_s.jpg','it_a.jpg','it_b.jpg','it_c.jpg','it_d.jpg','it_e.jpg','it_f.jpg','it_g.jpg','it_h.jpg','it_i.jpg','it_j.jpg','it_k.jpg','it_l.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg'];
const ImgRo = 1;
const oImg = 'de_f.jpg';
const ehbmtitle = 'mtrand';

storyline.intro = `<p>A conversation about random numbers generating function.</p>
<div style="font-size:smaller;">
<p>Total Slides:<br> 43</p>
<p>Story Text:<br><a href="https://chatgpt.com/" target="_blank">ChatGPT</a></p>
<p>Translations:<br><a href="https://translate.google.com/" target="_blank">Google Translate</a></p>
<p>Images:<br><a href="https://www.pixabay.com" target="_blank">pixabay.com</a></p></div>`;

storyline.lang = ['EN','FI'];
storyline.clang = storyline.deflang = 'fi';
/*eo things to adjust*/

var reperc={starter:false,storylines:[],starterParagraph:false,bmidx:false,storyvis:svisual,setBookmark:function(x){if(reperc.localstorage==false){return}reperc.bookmark[reperc.bmidx].cpar=x;reperc.localstorage.setItem('southSideBM',JSON.stringify(reperc.bookmark))},initBookmark:function(){if(typeof localStorage=="object"){reperc.localstorage=localStorage}else if(typeof globalStorage=="object"){reperc.localstorage=globalStorage[location.host]}else{reperc.localstorage=false}if(reperc.localstorage!==false){reperc.bookmark=reperc.localstorage.getItem('southSideBM');if(reperc.bookmark==null){reperc.bookmark=[];reperc.bmidx=0;reperc.bookmark[0]={title:ehbmtitle,cpar:0}}else{reperc.bookmark=JSON.parse(reperc.bookmark);for(var i=0;i<reperc.bookmark.length;i++){if(reperc.bookmark[i].title==ehbmtitle){reperc.starterParagraph=reperc.bookmark[i].cpar;reperc.bmidx=i;break}}if(reperc.bmidx===false){reperc.bmidx=reperc.bookmark.length;reperc.bookmark[reperc.bmidx]={title:ehbmtitle,cpar:0}}}}},avdi:0,initDictionary:function(){if(typeof fiDiction!=='undefined'&&fiDiction!=''){fiDiction=JSON.parse(fiDiction);reperc.fiLM=JSON.parse(fiLM);reperc.avdi++}storyline.snd={};if(typeof fiSND!=='undefined'&&fiSND.length){storyline.snd.fi={};storyline.snd.fi.p=storyline.sndURL+fiSND[0];fiSND.splice(0,1);storyline.snd.fi.t=fiSND}},initStory:function(){reperc.initBookmark();reperc.initDictionary();reperc.storyvidx=[];for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}textSt=textSt.split('<muoborder>');for(var i=0;i<textSt.length;i++){textSt[i]=textSt[i].trim();if(textSt[i]=='')continue;reperc.storylines[i]=[];textSt[i]=textSt[i].split('\n');for(var ix=0;ix<textSt[i].length;ix++){textSt[i][ix]=textSt[i][ix].trim();if(textSt[i][ix]=='')continue;reperc.storylines[i][reperc.storylines[i].length]=textSt[i][ix]}}},nextHdlr:function(x){if(x%ImgRo==0){var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);if(!reperc.storyvidx.length){for(var i=0;i<reperc.storyvis.length;i++){reperc.storyvidx[reperc.storyvidx.length]=i}}reperc.setBookmark(x)}},rp:function(){storyline.current_chap=reperc.starter;if(reperc.starterParagraph!==false){storyline.unfold_=true;storyline.chapters[storyline.current_chap].unfoldx(reperc.starterParagraph)}else{storyline.chapters[storyline.current_chap].unfold()}var stvidx=jovuniverse.getrand(0,reperc.storyvidx.length);var stvi=reperc.storyvidx[stvidx];storyline.chapters[storyline.current_chap].elements.narration.illustration=EHIMGURL+reperc.storyvis[stvi];reperc.storyvidx.splice(stvidx,1);document.addEventListener('unfoldx',e=>{reperc.nextHdlr(e.detail)})},xDict:function(p){$('body').append('<div id="dictionary" style="top:'+(p.top-40)+'px;left:'+p.left+'px;">Not Available</div>').addClass('dictionInq')},wo:function(r){window.open(r,'_blank')}};var chidx;var n;reperc.starter=1;config={type:'repercussion',effect:new repercussion(reperc.rp),prerequisite:false};chidx=storyline.addChapter(config);reperc.initStory();config={type:'narration',narration:false};n=new narration();for(var i=0;i<reperc.storylines[1].length;i++){n.addNarration(reperc.storylines[0][i],null,null,null,null,reperc.storylines[1][i])}n.illustration=EHIMGURL+oImg;config.narration=n;chidx=storyline.addChapter(config);storyline.dictionfn=function(t,l){$('#dictionary').remove();$('.txtfrg.inq').removeClass('inq');const pos=$(l).offset();$(l).addClass('inq');if(!reperc.avdi){reperc.xDict(pos);return}t=t.toLowerCase().replace(/^[\p{P}\p{S}\s]+|[\p{P}\p{S}\s]+$/gu,'');t=t+' - ';let xx=t[0].toLowerCase();if(storyline.clang=='fi'){if(typeof reperc.fiLM==='undefined'){reperc.xDict(pos);return}if(!reperc.fiLM[xx]){reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate');return}for(var i=reperc.fiLM[xx].start;i<=reperc.fiLM[xx].end;i++){if(fiDiction[i].indexOf(t)===0){$('body').append('<div id="dictionary" style="top:'+(pos.top-40)+'px;left:'+pos.left+'px;">'+fiDiction[i].split(' - ')[1]+'</div>').addClass('dictionInq');return}}reperc.wo('https://translate.google.com/?sl='+storyline.clang+'&tl=en&text='+t+'&op=translate')}};$('#text5').prop('src',EHIMGURL+oImg);