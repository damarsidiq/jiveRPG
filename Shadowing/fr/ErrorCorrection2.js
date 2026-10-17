var shdtxt=`Mais les données se retrouvent considérablement alourdies ; utilise-t-on systématiquement des codes de correction d'erreurs dans l'usage quotidien d'Internet, ou est-ce réservé à des applications spécifiques ?
Oui, la redondance alourdit les données. C'est le compromis à accepter.
La fiabilité a un coût : elle consomme de la bande passante, de l'espace de stockage, du temps de latence ou de la puissance de calcul. La civilisation, au fond, n'est qu'une longue négociation autour de ces surcoûts opérationnels.
Mais non, nous n'utilisons pas partout un niveau aussi élevé de correction d'erreurs.
Selon le coût qu'entraîneraient des erreurs, les différents systèmes adoptent des équilibres variés.
Dans l'usage quotidien d'Internet, la correction d'erreurs est bel et bien présente, mais elle est souvent structurée en couches et optimisée.
Toutes les applications n'utilisent pas en permanence des mécanismes robustes de correction directe d'erreurs (FEC). Certaines privilégient plutôt la « détection suivie d'une retransmission ».
Cela signifie : détecter une erreur, puis demander à nouveau les données. C'est une approche courante dans les communications bidirectionnelles fiables, comme la navigation sur le Web.
Pourquoi corriger l'erreur localement si l'on peut simplement demander une nouvelle copie des données ?
C'est précisément ce que font des protocoles comme le TCP (*Transmission Control Protocol*) au niveau des couches supérieures.
Ils utilisent des sommes de contrôle (*checksums*) pour détecter toute corruption, puis demandent la retransmission des paquets manquants ou altérés.
La redondance est minimale, mais le processus repose sur des allers-retours de données.
Pour les applications où la retransmission est coûteuse, voire impossible, une correction d'erreurs plus robuste est indispensable.
Exemples : diffusion vidéo en direct, communications par satellite, sondes spatiales lointaines, réseaux mobiles, codes QR, CD/DVD, stockage SSD, mémoire vive (RAM), Wi-Fi.
Dans ces situations, attendre une retransmission n'est pas envisageable.
Les systèmes ont alors recours à la « correction directe d'erreurs » (*Forward Error Correction* ou FEC) : des bits supplémentaires sont transmis, permettant au récepteur de corriger les erreurs instantanément.
C'est là que la théorie du codage prend tout son sens. Mais quel est le surcoût engendré ? Ça dépend.
- Parité simple : surcoût minime.
- Codes de Reed-Solomon / LDPC / Turbo-codes : surcoût modéré.
- Codes par répétition : surcoût énorme et inefficace.
Les codes modernes sont conçus pour se rapprocher des limites théoriques d'efficacité.
Ainsi, au lieu de tripler les données, ils n'ajoutent que 5 à 20 % de redondance, tout en permettant de corriger des erreurs importantes. C'est très différent d'une simple répétition.
Internet, dans son ensemble, est structuré en couches : la couche physique peut utiliser la correction d'erreurs (FEC), la couche liaison peut demander le renvoi de trames, et la couche transport peut retransmettre des paquets.
La couche application peut, elle aussi, ajouter sa propre forme de résilience.
Donc oui, votre utilisation quotidienne d'Internet repose en permanence sur des systèmes de contrôle d'erreurs. Vous ne vous en rendez tout simplement pas compte, car ils fonctionnent.
S'ils cessaient de fonctionner, vos appels vidéo se transformeraient en art abstrait et vos téléchargements en données corrompues et inexploitables.
L'astuce ne consiste pas à toujours viser une correction maximale, mais à choisir la méthode de fiabilisation la plus économique adaptée au contexte.
Si une retransmission est facile, on détecte l'erreur et on demande un nouvel envoi. Si elle est difficile, on corrige l'erreur directement sur place. Si une défaillance est catastrophique, on combine les deux approches.
C'est là toute l'essence de l'ingénierie : n'ajouter que la quantité de redondance strictement nécessaire à la réalité de la situation.`;