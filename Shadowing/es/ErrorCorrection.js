var shdtxt=`Volviendo a las dimensiones adicionales, ¿las usamos para los códigos de corrección de errores?
¿Qué son y cómo funcionan?
Sí. Las dimensiones adicionales, en un sentido matemático, se utilizan mucho en los códigos de corrección de errores.
No porque tus datos viajen secretamente por el hiperespacio, lamentablemente, sino porque una estructura de mayor dimensión facilita la detección y corrección de errores.
Esta es la idea principal. Supongamos que quieres enviar un mensaje, como 1011.
Si el ruido cambia un poco durante la transmisión, el receptor podría recibir 1001.
Sin redundancia, no hay forma de saber qué versión es la correcta.
Entonces, codificas el mensaje original en un espacio estructurado más grande. Esa estructura añadida es la "dimensión adicional".
Ya no solo envías datos sin procesar. Estás enviando datos junto con relaciones cuidadosamente diseñadas entre bits.
Un ejemplo sencillo: en lugar de enviar un bit, envíalo tres veces.
-1 se convierte en 111. 0 se convierte en 000. Si un bit cambia de valor: 111 → 101.
El receptor toma la decisión por mayoría y recupera 1. Primitivo, pero efectivo.
Ahora, amplía esto con matemáticas sofisticadas.
Los códigos modernos de corrección de errores tratan los mensajes como puntos en espacios de alta dimensión. Cada palabra clave válida se posiciona lejos de las demás.
La distancia aquí generalmente se refiere a la "distancia de Hamming": cuántos bits difieren.
Si el ruido perturba el mensaje, este se mueve a un punto cercano.
El decodificador verifica qué palabra clave válida está más cerca y asume que esa era la intención. Por lo tanto, la geometría importa.
La disposición de dimensiones superiores permite una corrección eficiente.
Ahí es donde las "dimensiones adicionales" resultan útiles: proporcionan espacio para distribuir los mensajes válidos.
Imagínelo como ciudades en un mapa. Si las ciudades están demasiado cerca, un viajero puede terminar en la equivocada tras un pequeño error.
Si están muy separadas, incluso con desvíos, aún se puede determinar el destino previsto.
La corrección de errores consiste en diseñar el mapa de manera que los destinos sean inconfundibles.
Un ejemplo famoso es el "código Hamming". Este añade bits de paridad en posiciones estratégicas.
Estas comprobaciones de paridad crean ecuaciones que los mensajes válidos deben satisfacer.
Si un bit es incorrecto, las ecuaciones violadas revelan con precisión dónde se produjo el error. Así que, en lugar de adivinar, el sistema diagnostica.
Los sistemas más avanzados utilizan geometría algebraica, retículos y campos finitos.
Algunos incluso se conectan a objetos de muy alta dimensión, como el «retículo Leech», que tiene aplicaciones en la teoría de la codificación.
Ahí es donde el lenguaje dimensional se convierte en matemáticas literales.
Por qué funciona: la redundancia añade restricciones; las restricciones definen la estructura; la estructura crea patrones detectables.
Los patrones permiten la corrección.
Por lo tanto, las «dimensiones extra» no son dimensiones físicas. Son coordenadas adicionales en un espacio matemático abstracto donde los errores se hacen visibles.
En el espacio ordinario, el ruido es confusión. En el espacio de código de dimensiones superiores, el ruido se convierte en desplazamiento.
Y el desplazamiento se puede medir.
Este es uno de esos casos elegantes en los que la geometría ahorra silenciosamente tráfico de internet a la civilización.`;

var esSND=['errorcES.mp3',[0.000000,5.105707],[5.399139,7.981336],[8.332307,18.251437],[18.647583,30.076707],[30.076707,37.324482],[37.661946,44.190778],[44.190778,49.413858],[49.413858,59.918705],[59.918705,69.425884],[69.822026,75.705317],[76.086762,87.794694],[88.278869,95.247853],[95.585238,100.470933],[100.749686,112.442937],[112.853757,119.426605],[119.705351,125.177862],[125.441944,135.917454],[136.445627,141.727397],[141.727397,150.706399],[150.706399,161.563363],[161.856795,169.192581],[169.662072,176.293623],[176.572393,184.568390],[184.905804,191.317314],[191.757456,203.465376],[203.861513,210.566418],[210.566418,221.071264],[221.423379,227.115952],[227.512080,237.209994],[237.459398,240.555113],[241.053929,253.583470],[253.818215,264.968611],[264.968611,268.489788],[268.988618,277.057987]];
storyline.snd.es = {};storyline.snd.es.p = storyline.sndURL+esSND[0];esSND.splice(0,1);storyline.snd.es.t = esSND;