var shdtxt=`Tornando alle dimensioni extra, le usiamo per i codici di correzione degli errori?
Di cosa si tratta e come funzionano?
Sì. Le dimensioni extra, in senso matematico, sono ampiamente utilizzate nei codici di correzione degli errori.
Non perché i tuoi dati viaggino segretamente attraverso l’iperspazio, purtroppo, ma perché una struttura a dimensioni superiori rende gli errori più facili da individuare e correggere.
Ecco l’idea di fondo. Supponiamo che tu voglia inviare un messaggio, ad esempio 1011.
Se il rumore inverte un bit durante la trasmissione, il destinatario potrebbe ricevere 1001.
Senza ridondanza, non c’è modo di sapere quale versione sia corretta.
Quindi si codifica il messaggio originale in uno spazio strutturato più ampio. Quella struttura aggiuntiva è la “dimensione extra”.
Non si inviano più solo dati grezzi. Si inviano dati insieme a relazioni tra i bit progettate con cura.
Un semplice esempio: invece di inviare un bit, lo si invia tre volte.
- 1 diventa 111. 0 diventa 000. Se un bit si inverte: 111 → 101.
Il ricevitore applica il voto a maggioranza e recupera il 1. Primitivo, ma efficace.
Ora si estende questo concetto con la matematica avanzata.
I moderni codici di correzione degli errori trattano i messaggi come punti in spazi ad alta dimensionalità. Ogni parola di codice valida è posizionata lontano dalle altre.
Per «distanza» qui si intende solitamente la «distanza di Hamming»: quanti bit differiscono.
Se il rumore perturba il messaggio, questo si sposta verso un punto vicino.
Il decodificatore verifica quale parola di codice valida sia la più vicina e presume che sia quella desiderata. Quindi la geometria è importante.
La disposizione in dimensioni superiori consente una correzione efficiente.
È qui che le “dimensioni extra” diventano utili: offrono spazio per distanziare i messaggi validi.
Pensateci come alle città su una mappa. Se le città sono troppo vicine, un viaggiatore può finire in quella sbagliata dopo un piccolo errore.
Se sono ben distanziate, anche con delle deviazioni, è comunque possibile individuare la destinazione prevista.
La correzione degli errori consiste nel progettare la mappa in modo che le destinazioni siano inconfondibili.
Un esempio famoso è il «codice di Hamming». Esso aggiunge bit di parità in posizioni strategiche.
Questi controlli di parità creano equazioni che i messaggi validi devono soddisfare.
Se un bit è errato, le equazioni violate rivelano esattamente dove si è verificato l’errore. Quindi, invece di tirare a indovinare, il sistema effettua una diagnosi.
I sistemi più avanzati utilizzano la geometria algebrica, i reticoli e i campi finiti.
Alcuni si ricollegano persino a oggetti di dimensione molto elevata, come il «reticolo di Leech», che trova applicazioni nella teoria della codifica.
È qui che il linguaggio dimensionale diventa matematica vera e propria.
Perché funziona: la ridondanza aggiunge vincoli; i vincoli definiscono la struttura; la struttura crea modelli rilevabili.
I modelli consentono la correzione.
Quindi le “dimensioni extra” non sono dimensioni fisiche. Sono coordinate aggiuntive in uno spazio matematico astratto in cui gli errori diventano visibili.
Nello spazio ordinario, il rumore è confusione. Nello spazio codificato a dimensioni superiori, il rumore diventa spostamento.
E lo spostamento può essere misurato.
Questo è uno di quei casi eleganti in cui la geometria salva silenziosamente il traffico Internet della civiltà.`;