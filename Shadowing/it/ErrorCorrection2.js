var shdtxt=`Ma i dati subiscono un aumento di volume molte volte: usiamo sempre codici di correzione degli errori per la navigazione quotidiana su Internet o solo per applicazioni specifiche?
Sì, la ridondanza aumenta il volume dei dati. È questo il compromesso.
L’affidabilità comporta costi in termini di larghezza di banda, spazio di archiviazione, latenza o potenza di calcolo. La civiltà è fondamentalmente una lunga negoziazione con dei costi aggiuntivi.
Ma no, non usiamo «sempre» lo stesso livello elevato di correzione degli errori ovunque.
Sistemi diversi scelgono equilibri diversi a seconda di quanto siano costosi gli errori.
Per l’uso quotidiano di Internet, la correzione degli errori è assolutamente presente, ma spesso stratificata e ottimizzata.
Non tutte le applicazioni utilizzano una forte correzione degli errori in avanti in ogni momento. Alcune si affidano maggiormente al “rilevamento + ritrasmissione”.
Ciò significa: rilevare un errore, richiedere nuovamente i dati. Questo è comune nelle comunicazioni bidirezionali affidabili, come la navigazione web.
Perché correggere l’errore localmente se basta richiedere un’altra copia?
È proprio ciò che fanno, in pratica, protocolli come il “Transmission Control Protocol” (TCP) ai livelli superiori.
Utilizzano i checksum per rilevare i dati corrotti, quindi ritrasmettono i pacchetti mancanti o danneggiati.
Ridondanza minima, ma dipende dai tempi di andata e ritorno.
Per le applicazioni in cui la ritrasmissione è costosa o impossibile, è essenziale una correzione degli errori più efficace.
Esempi: streaming video in diretta, comunicazioni satellitari, sonde spaziali, reti mobili, codici QR, CD/DVD, archiviazione SSD, memoria RAM, Wi-Fi.
In questi casi, attendere il reinvio non è pratico.
Pertanto, i sistemi utilizzano la “correzione degli errori in avanti (FEC)”: vengono inviati bit aggiuntivi in modo che il ricevitore possa correggere immediatamente gli errori.
È qui che la teoria della codifica dimostra il proprio valore. Quanto overhead? Dipende.
- parità semplice: sovraccarico minimo.
- Codici Reed-Solomon / LDPC / Turbo: moderato.
- codici a ripetizione: enorme e inefficiente.
I codici moderni sono progettati per avvicinarsi ai limiti teorici di efficienza.
Quindi, invece di triplicare i dati, potrebbero aggiungere solo il 5–20% di ridondanza, correggendo al contempo errori sostanziali. Molto diverso dalla semplice ripetizione.
Internet nel suo complesso è strutturato a livelli: il livello fisico può utilizzare la FEC; il livello di collegamento può riprovare a inviare i frame; il livello di trasporto può ritrasmettere i pacchetti.
Il livello applicativo può aggiungere la propria resilienza.
Quindi sì, la tua navigazione quotidiana su Internet dipende già costantemente dai sistemi di controllo degli errori. Semplicemente non te ne accorgi perché funzionano.
Se smettessero di funzionare, le tue videochiamate si trasformerebbero in arte astratta e i tuoi download in dati corrotti e senza senso.
Il trucco non sta nel “massimizzare sempre la correzione.». Il segreto sta nello scegliere il metodo di affidabilità più economico per il contesto.
Se il reinvio è facile, rileva l’errore e riprova. Se il reinvio è difficile, correggi sul posto. Se il guasto è catastrofico, fai entrambe le cose.
Questa è ingegneria: garantire solo la ridondanza necessaria in base alle esigenze reali.`;