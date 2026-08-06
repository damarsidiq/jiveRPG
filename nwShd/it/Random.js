var shdtxt=`mt_rand di Php descrizione: Questa funzione non genera valori crittograficamente sicuri e non deve essere utilizzata per scopi crittografici.
Se hai bisogno di un valore crittograficamente sicuro, considera invece l'utilizzo di random_int() , random_bytes() o openssl_random_pseudo_bytes ().
Molti generatori di numeri casuali di libc più vecchi hanno caratteristiche dubbie o sconosciute e sono lenti.
La funzione mt_rand () è una sostituzione drop-in per il vecchio rand (). Esso utilizza un generatore di numeri casuali con caratteristiche note utilizzando il " Mersenne Twister, che produrrà numeri casuali quattro volte più veloce di quello che la media libc rand() fornisce.
Diverse domande sono emerse da quella descrizione: perché non è cripto-sicuro e cosa renderebbe qualcos'altro cripto-sicuro?
Perché è bene avere una caratteristica nota e come appare questa caratteristica?
E per divagare, tetris prossimo blocco è casuale? come o usando che tipo di casuale? è relatable a quella funzione php?
Bene, una domanda corretta sulla casualità. La cosa preferita dell'umanità da fraintendere dopo la nutrizione.
Mt_rand () in PHP utilizza il Mersenne Twister, in particolare una variante di MT19937. È 'pseudorandom', il che significa che non crea vera casualità.
Genera numeri attraverso un algoritmo deterministico a partire da un seme. Questa distinzione è tutta la storia.
Se conosci l'algoritmo e abbastanza dei suoi output, puoi spesso ricostruire il suo stato interno e prevedere gli output futuri.
Questo è esattamente il motivo per cui non è crittograficamente sicuro.
Un RNG crittograficamente sicuro (CSPRNG) è progettato in modo che anche se si vedono molti output, non è ancora possibile prevedere il prossimo.
Dovrebbe anche resistere ai tentativi di dedurre il suo stato interno. E ' il bar.
Quindi: mt_rand () = statisticamente decente, veloce, prevedibile se attaccato.
Random_int () / random_bytes () = orientato alla sicurezza, imprevedibile.
La differenza non è " più casuale."È" più difficile da decodificare.”.
Un normale PRNG è come un orologio complicato. Un CSPRNG è come una macchina bloccata con parti mobili nascoste e rumore esterno fresco costantemente mescolato.
Quel "rumore esterno" si chiama entropia. I generatori crittografici spesso estraggono entropia da cose come interrupt di sistema, eventi hardware, jitter di temporizzazione o RNG hardware dedicati.
Quindi lo eseguono attraverso algoritmi sicuri come ChaCha20 o AES in modalità speciali.
Ora, su " caratteristiche conosciute.”. Questa frase significa che i ricercatori capiscono come il generatore si comporta matematicamente.
Per un PRNG, le caratteristiche utili includono: durata del periodo. uniformità di distribuzione. correlazione tra gli output.
Velocita. riproducibilità. equidistribuzione in molte dimensioni.
Ad esempio, Mersenne Twister ha un periodo enorme: (2^{19937} - 1). Ciò significa che può produrre una sequenza assurdamente lunga prima di ripeterla.
I suoi output sono ben distribuiti per simulazioni e giochi. Ecco perché è diventato popolare.
Quindi "caratteristiche conosciute" significa: testato, misurato, studiato matematicamente.
Ma quelle stesse proprietà conosciute possono anche rivelare debolezze. Mersenne Twister è eccellente per la simulazione, terribile per i segreti.
Perché? Perché dopo aver osservato abbastanza output (624 valori per MT19937), un utente malintenzionato può ricostruire lo stato interno completo.
A quel punto, i numeri futuri sono fondamentalmente esposti. Non e ' un insetto. Non è per questo che è stato costruito.
Ora la tua domanda Tetris. Ottima deviazione.
Il Tetris moderno " non " di solito usa la pura selezione casuale dei blocchi. La maggior parte delle versioni utilizza qualcosa chiamato sistema “7-bag”.
Invece di scegliere ogni pezzo in modo indipendente, il gioco crea un sacchetto mischiato contenente esattamente uno di ogni sette tetromini: I, O, T, S, Z, J, L.
Poi li tratta uno per uno fino a quando la borsa è vuota, quindi rimescola un'altra borsa.
Così su ogni 7 pezzi, si sono garantiti uno di ciascuno. Ciò impedisce siccità da incubo come andare 50 pezzi senza un I-block.
Perché apparentemente anche gli sviluppatori di Tetris hanno deciso che la pura casualità era troppo crudele.
Come è fatto lo shuffle? Dipende dall'implementazione. Si può usare un PRNG come Mersenne Twister, o qualche altro generatore leggero.
Per un gioco come Tetris, la sicurezza crittografica non è necessaria. Ciò che conta è: l'equità. imprevedibilità per i giocatori. ripetibilità se necessario. velocita.
Quindi sì, concettualmente è correlato a mt_rand ().
Un gioco Tetris potrebbe utilizzare un PRNG standard per mescolare la borsa. Ma il modello di casualità è limitato dalla progettazione, a differenza della generazione di numeri grezzi.
Quindi il risultato "sembra" casuale mentre in realtà è strutturato. Che è, per inciso, quanto funziona la vita.
La vera casualità è spesso indesiderabile nei giochi perché gli umani interpretano l'equità emotivamente, non matematicamente.
Un sistema perfettamente casuale può sembrare ingiusto. Un sistema pseudo-casuale strutturato spesso si sente meglio.
Ecco perché i giochi falsi casualità tutto il tempo. E onestamente, così fanno le persone.`;