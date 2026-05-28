var shdtxt=`Un momento, ¿por qué habría errores o ruido en primer lugar, y por qué esos errores alterarían los bits en lugar de simplemente provocar la ausencia de bits o ceros?
Porque la comunicación en el mundo real es física, y la física es compleja. Los bits son abstractos. Las señales no lo son.
Un «1» o un «0» en tu ordenador se representa, en última instancia, mediante voltajes, pulsos de luz, ondas de radio, estados magnéticos o niveles de carga. Estos portadores físicos son vulnerables a las perturbaciones.
Por lo tanto, los errores ocurren porque el mundo no es un problema matemático estéril.
Las fuentes de ruido incluyen: fluctuaciones térmicas en la electrónica, interferencia electromagnética, rayos cósmicos y atenuación de la señal con la distancia.
Sincronización temporal imperfecta, defectos de fabricación y diafonía entre canales. Daños físicos o envejecimiento.
Todos estos factores pueden alterar la señal antes de que llegue al receptor.
Ahora bien, ¿por qué se habla de "bits invertidos" en lugar de simplemente bits faltantes?
Porque los receptores suelen muestrear una señal y determinar qué representa con mayor probabilidad.
Imaginemos un umbral de voltaje: por encima de 2,5 V = `1`; por debajo de 2,5 V = `0`.
Si el ruido desplaza una señal `1` hacia abajo, puede interpretarse como `0`. Esto es una inversión de bit.
La señal estaba presente, pero distorsionada lo suficiente como para cruzar el límite de decisión.
Lo mismo ocurre con los sistemas ópticos o inalámbricos: un pulso puede debilitarse, desenfocarse o desplazarse, provocando una clasificación errónea.
Por lo tanto, el receptor no ve literalmente "nada". Ve algo ambiguo y elige.
Esa ambigüedad se convierte en un bit erróneo.
También puede haber ausencia, pero los sistemas suelen codificar la temporización para que las señales faltantes se interpreten dentro de la estructura.
Una señal totalmente ausente podría tratarse como un error, una interrupción o una pérdida de sincronización.
Pero muchas fallas comunes no son desapariciones, sino degradaciones. Y la degradación a menudo se manifiesta como el valor opuesto.
Piensa en leer una escritura borrosa. Rara vez ves una página en blanco. Ves una marca que se asemeja a una letra incorrecta.
El mismo principio.
En los sistemas digitales, los errores a menudo se modelan como cambios de estado porque es la abstracción más simple de la incertidumbre física.
En niveles más profundos, la corrupción puede ser analógica. Pero tras aplicar un umbral, se vuelve discreto.
Entonces: Ruido físico → distorsión analógica → lectura digital errónea → inversión de bits.
Por eso la teoría de la codificación habla de bits invertidos.
No afirma que el universo edite el binario directamente. Describe cómo las señales desordenadas se traducen en valores simbólicos erróneos.
Los humanos también hacemos esto, por cierto.
Escuchas una frase en una habitación ruidosa y recuerdas con seguridad la palabra equivocada. La corrección biológica de errores también es imperfecta.`;