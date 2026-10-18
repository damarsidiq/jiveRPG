var shdtxt=`La popolazione di quella piccola isola isolata riusciva a soddisfare i propri bisogni quotidiani recandosi all’estero, attraversando diverse nazioni via mare e sfruttando ed estraendo alcune delle risorse più preziose del mondo in un’altra piccola regione isolata, sconosciuta a tutti gli altri.
Alcune delle altre nazioni si sono riunite e hanno cercato di inviare una piccola delegazione sull’isola, ma a metà strada, in mezzo all’oceano, il gruppo si è imbattuto in un blocco. Il blocco ha comunicato che la funzione “delegate” era stata deprecata a partire dalla versione 3.0.
Le Nazioni Unite incaricarono quindi una piccola unità di intercettare l’equipaggio responsabile dello scavo delle preziose risorse, ma questa tornò a mani vuote.
Riferirono che la nave dell’equipaggio era criptata.
Infine, una tempesta si abbatté sulla regione dell’isola.
La tempesta fece arenare sulla riva la barca di un pescatore.
La tempesta ruppe la vela della barca e alcuni animali selvatici danneggiarono la parte inferiore dello scafo.
Il pescatore sopravvisse grazie alla piccola quantità di cibo che aveva portato con sé.
Trascorsi due giorni, lo consumò tutto e si mise alla ricerca di un villaggio nelle vicinanze.
Alla fine raggiunse la casa di un contadino e gli raccontò l’accaduto.
Chiese del cibo e il contadino gli disse di mangiare ciò che c’era sul tavolo, ma aggiunse che non poteva restare perché la fattoria era vittima di un attacco DDoS.
Quando il contadino tornò, vide che il pescatore aveva mangiato tutto il cibo che c’era sul tavolo.
Pentendosi di averlo invitato a mangiare, il contadino decise di dare al pescatore una delle sue barche e gli disse che non poteva restare per la notte.
Era la politica CORS.
Il gioco del gatto e del topo.
Sebbene il concetto sia una “passeggiata nel parco” (trovare il manifest, estrarre gli URL), l’implementazione è senza dubbio un vero e proprio gioco del gatto e del topo tra YouTube e questi servizi di download.
Come YouTube cerca di combattere chi scarica i video.
YouTube non vuole che le persone scarichino i video per diversi motivi (diritti d’autore, perdita di introiti pubblicitari, controllo della distribuzione).
Adotta attivamente diverse strategie per impedire lo scraping semplice e sistematico.
1. Crittografia e hash della firma. Questo è l’ostacolo maggiore.
L’URL diretto effettivo dello streaming video è spesso offuscato (nascosto) e richiede una chiave di decrittografia o un hash della firma generato correttamente prima che la CDN possa fornire il file.
Il codice JavaScript che genera questo hash viene modificato frequentemente da YouTube.
Il gioco al gatto e al topo: ogni volta che YouTube modifica il codice JavaScript che genera l’hash della firma, i servizi di download devono analizzare rapidamente il nuovo codice, individuare il nuovo algoritmo di hash e aggiornare i propri sistemi.
Questa è la principale attività di “gatto e topo”.
2. Formati dei manifesti incoerenti.
Sebbene il nome del file del manifesto non venga modificato spesso, YouTube può cambiare (e lo fa) la struttura interna dei dati all’interno del manifesto (ad esempio, modificando i nomi dei parametri, i formati dei file o i metodi di codifica).
3. URL geografici/legati alla sessione.
Gli URL dei video forniti nel manifesto sono spesso a durata limitata e vincolati alla sessione.
Potrebbero essere validi solo per pochi minuti e utilizzabili esclusivamente dall’indirizzo IP che li ha richiesti.
Ciò impedisce a un servizio di limitarsi a prelevare un URL e condividerlo su larga scala.
Conclusione sulla questione: la sfida non sta nel trovare il manifesto, bensì nel decodificare e firmare correttamente gli URL al suo interno prima che scadano.`;