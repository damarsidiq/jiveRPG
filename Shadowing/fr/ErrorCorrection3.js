var shdtxt=`Attendez, pourquoi des erreurs ou des parasites surviendraient-ils, et pourquoi ces erreurs prendraient-elles la forme d’une « inversion de bits » (passage d’un état à un autre) plutôt que d’une simple absence de bits ou de zéros ?
Parce que la communication dans le monde réel est un phénomène physique, et que la physique est complexe et imparfaite. Les bits sont des concepts abstraits ; les signaux, eux, ne le sont pas.
Dans votre ordinateur, un « 1 » ou un « 0 » est, en réalité, représenté par des tensions électriques, des impulsions lumineuses, des ondes radio, des états magnétiques ou des niveaux de charge. Ces supports physiques sont vulnérables aux perturbations.
Les erreurs surviennent donc parce que le monde n’est pas un problème mathématique pur et aseptisé.
Parmi les sources de parasites (ou « bruit »), on trouve : les fluctuations thermiques dans les composants électroniques, les interférences électromagnétiques, les rayons cosmiques et l’atténuation du signal sur la distance.
On peut également citer : une synchronisation temporelle imparfaite, des défauts de fabrication, la diaphonie (interférences) entre différents canaux, ainsi que des dommages physiques ou l’usure des composants.
Tous ces facteurs peuvent altérer le signal avant qu’il n’atteigne le récepteur.
Mais alors, pourquoi parle-t-on d’« inversion de bits » plutôt que simplement de bits manquants ?
Parce que, généralement, les récepteurs échantillonnent le signal et déterminent ce qu’il représente le plus probablement.
Imaginons un seuil de tension : au-dessus de 2,5 V, on considère qu’il s’agit d’un « 1 » ; en dessous de 2,5 V, d’un « 0 ».
Si un parasite fait chuter la tension d’un signal correspondant à un « 1 », celui-ci peut être interprété comme un « 0 ». C’est ce qu’on appelle une inversion de bit.
Le signal était bien présent, mais suffisamment altéré pour franchir le seuil de décision.
Il en va de même pour les systèmes optiques ou sans fil : une impulsion peut s’affaiblir, s’estomper ou se décaler, entraînant une mauvaise interprétation.
Le récepteur ne perçoit donc pas, à proprement parler, une « absence totale » de signal. Il perçoit quelque chose d’ambigu et fait un choix.
Cette ambiguïté se traduit par un bit erroné.
Une absence peut également survenir ; toutefois, les systèmes intègrent souvent des paramètres temporels permettant d’interpréter les signaux manquants au sein de leur structure.
L’absence totale d’un signal peut être interprétée comme une erreur, une interruption ou une perte de synchronisation.
Mais nombre de défaillances courantes ne correspondent pas à une disparition, mais plutôt à une dégradation. Or, une dégradation prend souvent l’apparence de la valeur opposée.
Pensez à la lecture d’une écriture manuscrite maculée : vous ne vous retrouvez que rarement face à une page blanche ; vous voyez plutôt une trace qui ressemble à une lettre erronée.
Le principe est identique.
Dans les systèmes numériques, les erreurs sont fréquemment modélisées comme des « basculements » (inversions de bits), car il s’agit de l’abstraction la plus simple de l’incertitude physique.
À un niveau plus fondamental, la corruption peut être de nature analogique. Cependant, après une opération de seuillage, elle devient discrète.
Ainsi : bruit physique → distorsion analogique → erreur de lecture numérique → basculement de bit.
C’est pourquoi la théorie du codage évoque des bits inversés.
Il ne s’agit pas de prétendre que l’univers modifie directement les données binaires, mais de décrire comment des signaux altérés sont traduits en valeurs symboliques erronées.
Soit dit en passant, les êtres humains procèdent de la même manière.
Vous entendez une phrase dans une pièce bruyante et, en toute confiance, vous en retenez un mot erroné. Le mécanisme biologique de correction des erreurs est, lui aussi, imparfait.`;