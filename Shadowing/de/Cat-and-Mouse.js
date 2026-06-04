var shdtxt=`Die Bevölkerung der kleinen, isolierten Insel schaffte es, ihren täglichen Bedarf zu decken, indem sie ins Ausland ging, mehrere Nationen über den Ozean durchquerte und in einer anderen kleinen, isolierten Region, die allen anderen unbekannt war, einige der wertvollsten Ressourcen der Welt ausbeutete und abbaute.
Einige der anderen Nationen versammelten sich und versuchten, eine kleine Delegation auf die Insel zu schicken, doch auf halber Strecke, mitten im Ozean, stieß die Gruppe auf eine Blockade. Die Blockade besagte, dass „delegate“ seit Version 3.0 veraltet sei.
Die Vereinten Nationen beauftragten daraufhin eine kleine Einheit, die für den Abbau der wertvollen Ressourcen verantwortliche Besatzung abzufangen, doch sie kehrten mit leeren Händen zurück.
Sie berichteten, dass das Schiff der Besatzung verschlüsselt war.
Schließlich kam ein Sturm über die Inselregion.
Dadurch wurde ein Fischerboot ans Ufer gespült.
Der Sturm brach das Segel des Bootes und einige wilde Tiere beschädigten den unteren Teil des Rumpfes.
Der Fischer überlebte mit der kleinen Menge Essen, die er mitgebracht hatte.
Nachdem zwei Tage vergangen waren, aß er alles auf und machte sich auf die Suche nach einem nahegelegenen Dorf.
Er erreichte schließlich das Haus eines Bauern und erzählte ihm, was passiert war.
Er bat um Essen und der Bauer sagte ihm, er solle essen, was auf dem Tisch sei, sagte aber, er könne nicht bleiben, weil auf der Farm ein DDoS-Angriff stattgefunden habe.
Als der Bauer zurückkam, sah er, dass der Fischer alles gegessen hatte, was auf dem Tisch lag.
Der Bauer bereute, dass er ihn zum Essen eingeladen hatte, und beschloss, dem Fischer eines seiner Boote zu geben, und sagte ihm, er könne nicht über Nacht bleiben.
Es war die CORS-Richtlinie.
Katz-und-Maus-Spiel.
Während das Konzept ein Kinderspiel ist (Manifest finden, URLs extrahieren), ist die Implementierung ein reines Katz-und-Maus-Rennen zwischen YouTube und diesen Download-Diensten.
Wie YouTube versucht, Downloader zu bekämpfen.
YouTube möchte aus mehreren Gründen nicht, dass Nutzer Videos herunterladen (Urheberrecht, verlorene Werbeeinnahmen, Vertriebskontrolle).
Sie wenden aktiv mehrere Strategien an, um einfaches, konsequentes Scraping zu verhindern.
1. Verschlüsselung und Signatur-Hashing. Das ist die größte Hürde.
Die tatsächliche direkte URL für den Videostream ist oft verschleiert (versteckt) und erfordert die korrekte Generierung eines Entschlüsselungsschlüssels oder eines Signatur-Hashs, bevor das CDN die Datei bereitstellen kann.
Der JavaScript-Code, der diesen Hash generiert, wird von YouTube häufig geändert.
Die Verfolgungsjagd: Jedes Mal, wenn YouTube das JavaScript ändert, das die Signatur generiert, müssen die Download-Dienste den neuen Code schnell analysieren, den neuen Hashing-Algorithmus herausfinden und ihre eigenen Systeme aktualisieren.
Dies ist die primäre „Katz-und-Maus“-Aktivität.
2. Inkonsistente Manifestformate.
Auch wenn der Name der Manifestdatei nicht oft geändert wird, kann (und tut) YouTube die interne Struktur der Daten innerhalb des Manifests ändern (z. B. Parameternamen, Dateiformate oder Kodierungsmethoden ändern).
3. Geografische/sitzungsbasierte URLs.
Die im Manifest bereitgestellten Video-URLs sind oft zeitlich begrenzt und sitzungsgebunden.
Sie sind möglicherweise nur wenige Minuten gültig und nur von der IP-Adresse aus verwendbar, die sie angefordert hat.
Dadurch wird verhindert, dass ein Dienst einfach eine URL abgreift und sie weithin weitergibt.
Fazit zur Verfolgungsjagd: Die Herausforderung besteht nicht darin, das Manifest zu finden; Es geht darum, die URLs im Manifest zu dekodieren und korrekt zu signieren, bevor sie ablaufen.`;