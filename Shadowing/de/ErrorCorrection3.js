var shdtxt=`Moment mal, warum sollte es überhaupt Fehler oder Störungen geben, und warum sollten diese Fehler Bits verändern, anstatt einfach nur fehlende Bits oder Nullen zu verursachen?
Weil die Kommunikation in der realen Welt physikalisch ist und die Physik komplex ist. Bits sind abstrakt. Signale sind es nicht.
Eine „1“ oder „0“ in Ihrem Computer wird letztendlich durch Spannungen, Lichtimpulse, Radiowellen, magnetische Zustände oder Ladungspegel dargestellt. Diese physikalischen Träger sind anfällig für Störungen.
Fehler treten also auf, weil die Welt kein steriles mathematisches Problem ist.
Zu den Störquellen gehören: thermische Schwankungen in Elektronik, elektromagnetische Störungen, kosmische Strahlung und Signaldämpfung über die Entfernung.
Unvollständige Zeitsynchronisation, Herstellungsfehler und Übersprechen zwischen Kanälen. Physische Beschädigung oder Alterung.
All dies kann das Signal verändern, bevor es den Empfänger erreicht.
Warum spricht man von „umgekippten Bits“ und nicht einfach von fehlenden Bits?
Weil Empfänger üblicherweise ein Signal abtasten und entscheiden, was es höchstwahrscheinlich darstellt.
Stellen Sie sich eine Spannungsschwelle vor: über 2,5 V = 1, unter 2,5 V = 0.
Wenn Rauschen ein 1-Signal nach unten verschiebt, kann es als 0 interpretiert werden. Das ist ein Bit-Flip.
Das Signal war vorhanden, aber so stark verzerrt, dass es die Entscheidungsgrenze überschritten hat.
Dasselbe gilt für optische oder drahtlose Systeme: Ein Impuls kann schwächer werden, undeutlich werden oder sich verschieben, was zu einer Fehlklassifizierung führt.
Der Empfänger sieht also nicht buchstäblich „nichts“. Es erkennt etwas Mehrdeutiges und trifft eine Entscheidung.
Diese Mehrdeutigkeit wird zu einem falschen Bit.
Auch das Fehlen eines Signals kann vorkommen, aber Systeme kodieren das Timing oft so, dass fehlende Signale innerhalb der Struktur interpretiert werden.
Ein vollständig fehlendes Signal kann als Fehler, Ausfall oder Synchronisationsverlust behandelt werden.
Viele häufige Fehler sind jedoch kein vollständiges Verschwinden, sondern eine Verschlechterung. Und eine Verschlechterung sieht oft wie der entgegengesetzte Wert aus.
Stellen Sie sich vor, Sie lesen eine verschmierte Handschrift. Sie sehen selten eine leere Seite. Sie sehen einen Strich, der einem falschen Buchstaben ähnelt.
Dasselbe Prinzip.
In digitalen Systemen werden Fehler oft als Flips modelliert, da dies die einfachste Abstraktion physikalischer Unsicherheit darstellt.
Auf tieferen Ebenen kann die Störung analog sein. Nach der Schwellenwertbildung wird das Signal diskret.
Also: Physikalisches Rauschen → analoge Verzerrung → digitale Fehlinterpretation → Bit-Flip.
Deshalb spricht die Codierungstheorie von gekippten Bits.
Sie behauptet nicht, dass das Universum Binärdaten direkt manipuliert. Sie beschreibt, wie fehlerhafte Signale in falsche symbolische Werte übersetzt werden.
Auch Menschen tun dies übrigens.
Man hört einen Satz in einem lauten Raum und erinnert sich felsenfest an das falsche Wort. Auch die biologische Fehlerkorrektur ist unvollkommen.`;