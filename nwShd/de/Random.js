var shdtxt=`Beschreibung der PHP-Funktion `mt_rand`: Diese Funktion erzeugt keine kryptografisch sicheren Werte und sollte nicht für kryptografische Zwecke verwendet werden.
Wenn Sie einen kryptografisch sicheren Wert benötigen, verwenden Sie stattdessen `random_int()`, `random_bytes()` oder `openssl_random_pseudo_bytes()`.
Viele Zufallszahlengeneratoren älterer libcs ​​weisen fragwürdige oder unbekannte Eigenschaften auf und sind langsam.
Die Funktion `mt_rand()` ist ein direkter Ersatz für die ältere Funktion `rand()`. Es verwendet einen Zufallszahlengenerator mit bekannten Eigenschaften, der auf dem Mersenne-Twister basiert und viermal schneller Zufallszahlen erzeugt als die durchschnittliche `rand()`-Funktion der libc.
Aus dieser Beschreibung ergaben sich mehrere Fragen: Warum ist es nicht kryptosicher und was würde etwas anderes kryptosicher machen?
Warum ist es gut, bekannte Eigenschaften zu haben, und wie sehen diese Eigenschaften aus?
Und um kurz abzuschweifen: Ist der nächste Block in Tetris zufällig? Wie oder mit welcher Art von Zufall? Gibt es eine Parallele zu dieser PHP-Funktion?
Gut, eine sinnvolle Frage zur Zufälligkeit. Nach der Ernährung das Lieblingsthema der Menschheit, das missverstanden wird.
`Mt_rand()` in PHP verwendet den Mersenne-Twister, genauer gesagt eine Variante von MT19937. Es ist „pseudozufällig“, d. h. es erzeugt keine echte Zufälligkeit.
Es generiert Zahlen mithilfe eines deterministischen Algorithmus, ausgehend von einem Startwert. Diese Unterscheidung ist der entscheidende Punkt.
Kennt man den Algorithmus und genügend seiner Ausgaben, kann man oft seinen internen Zustand rekonstruieren und zukünftige Ausgaben vorhersagen.
Genau deshalb ist er nicht kryptografisch sicher.
Ein kryptografisch sicherer Zufallszahlengenerator (CSPRNG) ist so konzipiert, dass man selbst bei vielen Ausgaben die nächste nicht zuverlässig vorhersagen kann.
Er sollte auch Versuchen widerstehen, seinen internen Zustand zu erschließen. Das ist die Messlatte.
Daher: mt_rand() = statistisch zuverlässig, schnell, bei einem Angriff vorhersagbar.
Random_int() / random_bytes() = sicherheitsorientiert, unvorhersagbar.
Der Unterschied liegt nicht in der „Zufälligkeit“, sondern in der „Schwierigkeit des Reverse Engineering“.
Ein normaler PRNG ist wie eine komplizierte Uhr. Ein kryptografischer Pseudozufallszahlengenerator (CSPRNG) ist wie eine verschlossene Maschine mit verborgenen beweglichen Teilen, in die ständig neues externes Rauschen eingemischt wird.
Dieses „externe Rauschen“ wird Entropie genannt. Kryptografische Generatoren gewinnen Entropie oft aus Systemunterbrechungen, Hardwareereignissen, Timing-Jitter oder dedizierten Hardware-Zufallszahlengeneratoren.
Anschließend wird sie in speziellen Modi durch sichere Algorithmen wie ChaCha20 oder AES geleitet.
Nun zu den „bekannten Eigenschaften“. Dieser Ausdruck bedeutet, dass Forscher das mathematische Verhalten des Generators verstehen.
Nützliche Eigenschaften eines Pseudozufallszahlengenerators sind: Periodenlänge, Gleichmäßigkeit der Verteilung und Korrelation zwischen den Ausgaben.
Geschwindigkeit, Reproduzierbarkeit und Gleichverteilung in mehreren Dimensionen.
Der Mersenne-Twister hat beispielsweise eine enorme Periode: (2^{19937} - 1). Das bedeutet, er kann eine absurd lange Sequenz erzeugen, bevor er sich wiederholt.
Seine Ausgaben sind für Simulationen und Spiele gut verteilt. Deshalb wurde es so beliebt.
„Bekannte Eigenschaften“ bedeuten also: getestet, gemessen, mathematisch untersucht.
Doch ebendiese bekannten Eigenschaften können auch Schwächen aufdecken. Mersenne Twister eignet sich hervorragend für Simulationen, aber schlecht für Geheimnisse.
Warum? Weil ein Angreifer nach Beobachtung genügend vieler Ausgaben (624 Werte für MT19937) den gesamten internen Zustand rekonstruieren kann.
Damit sind zukünftige Zahlen praktisch offengelegt. Das ist kein Fehler. Dafür wurde es einfach nicht entwickelt.
Nun zu Ihrer Tetris-Frage. Ein ausgezeichneter Exkurs.
Modernes Tetris verwendet üblicherweise keine rein zufällige Blockauswahl. Die meisten Versionen verwenden das sogenannte „7-Beutel-System“.
Anstatt jedes Teil einzeln zu ziehen, erstellt das Spiel einen gemischten Beutel, der genau je eins der sieben Tetrominos enthält: I, O, T, S, Z, J, L.
Dann werden die Teile nacheinander ausgeteilt, bis der Beutel leer ist. Anschließend wird ein neuer Beutel gemischt.
So ist nach jeweils sieben Teilen garantiert, dass man von jedem Stein eins erhält. Das verhindert, dass man beispielsweise 50 Teile lang keinen I-Block bekommt.
Denn anscheinend fanden selbst die Tetris-Entwickler reine Zufälligkeit zu grausam.
Wie genau das Mischen funktioniert, hängt von der jeweiligen Implementierung ab. Es kann ein Zufallszahlengenerator wie Mersenne Twister oder ein anderer ressourcenschonender Generator verwendet werden.
Für ein Spiel wie Tetris ist kryptografische Sicherheit unnötig. Wichtig sind: Fairness, Unvorhersehbarkeit für die Spieler und gegebenenfalls Wiederholbarkeit. Geschwindigkeit.
Ja, konzeptionell besteht ein Zusammenhang mit mt_rand().
Ein Tetris-Spiel verwendet möglicherweise einen Standard-PRNG, um den Beutel zu mischen. Das Zufallsmodell ist jedoch – anders als die reine Zahlengenerierung – konstruktionsbedingt eingeschränkt.
Das Ergebnis fühlt sich also zufällig an, obwohl es tatsächlich strukturiert ist. Und genau so funktioniert im Grunde auch vieles im Leben.
Echte Zufälligkeit ist in Spielen oft unerwünscht, da Menschen Fairness emotional und nicht mathematisch interpretieren.
Ein vollkommen zufälliges System kann sich unfair anfühlen. Ein strukturiertes, pseudozufälliges System fühlt sich oft besser an.
Deshalb simulieren Spiele ständig Zufälligkeit. Und ehrlich gesagt, tun das auch Menschen.`;