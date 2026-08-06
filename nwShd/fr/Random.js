var shdtxt=`Description de la fonction `mt_rand` de PHP : Cette fonction ne génère pas de valeurs cryptographiquement sécurisées et ne doit pas être utilisée à des fins cryptographiques.
Si vous avez besoin d'une valeur cryptographiquement sécurisée, envisagez d'utiliser plutôt `random_int()`, `random_bytes()` ou `openssl_random_pseudo_bytes()`.
De nombreux générateurs de nombres aléatoires des anciennes bibliothèques libcs ​​présentent des caractéristiques douteuses ou inconnues et sont lents.
La fonction `mt_rand()` remplace directement l'ancienne fonction `rand()`. Il utilise un générateur de nombres aléatoires aux caractéristiques connues, basé sur le « Mersenne Twister », qui produit des nombres aléatoires quatre fois plus rapidement que la fonction `rand()` de la libc.
Cette description soulève plusieurs questions : pourquoi n'est-il pas crypto-sécurisé et qu'est-ce qui rendrait un autre générateur crypto-sécurisé ?
Pourquoi est-il important d'avoir une caractéristique connue et à quoi ressemble-t-elle ?
Par ailleurs, le prochain bloc de Tetris est-il aléatoire ? Comment et avec quel type d'aléatoire ? Est-ce lié à cette fonction PHP ?
Voilà une bonne question sur l'aléatoire. Après la nutrition, c'est souvent le sujet de confusion le plus fréquent chez l'humanité.
La fonction `mt_rand()` en PHP utilise le Mersenne Twister, plus précisément une variante MT19937. Elle est « pseudo-aléatoire », c'est-à-dire qu'elle ne génère pas un véritable aléatorisme.
Elle génère des nombres grâce à un algorithme déterministe à partir d'une graine. Cette distinction est essentielle.
Si vous connaissez l'algorithme et suffisamment de ses résultats, vous pouvez souvent reconstituer son état interne et prédire les résultats futurs.
C'est précisément pourquoi il n'est pas cryptographiquement sûr.
Un générateur de nombres aléatoires cryptographiquement sûr (CSPRNG) est conçu de telle sorte que, même si vous observez de nombreux résultats, il vous est impossible de prédire le suivant.
Il doit également résister aux tentatives de déduction de son état interne. C'est le critère d'exigence.
Donc : mt_rand() = statistiquement correct, rapide, prévisible en cas d'attaque.
Random_int() / random_bytes() = axé sur la sécurité, imprévisible.
La différence ne réside pas dans le fait qu'il est « plus aléatoire », mais « plus difficile à rétroconcevoir ».
Un générateur de nombres pseudo-aléatoires (PRNG) classique est comparable à une horloge complexe. Un générateur de nombres pseudo-aléatoires cryptographiques (CSPRNG) est comparable à une machine verrouillée dont les pièces mobiles sont cachées et constamment perturbées par des perturbations extérieures.
Ces perturbations extérieures sont appelées entropie. Les générateurs cryptographiques puisent souvent leur entropie dans des éléments tels que les interruptions système, les événements matériels, la gigue temporelle ou les générateurs de nombres aléatoires matériels dédiés.
Ils traitent ensuite ces données à l'aide d'algorithmes sécurisés comme ChaCha20 ou AES dans des modes spécifiques.
Concernant les « caractéristiques connues », cela signifie que les chercheurs comprennent le comportement mathématique du générateur.
Pour un générateur de nombres pseudo-aléatoires (PRNG), les caractéristiques utiles incluent : la période, l'uniformité de la distribution et la corrélation entre les sorties.
La vitesse, la reproductibilité et l'équidistribution dans plusieurs dimensions sont également des caractéristiques importantes.
Par exemple, le générateur Mersenne Twister possède une période extrêmement longue : (2^{19937} - 1). Cela signifie qu'il peut produire une séquence incroyablement longue avant de se répéter.
Ses sorties sont bien distribuées pour les simulations et les jeux. C’est pourquoi il est devenu populaire.
Donc, « caractéristiques connues » signifie : testé, mesuré, étudié mathématiquement.
Mais ces mêmes propriétés connues peuvent aussi révéler des faiblesses. Mersenne Twister est excellent pour la simulation, mais terrible pour la protection des secrets.
Pourquoi ? Parce qu’après avoir observé suffisamment de résultats (624 valeurs pour MT19937), un attaquant peut reconstituer l’état interne complet.
À ce stade, les nombres futurs sont de fait exposés. Ce n’est pas un bug. C’est simplement que ce n’est pas pour cela qu’il a été conçu.
Maintenant, votre question sur Tetris. Excellent détour.
Le Tetris moderne n’utilise généralement pas de sélection de blocs purement aléatoire. La plupart des versions utilisent un système appelé « 7-bags ».
Au lieu de piocher chaque pièce individuellement, le jeu crée un sac mélangé contenant exactement un exemplaire de chaque tétromino : I, O, T, S, Z, J, L.
Les pièces sont ensuite distribuées une par une jusqu'à ce que le sac soit vide, puis un autre sac est mélangé.
Ainsi, sur 7 pièces, vous êtes assuré d'en obtenir une de chaque. Cela évite les situations cauchemardesques, comme celle de ne pas trouver de bloc I après 50 pièces.
Apparemment, même les développeurs de Tetris ont jugé que le pur hasard était trop cruel.
Comment le mélange est-il effectué ? Cela dépend de l'implémentation. Le jeu peut utiliser un générateur de nombres pseudo-aléatoires (PRNG) comme Mersenne Twister, ou un autre générateur léger.
Pour un jeu comme Tetris, la sécurité cryptographique est inutile. Ce qui compte, c'est l'équité, l'imprévisibilité pour les joueurs et la possibilité de rejouer si nécessaire. Vitesse.
Donc oui, conceptuellement, c'est lié à mt_rand().
Un jeu Tetris peut utiliser un générateur de nombres pseudo-aléatoires standard pour mélanger le sac. Mais le modèle d'aléatoire est contraint par construction, contrairement à la génération de nombres bruts.
Le résultat « semble » aléatoire tout en étant structuré. Ce qui, soit dit en passant, est le principe de fonctionnement d'une grande partie de la vie.
Un véritable aléatorisme est souvent indésirable dans les jeux car les humains interprètent l'équité de manière émotionnelle, et non mathématique.
Un système parfaitement aléatoire peut paraître injuste. Un système pseudo-aléatoire structuré est souvent plus agréable.
C’est pourquoi les jeux vidéo simulent constamment l’aléatoire. Et, honnêtement, les gens aussi.`;