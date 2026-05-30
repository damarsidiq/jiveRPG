var shdtxt=`Phps mt_rand-beskrivning: Denna funktion genererar inte kryptografiskt säkra värden och bör inte användas för kryptografiska ändamål.
Om du behöver ett kryptografiskt säkert värde, överväg att använda random_int() , random_bytes() eller openssl_random_pseudo_bytes() istället.
Många slumptalsgeneratorer av äldre libcs har tvivelaktiga eller okända egenskaper och är långsamma.
Funktionen mt_rand() är en drop-in ersättning för den äldre rand() . Den använder en slumptalsgenerator med kända egenskaper som använder » Mersenne Twister , som kommer att producera slumptal fyra gånger snabbare än vad den genomsnittliga libc rand() tillhandahåller.
Flera frågor dök upp från den beskrivningen: varför är det inte kryptosäkert och vad skulle göra något annat kryptosäkert?
Varför är det bra att ha en känd egenskap och hur ser denna egenskap ut?
Och för att avvika, Tetris nästa block är slumpmässigt? hur eller med vilken typ av slumpmässig? är det relaterat till den php-funktionen?
Bra, en ordentlig fråga om slumpmässighet. Mänsklighetens favoritsak att missförstå efter näring.
Mt_rand() i PHP använder Mersenne Twister, specifikt en variant av MT19937. Det är "pseudoslumpmässigt", vilket betyder att det inte skapar sann slumpmässighet.
Den genererar siffror genom en deterministisk algoritm som börjar från ett frö. Den distinktionen är hela historien.
Om du känner till algoritmen och tillräckligt många av dess utdata kan du ofta rekonstruera dess interna tillstånd och förutsäga framtida utdata.
Det är precis därför det inte är kryptografiskt säkert.
En kryptografiskt säker RNG (CSPRNG) är utformad så att även om du ser många utdata, kan du fortfarande inte förutsäga nästa.
Den bör också motstå försök att sluta sig till dess interna tillstånd. Det är baren.
Alltså: mt_rand() = statistiskt bra, snabb, förutsägbar om den attackeras.
Random_int() / random_bytes() = säkerhetsorienterad, oförutsägbar.
Skillnaden är inte "mer slumpmässig". Det är "svårare att bakåtkonstruera".
En normal PRNG är som en komplicerad klocka. En CSPRNG är som en låst maskin med dolda rörliga delar och fräscht yttre ljud som ständigt rörs in.
Det där "utomstående bruset" kallas entropi. Kryptografiska generatorer drar ofta entropi från saker som systemavbrott, hårdvaruhändelser, timingjitter eller dedikerade hårdvaru-RNG:er.
Sedan kör de det genom säkra algoritmer som ChaCha20 eller AES i speciella lägen.
Nu om "kända egenskaper". Den frasen betyder att forskare förstår hur generatorn beter sig matematiskt.
För en PRNG inkluderar användbara egenskaper: periodlängd. enhetlig fördelning. korrelation mellan utgångar.
Hastighet. reproducerbarhet. jämnfördelning i många dimensioner.
Mersenne Twister har till exempel en enorm period: (2^{19937} - 1). Det betyder att den kan producera en absurt lång sekvens innan den upprepas.
Dess utdata är väl fördelade för simuleringar och spel. Det var därför det blev populärt.
Så "kända egenskaper" betyder: testade, mätta, matematiskt studerade.
Men samma kända egenskaper kan också avslöja svagheter. Mersenne Twister är utmärkt för simulering, fruktansvärt för hemligheter.
Varför? För efter att ha observerat tillräckligt många utdata (624 värden för MT19937), kan en angripare rekonstruera hela det interna tillståndet.
Vid den tidpunkten är framtida siffror i princip exponerade. Det är inte en bugg. Det är bara inte vad den byggdes för.
Nu din Tetris fråga. Utmärkt omväg.
Modern Tetris använder vanligtvis "inte" rent slumpmässigt blockval. De flesta versioner använder något som kallas "7-bag"-systemet.
Istället för att välja varje del självständigt skapar spelet en blandad påse som innehåller exakt en av varje sju tetrominoer: I, O, T, S, Z, J, L.
Sedan delar den ut dem en efter en tills påsen är tom, och blandar sedan om en annan påse.
Så över var 7:e bit är du garanterad en av varje. Det förhindrar mardrömstorka som att gå 50 stycken utan ett I-block.
För att tydligen även Tetris-utvecklare beslutade att ren slumpmässighet var för grym.
Hur går blandningen till? Det beror på genomförandet. Den kan använda en PRNG som Mersenne Twister, eller någon annan lätt generator.
För ett spel som Tetris är kryptografisk säkerhet onödig. Det viktiga är: rättvisa. oförutsägbarhet för spelarna. repeterbarhet vid behov. hastighet.
Så ja, begreppsmässigt är det relaterat till mt_rand().
Ett Tetris-spel kan använda en vanlig PRNG för att blanda påsen. Men slumpmässighetsmodellen är begränsad av design, till skillnad från generering av obearbetad tal.
Så resultatet "känns" slumpmässigt samtidigt som det faktiskt är strukturerat. Vilket för övrigt är hur mycket av livet som fungerar.
Sann slumpmässighet är ofta oönskad i spel eftersom människor tolkar rättvisa känslomässigt, inte matematiskt.
Ett helt slumpmässigt system kan kännas orättvist. Ett strukturerat pseudo-slumpmässigt system känns ofta bättre.
Det är därför spel falska slumpmässighet hela tiden. Och ärligt talat, det gör människor också.`;