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