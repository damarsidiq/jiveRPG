var shdtxt=`Aspetta, perché mai dovrebbero esserci errori o rumori, innanzitutto, e perché questi errori dovrebbero causare l’inversione dei bit invece della semplice assenza di bit o di zeri?
Perché la comunicazione nel mondo reale è fisica, e la fisica è caotica. I bit sono astratti. I segnali no.
Un `1` o uno `0` nel tuo computer è in definitiva rappresentato da tensioni, impulsi luminosi, onde radio, stati magnetici o livelli di carica. Questi vettori fisici sono vulnerabili alle interferenze.
Quindi gli errori si verificano perché il mondo non è un asettico problema matematico.
Le fonti di rumore includono: fluttuazioni termiche nei componenti elettronici, interferenze elettromagnetiche, raggi cosmici, attenuazione del segnale con la distanza.
Sincronizzazione temporale imperfetta, difetti di fabbricazione, diafonia tra i canali, danni fisici o invecchiamento.
Tutti questi fattori possono alterare il segnale prima che raggiunga il ricevitore.
Ora, perché si parla di «bit invertiti» invece che semplicemente di bit mancanti?
Perché i ricevitori solitamente campionano un segnale e decidono cosa esso rappresenti con maggiore probabilità.
Immaginate una soglia di tensione: sopra 2,5 V = `1`; sotto 2,5 V = `0`.
Se il rumore sposta leggermente verso il basso un segnale `1`, questo potrebbe essere interpretato come `0`. Si tratta di un bit invertito.
Il segnale era presente, ma sufficientemente distorto da superare il limite di decisione.
Lo stesso vale per i sistemi ottici o wireless: un impulso può indebolirsi, sfocarsi o spostarsi, causando un errore di classificazione.
Quindi il ricevitore non vede letteralmente «nulla». Vede qualcosa di ambiguo e sceglie.
Quell’ambiguità si traduce in un bit errato.
Può verificarsi anche l’assenza, ma spesso i sistemi codificano la temporizzazione in modo che i segnali mancanti vengano interpretati all’interno della struttura.
Un segnale completamente assente potrebbe essere trattato come un errore, un’interruzione o una perdita di sincronizzazione.
Ma molti guasti comuni non sono scomparse, bensì degradazioni. E la degradazione spesso appare come il valore opposto.
Pensate alla lettura di una scrittura sbavata. Raramente si vede una pagina bianca. Si vede un segno che assomiglia alla lettera sbagliata.
Stesso principio.
Nei sistemi digitali, gli errori sono spesso modellati come inversioni di bit perché questa è l’astrazione più semplice dell’incertezza fisica.
A livelli più profondi, la corruzione può essere analogica. Ma dopo la soglia, diventa discreta.
Quindi: rumore fisico → distorsione analogica → lettura errata digitale → inversione di bit.
Ecco perché la teoria della codifica parla di bit invertiti.
Non si sta affermando che l’universo modifichi direttamente il codice binario. Si sta descrivendo come i segnali confusi vengano tradotti in valori simbolici errati.
Anche gli esseri umani lo fanno, tra l’altro.
Si sente una frase in una stanza rumorosa e si ricorda con sicurezza la parola sbagliata. Anche la correzione biologica degli errori è imperfetta.`;