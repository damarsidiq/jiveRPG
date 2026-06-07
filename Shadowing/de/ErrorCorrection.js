var shdtxt=`Zurück zu den zusätzlichen Dimensionen: Nutzen wir diese für Fehlerkorrekturcodes?
Was ist das und wie funktioniert es?
Ja. Zusätzliche Dimensionen werden mathematisch gesehen häufig in Fehlerkorrekturcodes verwendet.
Nicht etwa, weil Ihre Daten heimlich durch den Hyperraum reisen, sondern weil höherdimensionale Strukturen das Erkennen und Beheben von Fehlern erleichtern.
Hier ist die Kernidee: Angenommen, Sie möchten eine Nachricht senden, z. B. 1011.
Wenn während der Übertragung ein Bit durch Rauschen invertiert wird, erhält der Empfänger möglicherweise 1001.
Ohne Redundanz lässt sich nicht feststellen, welche Version korrekt ist.
Daher wird die ursprüngliche Nachricht in einen größeren, strukturierten Raum kodiert. Diese zusätzliche Struktur ist die „zusätzliche Dimension“.
Sie senden nicht mehr nur Rohdaten. Sie senden Daten und sorgfältig definierte Beziehungen zwischen den Bits.
Ein einfaches Beispiel: Senden Sie ein Bit dreimal, anstatt es nur einmal zu senden.
-1 wird zu 111. 0 wird zu 000. Wenn sich ein Bit ändert: 111 → 101.
Der Empfänger wählt die Mehrheit und erhält 1. Primitiv, aber effektiv.
Stellen Sie sich das nun mit komplexeren mathematischen Verfahren vor.
Moderne Fehlerkorrekturcodes behandeln Nachrichten als Punkte in hochdimensionalen Räumen. Jedes gültige Codewort ist weit von den anderen entfernt.
Abstand bedeutet hier üblicherweise die Hamming-Distanz: die Anzahl der unterschiedlichen Bits.
Wenn die Nachricht durch Rauschen gestört wird, verschiebt sie sich zu einem nahegelegenen Punkt.
Der Decoder prüft, welches gültige Codewort am nächsten liegt, und geht davon aus, dass dies beabsichtigt war. Die Geometrie spielt also eine Rolle.
Die höherdimensionale Anordnung ermöglicht eine effiziente Korrektur.
Hier kommen die „zusätzlichen Dimensionen“ ins Spiel: Sie bieten Raum, um gültige Nachrichten zu verteilen.
Stellen Sie sich das wie Städte auf einer Karte vor. Liegen Städte zu nah beieinander, kann ein Reisender nach einem kleinen Fehler in der falschen Stadt landen.
Sind sie weit voneinander entfernt, lässt sich das Ziel auch mit Umwegen noch erkennen.
Fehlerkorrektur bedeutet, die Karte so zu gestalten, dass Ziele eindeutig erkennbar sind.
Ein bekanntes Beispiel ist der Hamming-Code. Er fügt Paritätsbits an strategischen Positionen hinzu.
Diese Paritätsprüfungen erzeugen Gleichungen, die gültige Nachrichten erfüllen müssen.
Ist ein Bit falsch, zeigen die verletzten Gleichungen genau, wo der Fehler aufgetreten ist. Anstatt also zu raten, diagnostiziert das System.
Fortgeschrittenere Systeme nutzen algebraische Geometrie, Verbände und endliche Körper.
Einige stellen sogar Verbindungen zu hochdimensionalen Objekten her, wie dem „Leech-Verband“, der in der Codierungstheorie Anwendung findet.
Hier wird die dimensionale Sprache zu konkreter Mathematik.
Warum es funktioniert: Redundanz erzeugt Einschränkungen. Einschränkungen definieren die Struktur. Struktur erzeugt erkennbare Muster.
Muster ermöglichen Korrekturen.
Die „zusätzlichen Dimensionen“ sind also keine physikalischen Dimensionen. Es sind zusätzliche Koordinaten in einem abstrakten mathematischen Raum, in dem Fehler sichtbar werden.
Im gewöhnlichen Raum ist Rauschen Verwirrung. Im höherdimensionalen Coderaum wird Rauschen zu Verschiebung.
Und Verschiebung lässt sich messen.
Dies ist einer jener eleganten Fälle, in denen Geometrie ganz nebenbei den Internetverkehr der Zivilisation reduziert.`;