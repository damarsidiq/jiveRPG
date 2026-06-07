var shdtxt=`Aber die Daten werden dadurch mehrfach aufgebläht. Verwenden wir Fehlerkorrekturcodes immer im alltäglichen Internet oder nur für bestimmte Anwendungen?
Ja, Redundanz bläht die Daten auf. Das ist der Kompromiss.
Zuverlässigkeit kostet Bandbreite, Speicherplatz, Latenz oder Rechenleistung. Zivilisation ist im Grunde eine einzige, mit Overhead verbundene Verhandlung.
Aber nein, wir verwenden nicht überall die gleiche hohe Fehlerkorrektur.
Verschiedene Systeme wählen unterschiedliche Gewichtungen, je nachdem, wie kostspielig Fehler sind.
Im alltäglichen Internetgebrauch ist Fehlerkorrektur unerlässlich, aber oft mehrschichtig und optimiert.
Nicht jede Anwendung verwendet ständig eine starke Vorwärtsfehlerkorrektur. Manche setzen eher auf „Erkennung + erneute Übertragung“.
Das bedeutet: Fehler erkennen. Daten erneut anfordern. Dies ist typisch für zuverlässige Zwei-Wege-Kommunikation, wie z. B. beim Surfen im Internet.
Warum sollte man den Fehler lokal korrigieren, wenn man einfach eine weitere Kopie anfordern kann?
Genau das leisten Protokolle wie das Transmission Control Protocol (TCP) auf höheren Schichten.
Sie verwenden Prüfsummen, um Fehler zu erkennen und senden fehlende oder beschädigte Pakete erneut.
Minimale Redundanz, aber abhängig von Roundtrips.
Für Anwendungen, bei denen eine erneute Übertragung aufwändig oder unmöglich ist, ist eine stärkere Fehlerkorrektur unerlässlich.
Beispiele: Live-Video-Streaming, Satellitenkommunikation, Weltraumsonden, Mobilfunknetze, QR-Codes, CDs/DVDs, SSD-Speicher, Arbeitsspeicher (RAM), WLAN.
In diesen Fällen ist das Warten auf eine erneute Übertragung unpraktisch.
Daher verwenden Systeme die Vorwärtsfehlerkorrektur (FEC): Es werden zusätzliche Bits gesendet, damit der Empfänger Fehler sofort beheben kann.
Hier kommt die Codierungstheorie ins Spiel. Wie hoch ist der Overhead? Das hängt davon ab.
- Einfache Parität: Geringer Overhead.
- Reed-Solomon-/LDPC-/Turbo-Codes: Mittlerer Overhead.
- Wiederholungscodes: Hoher und ineffizienter Overhead.
Moderne Codes sind so konzipiert, dass sie sich den theoretischen Effizienzgrenzen annähern.
Anstatt Daten zu verdreifachen, fügen sie daher möglicherweise nur 5–20 % Redundanz hinzu und korrigieren gleichzeitig erhebliche Fehler. Das ist etwas ganz anderes als einfache Wiederholung.
Das Internet als Ganzes ist geschichtet: Die Bitübertragungsschicht kann FEC verwenden. Die Sicherungsschicht kann Frames erneut senden. Die Transportschicht kann Pakete erneut übertragen.
Die Anwendungsschicht kann eigene Ausfallsicherheit hinzufügen.
Ihr tägliches Internet ist also bereits ständig von Fehlerkontrollsystemen abhängig. Man merkt es nur nicht, weil sie funktionieren.
Würden sie ausfallen, würden Ihre Videoanrufe zu abstrakten Kunstwerken und Ihre Downloads zu fehlerhaftem Datenmüll.
Der Trick besteht nicht darin, „immer maximale Korrektur“ zu erreichen. Der Trick besteht darin, die kostengünstigste Methode zur Gewährleistung der Zuverlässigkeit für den jeweiligen Kontext zu wählen.
Wenn das erneute Senden einfach ist, erkennen Sie den Fehler und versuchen Sie es erneut. Wenn das erneute Senden schwierig ist, korrigieren Sie den Fehler direkt. Wenn ein Fehler katastrophal ist, führen Sie beides durch.
Das ist Ingenieurwesen: nur so viel Redundanz einzubauen, wie die Realität erfordert.`;