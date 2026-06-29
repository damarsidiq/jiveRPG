var shdtxt=`Pero los datos se multiplican, ¿usamos siempre códigos de corrección de errores para el uso diario de internet o solo para aplicaciones específicas?
Sí, la redundancia aumenta el volumen de datos. Es la contrapartida.
La fiabilidad implica un coste en ancho de banda, almacenamiento, latencia o capacidad de procesamiento. La civilización es, básicamente, una negociación constante con costes adicionales.
Pero no, no usamos el mismo nivel de corrección de errores en todas partes.
Los distintos sistemas eligen diferentes equilibrios según el coste de los errores.
Para el uso diario de internet, la corrección de errores está presente, pero suele estar implementada en capas y optimizada.
No todas las aplicaciones utilizan una corrección de errores directa robusta en todo momento. Algunas se basan más en la detección y retransmisión.
Esto significa: detectar un error y solicitar los datos de nuevo. Esto es común en la comunicación bidireccional confiable, como la navegación web.
¿Por qué corregirlo localmente si se puede solicitar otra copia?
Eso es lo que hacen protocolos como el Protocolo de Control de Transmisión (TCP) en capas superiores.
Utilizan sumas de verificación para detectar errores y luego retransmiten los paquetes faltantes o dañados.
Redundancia mínima, pero depende de los viajes de ida y vuelta.
Para aplicaciones donde la retransmisión es costosa o imposible, una corrección de errores más robusta es esencial.
Ejemplos: transmisión de video en vivo, comunicación satelital, sondas espaciales, redes móviles, códigos QR, CD/DVD, almacenamiento SSD, memoria RAM, Wi-Fi.
En esos casos, esperar a que se reenvíe el paquete es poco práctico.
Por lo tanto, los sistemas utilizan la corrección de errores hacia adelante (FEC): se envían bits adicionales para que el receptor pueda corregir los errores de inmediato.
Ahí es donde la teoría de la codificación demuestra su valía. ¿Cuánta sobrecarga? Depende.
- Paridad simple: sobrecarga mínima.
- Códigos Reed-Solomon / LDPC / Turbo: sobrecarga moderada.
- Códigos de repetición: enorme e ineficiente.
Los códigos modernos están diseñados para aproximarse a los límites teóricos de eficiencia.
Por lo tanto, en lugar de triplicar los datos, podrían añadir solo un 5-20 % de redundancia al tiempo que corrigen errores sustanciales. Muy diferente de la repetición ingenua.
Internet en su conjunto está estructurado en capas: la capa física puede usar FEC; la capa de enlace puede reintentar tramas; la capa de transporte puede retransmitir paquetes.
La capa de aplicación puede añadir su propia resiliencia.
Así que sí, tu conexión diaria a Internet ya depende constantemente de sistemas de control de errores. Simplemente no te das cuenta porque están funcionando.
Si dejaran de funcionar, tus videollamadas se convertirían en arte abstracto y tus descargas en un sinsentido corrupto.
El truco no es "corrección máxima siempre". El truco es elegir el método de confiabilidad más económico para cada contexto.
Si reenviar es fácil, detecta y vuelve a intentarlo. Si reenviar es difícil, corrige en el lugar. Si el fallo es catastrófico, haz ambas cosas.
Eso es ingeniería: pagar solo por la redundancia que la realidad exige.`;

var esSND=['errorc2ES.mp3',[0.000000,7.264664],[7.680000,14.690765],[14.983375,29.596780],[29.973471,36.108072],[36.108072,42.242677],[42.552101,50.637400],[50.933368,61.399866],[61.615115,73.023328],[73.023328,77.974063],[77.974063,85.776850],[86.193893,93.741075],[93.996676,99.283744],[99.620072,107.463218],[107.880258,124.145040],[124.535189,130.172020],[130.454553,141.472609],[141.472609,149.759707],[150.001846,153.795632],[153.795632,161.060296],[161.463874,166.172467],[166.387700,172.791384],[173.033533,186.728776],[186.728776,199.643735],[199.643735,204.379220],[204.755925,215.572184],[215.572184,224.289781],[224.612665,234.352686],[234.594825,247.052396],[247.321457,253.294626]];
storyline.snd.es = {};storyline.snd.es.p = storyline.sndURL+esSND[0];esSND.splice(0,1);storyline.snd.es.t = esSND;