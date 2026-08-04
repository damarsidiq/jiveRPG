var shdtxt=`Descripción de `mt_rand` de PHP: Esta función no genera valores criptográficamente seguros y no debe usarse con fines criptográficos.
Si necesita un valor criptográficamente seguro, considere usar `random_int()`, `random_bytes()` o `openssl_random_pseudo_bytes()`.
Muchos generadores de números aleatorios de versiones antiguas de libc tienen características dudosas o desconocidas y son lentos.
La función `mt_rand()` reemplaza directamente a la función `rand()` anterior. Utiliza un generador de números aleatorios con características conocidas mediante el algoritmo «Mersenne Twister», que produce números aleatorios cuatro veces más rápido que la función `rand()` de libc.
De esa descripción surgieron varias preguntas: ¿por qué no es criptográficamente seguro y qué haría que algo lo fuera?
¿Por qué es bueno tener una característica conocida y cómo es esta característica?
Y, cambiando de tema, ¿el siguiente bloque de Tetris es aleatorio? ¿Cómo o qué tipo de aleatoriedad utiliza? ¿Tiene alguna relación con esa función de PHP?
Bien, una pregunta pertinente sobre la aleatoriedad. El tema favorito de la humanidad para malinterpretar, después de la nutrición.
`Mt_rand()` en PHP utiliza el algoritmo Mersenne Twister, específicamente una variante de MT19937. Es «pseudoaleatorio», lo que significa que no crea aleatoriedad verdadera.
Genera números mediante un algoritmo determinista a partir de una semilla. Esa distinción lo explica todo.
Si se conoce el algoritmo y suficientes de sus resultados, a menudo se puede reconstruir su estado interno y predecir resultados futuros.
Precisamente por eso no es criptográficamente seguro.
Un generador de números aleatorios criptográficamente seguro (CSPRNG) está diseñado de tal manera que, incluso si se observan muchos resultados, sigue siendo imposible predecir el siguiente.
También debe resistir los intentos de inferir su estado interno. Ese es el requisito.
Por lo tanto: mt_rand() = estadísticamente aceptable, rápido, predecible en caso de ataque.
Random_int() / random_bytes() = orientado a la seguridad, impredecible.
La diferencia no radica en que sea "más aleatorio", sino en que es "más difícil de aplicar ingeniería inversa".
Un generador de números pseudoaleatorios normal es como un reloj complejo. Un generador criptográfico de números pseudoaleatorios (CSPRNG) es como una máquina cerrada con partes móviles ocultas y ruido externo constante.
Ese “ruido externo” se llama entropía. Los generadores criptográficos suelen obtener entropía de elementos como interrupciones del sistema, eventos de hardware, fluctuaciones de tiempo o generadores de números aleatorios (RNG) de hardware dedicados.
Luego, lo procesan mediante algoritmos seguros como ChaCha20 o AES en modos especiales.
Ahora bien, hablemos de las “características conocidas”. Esta frase significa que los investigadores comprenden el comportamiento matemático del generador.
Para un generador de números pseudoaleatorios (PRNG), las características útiles incluyen: duración del período, uniformidad de la distribución y correlación entre las salidas.
Velocidad, reproducibilidad y equidistribución en múltiples dimensiones.
Por ejemplo, Mersenne Twister tiene un período enorme: (2^{19937} - 1). Esto significa que puede producir una secuencia absurdamente larga antes de repetirse.
Sus salidas están bien distribuidas para simulaciones y juegos. Por eso se hizo popular.
Así pues, «características conocidas» significa: probadas, medidas, estudiadas matemáticamente.
Pero esas mismas propiedades conocidas también pueden revelar debilidades. Mersenne Twister es excelente para simulaciones, pero terrible para secretos.
¿Por qué? Porque tras observar suficientes resultados (624 valores para MT19937), un atacante puede reconstruir el estado interno completo.
En ese punto, los números futuros quedan básicamente expuestos. Eso no es un error. Simplemente no fue diseñado para eso.
Ahora tu pregunta sobre Tetris. Excelente digresión.
El Tetris moderno «no» suele utilizar la selección aleatoria pura de bloques. La mayoría de las versiones utilizan el sistema de "7 bolsas".
En lugar de elegir cada pieza individualmente, el juego crea una bolsa mezclada que contiene exactamente una de cada una de las siete fichas: I, O, T, S, Z, J, L.
Luego las reparte una a una hasta que la bolsa se vacía, y después mezcla otra bolsa.
Así, cada 7 piezas, tienes garantizada una de cada. Esto evita rachas desastrosas, como pasar 50 piezas sin un bloque I.
Porque, al parecer, incluso los desarrolladores de Tetris decidieron que la aleatoriedad pura era demasiado cruel.
¿Cómo se realiza la mezcla? Depende de la implementación. Puede usar un generador de números pseudoaleatorios como Mersenne Twister u otro generador ligero.
Para un juego como Tetris, la seguridad criptográfica es innecesaria. Lo que importa es: equidad, imprevisibilidad para los jugadores y repetibilidad si es necesario. velocidad.
Así que sí, conceptualmente está relacionado con mt_rand().
Un juego de Tetris podría usar un generador de números pseudoaleatorios estándar para barajar la bolsa. Pero el modelo de aleatoriedad está limitado por el diseño, a diferencia de la generación de números puros.
Por lo tanto, el resultado "parece" aleatorio, aunque en realidad está estructurado. Que, por cierto, es como funciona gran parte de la vida.
La verdadera aleatoriedad suele ser indeseable en los juegos porque los humanos interpretan la equidad emocionalmente, no matemáticamente.
Un sistema completamente aleatorio puede parecer injusto. Un sistema pseudoaleatorio estructurado suele ser más efectivo.
Por eso los juegos simulan aleatoriedad constantemente. Y, sinceramente, la gente también lo hace.`;