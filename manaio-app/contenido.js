/* Manaio · contenido de la biblioteca (fuente: "Manaio — Biblioteca de contenidos").
   Guiones: [pausa] = 4 s, [pausa larga] = 9 s. */
window.CONTENIDO = {
  categorias: [
    {
      id: "ansiedad", nombre: "Ansiedad", animo: "Ansioso/a", tecnica: "cuadrada", color: "#E3ECF6", circulo: "#C9DAEE",
      bajada: "Para cuando la cabeza no para, el pecho aprieta o todo parece urgente.",
      textos: [
        { titulo: `La cabeza corre más rápido que la realidad`, cuerpo: `La ansiedad tiene un truco: te muestra el peor final de la película antes de que empiece. Y tu cuerpo reacciona como si ya estuviera pasando. Pero lo que imaginás todavía no ocurrió, y la mayoría de las veces no va a ocurrir así. La próxima vez que la cabeza se adelante, preguntate: ¿qué está pasando ahora, en este minuto? Casi siempre, la respuesta es mucho más chica que el miedo.` },
        { titulo: `No hace falta tener todo bajo control`, cuerpo: `Queremos controlar todo para sentirnos seguros, y cuanto más lo intentamos, más ansiedad aparece. La vida tiene una parte que depende de vos y otra que no. Hacé una lista con dos columnas: lo que podés hacer hoy y lo que no está en tus manos. Ocupate de la primera. A la segunda, dale permiso para existir sin que tengas que resolverla.` }
      ],
      consejos: [
        `Apoyá los pies en el piso y sentí el peso del cuerpo. Es una forma rápida de volver al presente.`,
        `Nombrá cinco cosas que ves, cuatro que tocás y tres que escuchás. La cabeza se ordena cuando le das una tarea concreta.`,
        `Soltá el aire más largo de lo que lo tomaste. La exhalación larga le avisa al cuerpo que no hay peligro.`,
        `Si algo te preocupa, anotalo con una fecha para pensarlo. Postergar la preocupación no es ignorarla.`,
        `Bajá un poco el café los días que estás acelerado. El cuerpo no distingue bien entre cafeína y nervios.`,
        `Silenciá las notificaciones por una hora. No todo lo que suena es urgente.`,
        `Lavate la cara con agua fresca. Cambiar la sensación del cuerpo ayuda a cortar el espiral.`,
        `Cuando pienses "¿y si sale mal?", probá también "¿y si sale bien?". Las dos preguntas son igual de válidas.`,
        `Caminá diez minutos sin el celular en la mano. El movimiento gasta la energía que la ansiedad acumula.`,
        `Contale a alguien lo que te preocupa. Dicho en voz alta, casi todo pesa menos.`
      ],
      frases: [
        `Esto que sentís es intenso, pero no es para siempre.`, `Un pensamiento no es una profecía.`,
        `No tenés que resolver todo hoy. Solo este momento.`, `Respirá. Estás acá y estás a salvo.`,
        `La mayoría de las cosas que temés nunca llegan.`, `Ir paso a paso también es avanzar.`,
        `Tu cuerpo está en alerta. Vos podés avisarle que puede bajar.`, `Lo urgente casi nunca es tan urgente.`,
        `No hace falta tener todas las respuestas para dar el próximo paso.`, `El miedo habla fuerte, pero no siempre tiene razón.`,
        `Aflojá los hombros. Ya están cargando bastante.`, `Hoy alcanza con hacer lo que se pueda.`,
        `Este minuto es manejable. Y el que viene también.`, `No sos tu ansiedad. Es algo que te pasa.`,
        `Un respiro a la vez.`, `Lo que depende de vos, hacelo. Lo demás, soltalo un rato.`, `La calma también se entrena.`
      ],
      guiones: [
        { id: "A1", titulo: `Cuando el pecho aprieta`, tecnica: "cuadrada", min: "2 min", texto: `Hola. Si estás acá, seguramente el cuerpo está acelerado. Está bien. Vamos a bajar juntos. [pausa] Apoyá los pies en el piso. Sentí dónde toca tu cuerpo la silla o la cama. [pausa] Ahora vamos a respirar en cuatro tiempos, como dibujando un cuadrado. Inhalá por la nariz… uno, dos, tres, cuatro. [pausa] Sostené el aire… uno, dos, tres, cuatro. [pausa] Soltá despacio… uno, dos, tres, cuatro. [pausa] Y esperá con los pulmones vacíos… uno, dos, tres, cuatro. [pausa] Otra vez. Inhalá… sostené… soltá… esperá. [pausa larga] Una vuelta más, a tu ritmo. [pausa larga] Fijate si el pecho está un poquito más suelto. No hace falta que la sensación se vaya del todo. Alcanza con que baje un poco. [pausa] Lo estás haciendo bien.` },
        { id: "A2", titulo: `La cabeza no para`, tecnica: "anclaje", min: "2 min", texto: `Cuando la cabeza no para, la mejor forma de frenarla es traerla al lugar donde estás. [pausa] Mirá alrededor y nombrá, en voz baja o por dentro, cinco cosas que ves. [pausa larga] Ahora cuatro cosas que podés tocar: la ropa, la mesa, tus manos. [pausa larga] Tres sonidos que escuchás, aunque sean lejanos. [pausa larga] Dos olores, o dos cosas que te gustaría oler. [pausa] Y una cosa que te haga bien saber hoy. [pausa larga] Ahora respirá hondo… y soltá despacio. [pausa] Los pensamientos van a volver, y está bien. Cada vez que vuelvan, sabés cómo regresar acá.` },
        { id: "A3", titulo: `Antes de algo que me da miedo`, tecnica: "exhalacion", min: "1 min 30", texto: `Tenés algo por delante que te pone nervioso. Una charla, una entrevista, un trámite, una decisión. [pausa] Los nervios no significan que te va a ir mal. Significan que te importa. [pausa] Inhalá profundo por la nariz… y soltá por la boca, largo, como si soplaras una vela sin apagarla. [pausa] Otra vez. [pausa] Ahora pensá en una vez que estabas nervioso y saliste adelante igual. Esa persona sos vos. [pausa] No hace falta que salga perfecto. Alcanza con que vayas y hagas lo mejor que puedas hoy. [pausa] Un respiro más… y adelante.` },
        { id: "A4", titulo: `Todo parece urgente`, tecnica: "anclaje", min: "2 min", texto: `Hay días en que todo grita al mismo tiempo: mensajes, pendientes, gente que necesita algo. [pausa] Por estos dos minutos, nada de eso te necesita. [pausa] Cerrá los ojos si querés. Inhalá contando hasta cuatro… y soltá contando hasta seis. [pausa] Otra vez, sin apuro. [pausa larga] Imaginá que cada cosa pendiente es una piedra en una mochila. Con cada exhalación, apoyás una en el piso. No las tirás: solo las dejás un rato. [pausa larga] Cuando termines, elegí una sola piedra para levantar primero. Solo una. [pausa] Las demás pueden esperar a que llegues.` },
        { id: "A5", titulo: `Un minuto de calma`, tecnica: "suave", min: "1 min", texto: `Un minuto. Nada más. [pausa] Aflojá la mandíbula. Bajá los hombros. Soltá las manos. [pausa] Inhalá… [pausa] …y soltá, más lento. [pausa] Otra vez. [pausa] Y una más. [pausa] Listo. Ya hiciste algo por vos hoy.` }
      ]
    },
    {
      id: "cansancio", nombre: "Cansancio", animo: "Agotado/a", tecnica: "exhalacion", color: "#F3EBDD", circulo: "#EAD9BC",
      bajada: "Para cuando venís tirando del carro hace rato y ya no te quedan pilas.",
      textos: [
        { titulo: `Descansar no es premio, es necesidad`, cuerpo: `Muchos aprendimos que el descanso se gana: primero terminás todo y después, si sobra tiempo, parás. Pero la lista nunca se termina, y así nunca llega el momento de parar. El descanso no es un premio por portarte bien. Es lo que te permite seguir. Hoy, dale al descanso un lugar en tu agenda como si fuera una reunión importante. Porque lo es.` },
        { titulo: `El cansancio también es información`, cuerpo: `Cuando estás agotado, el cuerpo te está diciendo algo. Capaz que dormiste poco, que estás haciendo demasiado o que algo te está pesando más de lo que admitís. En vez de pelearte con el cansancio, preguntale qué necesita. A veces es una siesta. A veces es decir que no. A veces es pedir una mano. Escucharlo a tiempo te ahorra caer más adelante.` }
      ],
      consejos: [
        `Elegí la tarea más importante del día y hacé solo esa primero. El resto, si se puede.`,
        `Decir "hoy no puedo" también es una respuesta válida.`,
        `Una siesta de 20 minutos rinde más que tres cafés.`,
        `Poné una alarma para pararte y estirarte cada hora. El cuerpo también se cansa de estar quieto.`,
        `Delegar no es fallar. Es entender que no tenés que hacer todo vos.`,
        `Comé algo de verdad. El cansancio empeora cuando el cuerpo no tiene combustible.`,
        `Abrí la ventana y mirá lejos un minuto. Los ojos y la cabeza descansan cuando miran el horizonte.`,
        `Antes de aceptar algo nuevo, preguntate qué vas a dejar de hacer para hacerle lugar.`,
        `Bajá la exigencia por un día. Hecho es mejor que perfecto.`,
        `Cerrá el día anotando una cosa que sí lograste. Siempre hay al menos una.`
      ],
      frases: [
        `Cansarse no es fallar. Es la prueba de todo lo que diste.`, `Hoy alcanza con lo que puedas.`,
        `Parar también es parte del camino.`, `No sos una máquina. Sos una persona, y las personas descansan.`,
        `Hay días para correr y días para caminar despacio.`, `Lo pendiente puede esperar a que respires.`,
        `Bajar el ritmo no es rendirse.`, `Tu valor no se mide por cuánto hacés.`,
        `Un descanso a tiempo vale más que diez promesas de parar después.`, `Hecho es mejor que perfecto.`,
        `Pedir ayuda es de valientes.`, `El mundo no se cae si hoy hacés un poco menos.`,
        `Venís haciendo mucho. Reconocelo.`, `Recargar también es trabajo.`,
        `Soltar un poco hoy te deja seguir mañana.`, `La vida no es una carrera contra el reloj.`, `Date el permiso de no poder con todo.`
      ],
      guiones: [
        { id: "B1", titulo: `Venís tirando del carro`, tecnica: "exhalacion", min: "2 min", texto: `Hola. Qué bueno que paraste un ratito. [pausa] Si estás cansado, no tenemos que hacer nada difícil. Solo dejar que el cuerpo afloje. [pausa] Inhalá suave por la nariz, contando hasta cuatro. [pausa] Y soltá por la boca, despacito, contando hasta ocho. Como cuando te sentás después de un día largo. [pausa] Otra vez. [pausa larga] Ahora recorré el cuerpo: la frente, la mandíbula, los hombros, la panza, las piernas. En cada lugar, con la exhalación, aflojá un poquito. [pausa larga] Venís haciendo mucho. Este momento es tuyo. Nadie te está pidiendo nada ahora. [pausa larga] Cuando quieras volver, hacelo despacio.` },
        { id: "B2", titulo: `Pausa en medio del laburo`, tecnica: "suave", min: "1 min 30", texto: `Un corte en medio del día. Nadie se va a dar cuenta. [pausa] Si podés, alejá la mirada de la pantalla y mirá algo lejano. [pausa] Estirá los brazos hacia arriba, inhalando… y bajalos soltando el aire. [pausa] Girá el cuello despacio hacia un lado… y hacia el otro. [pausa] Ahora tres respiraciones profundas. Inhalá… soltá. [pausa] Inhalá… soltá. [pausa] Inhalá… soltá. [pausa] Listo. Volvé a lo tuyo con un poco más de aire.` },
        { id: "B3", titulo: `Cuando no me alcanza el día`, tecnica: "suave", min: "2 min", texto: `Hay días en que las horas no alcanzan, y aparece esa sensación de que siempre estás atrasado. [pausa] Vamos a parar dos minutos, aunque parezca que no hay tiempo. Justamente por eso. [pausa] Respirá profundo… y soltá. [pausa] Ahora pensá en todo lo que tenés pendiente. No lo resuelvas: solo miralo, como una lista en una pared. [pausa larga] Elegí una sola cosa de esa lista. La más importante, no la más urgente. [pausa] Esa es la única que tenés que hacer ahora. Lo demás viene después, de a una. [pausa] Una respiración más… y arrancá por ahí.` },
        { id: "B4", titulo: `Recargar pilas`, tecnica: "suave", min: "2 min", texto: `Buscá una posición cómoda. Si podés, acostate. [pausa] Vamos a soltar el cuerpo de a partes. Apretá fuerte los puños… sostené… y soltá. Sentí la diferencia. [pausa] Subí los hombros hacia las orejas… sostené… y dejalos caer. [pausa] Apretá la cara, como si comieras un limón… y aflojá. [pausa] Estirá las piernas y las puntas de los pies… y soltá. [pausa larga] Ahora quedate así, flojo, respirando tranquilo. [pausa larga] El cuerpo sabe recargarse cuando le das el espacio. Este es ese espacio.` },
        { id: "B5", titulo: `Permiso para parar`, tecnica: "suave", min: "1 min", texto: `Esto es un permiso. Para parar, para no hacer, para no rendir. [pausa] Inhalá profundo… y soltá todo el aire. [pausa] Hoy no tenés que demostrarle nada a nadie. [pausa] Otra respiración… [pausa] Está bien descansar. Siempre estuvo bien.` }
      ]
    },
    {
      id: "tristeza", nombre: "Tristeza", animo: "Triste", tecnica: "suave", color: "#ECE6F3", circulo: "#DACDEA",
      bajada: "Para los días grises, el desgano y las ganas de no hacer nada.",
      textos: [
        { titulo: `Está bien no estar bien`, cuerpo: `Vivimos rodeados de mensajes que dicen que hay que estar siempre arriba, siempre positivos. Y cuando estamos tristes, encima nos sentimos culpables por estarlo. Pero la tristeza es parte de la vida, como la lluvia es parte del clima. No hace falta echarla ni hacer de cuenta que no está. A veces alcanza con dejarla estar un rato, tratarte con cariño y esperar, sabiendo que va a pasar.` },
        { titulo: `Las cosas chiquitas cuentan`, cuerpo: `Cuando estás triste, las cosas grandes parecen imposibles. Por eso hoy no te pidas cosas grandes. Levantarte, ducharte, tomar un mate al sol, mandarle un mensaje a alguien: todo eso cuenta. Cada cosa chiquita que hacés es una forma de decirte "sigo acá, me sigo cuidando". Y de a poquito, esas cosas chicas te van devolviendo las ganas.` }
      ],
      consejos: [
        `Abrí las cortinas apenas te levantás. La luz del día ayuda al ánimo más de lo que parece.`,
        `Escribile a alguien de confianza, aunque sea un "hola". No tenés que explicar nada.`,
        `Poné una canción que te traiga un buen recuerdo.`,
        `Salí a caminar diez minutos, aunque no tengas ganas. Las ganas a veces llegan después de arrancar.`,
        `Anotá tres cosas, por chiquitas que sean, que hoy estuvieron bien.`,
        `No te compares con lo que muestran las redes. Ahí nadie sube sus días grises.`,
        `Hacé algo con las manos: cocinar, regar una planta, ordenar un cajón.`,
        `Llorá si tenés ganas. Llorar no es debilidad, es una forma de soltar.`,
        `Tratate como tratarías a un amigo que está pasando lo mismo.`,
        `Si la tristeza dura semanas y no afloja, hablalo con un profesional. Pedir ayuda es cuidarte.`
      ],
      frases: [
        `Está bien no estar bien.`, `Los días grises también pasan.`, `No tenés que ponerte fuerte para nadie.`,
        `La tristeza no es para siempre, aunque hoy lo parezca.`, `Tratate con la misma ternura que le darías a alguien que querés.`,
        `Las cosas chiquitas también cuentan.`, `Sentir mucho no es un defecto.`, `Hoy alcanza con levantarte. Mañana vemos.`,
        `No estás solo, aunque a veces se sienta así.`, `Hay gente a la que le importa cómo estás.`,
        `Detrás de las nubes, el sol sigue ahí.`, `Un día malo no es una vida mala.`, `Date tiempo. Sanar no tiene apuro.`,
        `Llorar también limpia.`, `Lo que sentís tiene sentido.`, `Ser amable con vos mismo también se aprende.`, `De a poquito, las ganas vuelven.`
      ],
      guiones: [
        { id: "C1", titulo: `Está bien no estar bien`, tecnica: "suave", min: "2 min", texto: `Hola. Si hoy estás triste, no vinimos a sacarte la tristeza de encima. Vinimos a acompañarte un rato. [pausa] Poné una mano en el pecho, si querés. Sentí cómo se mueve con la respiración. [pausa] Inhalá despacio… y soltá, sin forzar nada. [pausa] Otra vez, suave. [pausa larga] Lo que sentís tiene un motivo, aunque no lo puedas nombrar. No tenés que entenderlo todo ahora. [pausa] Dale a la tristeza un lugar, como a un visitante que llegó sin avisar. Puede quedarse un rato. Después se va a ir. [pausa larga] Respirá una vez más. Y cuando termines, si podés, hacé una cosa chiquita que te haga bien.` },
        { id: "C2", titulo: `Un mensaje para vos`, tecnica: "suave", min: "1 min 30", texto: `Esto es lo que te diría alguien que te quiere, si estuviera acá. [pausa] Que lo estás haciendo mejor de lo que creés. [pausa] Que no tenés que tener todo resuelto. [pausa] Que está bien si hoy te cuesta. [pausa] Que valés mucho, incluso en los días en que no te sale nada. [pausa larga] Respirá hondo y dejá que esas palabras se queden un ratito. [pausa larga] Son para vos.` },
        { id: "C3", titulo: `Cuando todo es gris`, tecnica: "suave", min: "2 min", texto: `Hay días en que todo se ve gris, como si alguien le hubiera bajado el color al mundo. [pausa] Vamos a buscar un poquito de color, aunque sea chiquito. [pausa] Respirá profundo… y soltá. [pausa] Ahora pensá en un lugar donde te hayas sentido bien alguna vez. Una playa, unas sierras, la casa de alguien, una cocina con olor a comida. [pausa larga] Imaginá los colores de ese lugar. Los sonidos. La temperatura. [pausa larga] Ese lugar sigue existiendo, y esa versión tuya también. [pausa] Respirá una vez más, trayendo un poquito de ese color con vos.` },
        { id: "C4", titulo: `Extrañar a alguien`, tecnica: "suave", min: "2 min", texto: `Extrañar duele porque quisimos mucho. [pausa] Si hoy extrañás a alguien, acá no hace falta disimularlo. [pausa] Respirá despacio… y soltá. [pausa] Pensá en un momento lindo que compartiste con esa persona. No el último, no el más triste. Uno lindo. [pausa larga] Fijate qué sentís al recordarlo. Puede ser alegría y dolor al mismo tiempo, y está bien. [pausa larga] Lo que compartieron es parte tuya. Eso no se pierde. [pausa] Respirá una vez más, y si tenés ganas de llorar, dejá que pase.` },
        { id: "C5", titulo: `Levantarse cuando cuesta`, tecnica: "suave", min: "1 min", texto: `Hoy cuesta arrancar. Está bien. [pausa] No te pido que te levantes con energía. Solo que hagamos esto juntos. [pausa] Inhalá hondo… y soltá. [pausa] Mové los dedos de las manos y de los pies. [pausa] Estirate un poco, como un gato. [pausa] Y ahora, un solo paso: sentarte en la cama. Nada más. [pausa] El resto del día lo vamos viendo de a uno.` }
      ]
    },
    {
      id: "bronca", nombre: "Bronca", animo: "Con bronca", tecnica: "exhalacion", color: "#F5E3DC", circulo: "#EDC9BB",
      bajada: "Para cuando algo te sacó y estás a punto de decir o hacer algo de lo que te vas a arrepentir.",
      textos: [
        { titulo: `La bronca no es el problema`, cuerpo: `Enojarse es humano. La bronca aparece cuando algo nos parece injusto, cuando nos faltan el respeto o cuando no nos escuchan. El problema no es sentirla, sino dejar que decida por nosotros. Entre lo que te pasa y lo que hacés hay un espacio chiquito. En ese espacio está tu libertad. Respirar es la forma más rápida de agrandarlo.` },
        { titulo: `Contestar después también es contestar`, cuerpo: `Cuando algo nos enoja, sentimos que tenemos que responder ya, como si el tiempo jugara en contra. Pero casi nunca es así. Un mensaje que esperó una hora suele ser más claro y más justo que uno escrito en caliente. Esperar no es quedarse callado: es elegir el momento en que vas a poder decir lo que querés de verdad.` }
      ],
      consejos: [
        `Antes de responder un mensaje que te enojó, esperá diez minutos. Si sigue siendo necesario, mandalo después.`,
        `Escribí todo lo que querés decir en una nota que no vas a mandar. Sacarlo afuera ya alivia.`,
        `Mové el cuerpo: subí una escalera, caminá rápido. La bronca es energía y necesita salir.`,
        `Apretá los puños fuerte cinco segundos y soltá. Repetilo tres veces.`,
        `Tomate un vaso de agua fría despacio, sorbo a sorbo.`,
        `Preguntate: ¿esto me va a importar dentro de una semana?`,
        `Si estás discutiendo, pedí una pausa: "Necesito un rato y seguimos".`,
        `Hablá en primera persona: "me sentí mal cuando…" en vez de "vos siempre…".`,
        `Alejate del lugar o de la pantalla un momento. Cambiar de espacio cambia el estado.`,
        `Cuando se te pase, preguntate qué necesitabas en ese momento. Detrás de la bronca suele haber algo que te importa.`
      ],
      frases: [
        `Entre lo que sentís y lo que hacés, hay un respiro.`, `La bronca pasa. Lo que dijiste, queda.`,
        `Contestar después también es contestar.`, `Enojarse es humano. Elegir qué hacer es tu poder.`,
        `No todo merece tu energía.`, `Soltá el aire. Soltá un poco la bronca.`, `La calma no es debilidad. Es control.`,
        `No le des a nadie el poder de arruinarte el día.`, `Diez minutos pueden evitar diez días de arrepentimiento.`,
        `Podés tener razón y aun así elegir la paz.`, `Lo que te enoja te muestra lo que te importa.`,
        `Bajar un cambio también es avanzar.`, `No hace falta ganar todas las discusiones.`, `Respirá antes de responder.`,
        `El enojo es una ola. Dejala pasar antes de nadar.`, `Tu paz vale más que tener la última palabra.`, `Hoy elegí no engancharte.`
      ],
      guiones: [
        { id: "D1", titulo: `Para soltar la bronca`, tecnica: "exhalacion", min: "2 min", texto: `Algo te sacó. Está bien. No vamos a hacer de cuenta que no. [pausa] Fijate dónde sentís la bronca en el cuerpo. Capaz en la mandíbula, en los puños, en el pecho. [pausa] Ahora inhalá profundo por la nariz… y soltá por la boca, fuerte, como un suspiro largo. [pausa] Otra vez. Inhalá… y soltá, todavía más largo. [pausa] Una vez más. [pausa larga] Apretá los puños bien fuerte… sostené… y soltá. Sentí cómo se van las manos. [pausa] La bronca sigue ahí, pero ahora la manejás vos. [pausa larga] Antes de decidir qué hacer, regalate un minuto más.` },
        { id: "D2", titulo: `Antes de contestar ese mensaje`, tecnica: "anclaje", min: "1 min", texto: `Dejá el celular boca abajo un minuto. [pausa] Inhalá contando hasta cuatro… y soltá contando hasta seis. [pausa] Otra vez. [pausa] Ahora preguntate: ¿qué quiero lograr con mi respuesta? ¿Que me entiendan, arreglar algo, o solo descargarme? [pausa larga] Si es descargarte, escribilo en una nota y no lo mandes. Si es arreglar algo, esperá a estar un poco más tranquilo. [pausa] Un respiro más. La respuesta puede esperar.` },
        { id: "D3", titulo: `Después de una discusión`, tecnica: "suave", min: "2 min", texto: `Pasó algo fuerte, y el cuerpo todavía está agitado. [pausa] No hace falta repasar la discusión ahora. Ya habrá tiempo. [pausa] Sentate, apoyá la espalda. Respirá hondo… y soltá. [pausa] Otra vez. [pausa larga] Poné las manos sobre las piernas y sentí su peso. [pausa] Cuando estemos tranquilos, vemos qué parte te toca y qué parte no. Ahora, solo respirar. [pausa larga] Una discusión no define una relación, ni te define a vos. [pausa] Una respiración más.` },
        { id: "D4", titulo: `Injusticia en el laburo`, tecnica: "suave", min: "1 min 30", texto: `Hay cosas que pasan en el trabajo que dan mucha bronca: un trato injusto, un reto que no merecías, alguien que no reconoce lo que hacés. [pausa] Lo que sentís es válido. [pausa] Inhalá profundo… sostené un momento… y soltá despacio. [pausa] Otra vez. [pausa larga] Ahora pensá: ¿qué parte de esto podés cambiar? ¿Y qué parte no? [pausa larga] Por lo que no depende de vos, soltá el aire. Por lo que sí, ya vas a encontrar el momento de actuar, con la cabeza fría.` },
        { id: "D5", titulo: `Bajar un cambio`, tecnica: "exhalacion", min: "1 min", texto: `Modo rápido. [pausa] Soltá los hombros. Abrí las manos. Aflojá la mandíbula. [pausa] Inhalá… y soltá el doble de largo. [pausa] Otra vez. [pausa] Y otra. [pausa] Listo. Ahora sí, seguí.` }
      ]
    },
    {
      id: "insomnio", nombre: "Insomnio", animo: "No puedo dormir", tecnica: "dormir", color: "#DFE6EA", circulo: "#C5D3DA",
      bajada: "Para la noche, cuando la cabeza le da vueltas a todo y el sueño no llega.",
      textos: [
        { titulo: `La noche agranda todo`, cuerpo: `A las tres de la mañana, cualquier problema parece enorme. Es que de noche estamos cansados, solos y sin nada que nos distraiga, y la cabeza aprovecha para traer todo lo pendiente. Pero lo que pensás a esa hora no es la verdad: es la versión nocturna de las cosas. Mañana, con luz y un café, todo va a tener otro tamaño. No hace falta resolverlo ahora.` },
        { titulo: `No te obligues a dormir`, cuerpo: `Cuanto más intentás dormirte a la fuerza, más despierto quedás. El sueño es como un gato: si lo perseguís, se escapa; si te quedás quieto, se acerca solo. Esta noche cambiá el objetivo. En vez de "tengo que dormir", probá con "voy a descansar". Quedarte acostado, tranquilo y respirando despacio también le hace bien al cuerpo.` }
      ],
      consejos: [
        `Dejá el celular lejos de la cama al menos media hora antes de dormir.`,
        `Anotá en un papel lo que te preocupa. Lo que queda escrito, la cabeza lo suelta más fácil.`,
        `Si pasaron 20 minutos y no te dormiste, levantate, hacé algo tranquilo con luz baja y volvé cuando tengas sueño.`,
        `Bajá las luces de la casa una hora antes de acostarte.`,
        `Evitá el café y el mate después de media tarde.`,
        `Mantener la pieza fresca y oscura ayuda a dormir mejor.`,
        `Acostate y levantate más o menos a la misma hora, también los fines de semana.`,
        `Una ducha tibia antes de dormir ayuda a que el cuerpo afloje.`,
        `No mires la hora cuando te despertás de noche. Hacer cuentas despierta más.`,
        `Si dormir mal se vuelve algo de todas las noches, consultalo con un médico.`
      ],
      frases: [
        `Mañana todo va a tener otro tamaño.`, `No tenés que dormirte. Solo descansar.`, `Lo que pensás de noche no es toda la verdad.`,
        `El día ya terminó. Lo pendiente, también puede descansar.`, `Soltá el día. Ya hiciste lo que pudiste.`,
        `La noche no es para resolver. Es para soltar.`, `Respirá lento. El sueño llega solo.`, `Mañana es otro día, y vas a estar ahí.`,
        `Dejalo para mañana. En serio.`, `Tu cuerpo merece este descanso.`, `Apagá la pantalla. Prendé la calma.`,
        `No hay nada que hacer ahora, y eso está bien.`, `Cada exhalación te acerca un poco más al sueño.`,
        `Los pensamientos pasan como autos por la ruta. No hace falta subirse.`, `Hoy fue suficiente.`,
        `Descansar también es cuidarte.`, `Buenas noches. Mañana seguimos.`
      ],
      guiones: [
        { id: "E1", titulo: `Dormir sin darle vueltas`, tecnica: "dormir", min: "2 min", texto: `Buenas noches. Acomodate en la cama. No hay nada más que hacer hoy. [pausa] Vamos a respirar de una manera que ayuda al cuerpo a dormir. Inhalá por la nariz contando hasta cuatro… [pausa] Sostené el aire contando hasta siete… [pausa] Y soltá por la boca, despacito, contando hasta ocho. [pausa larga] Otra vez. Si te cuesta sostener tanto, hacelo más corto. No hay apuro. [pausa larga] Una vuelta más. [pausa larga] Ahora dejá que la respiración vuelva sola, sin controlarla. [pausa larga] Si aparece un pensamiento, dejalo pasar. Mañana se lo atiende. [pausa larga] Descansá.` },
        { id: "E2", titulo: `Soltar el día`, tecnica: "suave", min: "2 min", texto: `El día terminó. Lo que salió bien, salió bien. Lo que no, puede esperar a mañana. [pausa] Llevá la atención a los pies. Dejalos pesados, hundidos en el colchón. [pausa larga] Ahora las piernas. Pesadas, flojas. [pausa larga] La panza, que sube y baja sola. [pausa larga] Los hombros, que ya no tienen que cargar nada. [pausa larga] Los brazos, las manos, los dedos. [pausa larga] La cara: la frente lisa, los ojos quietos, la mandíbula suelta. [pausa larga] Todo el cuerpo descansando. No tenés que hacer nada más. [pausa larga]` },
        { id: "E3", titulo: `Me desperté y no me puedo volver a dormir`, tecnica: "exhalacion", min: "1 min 30", texto: `Te despertaste en medio de la noche. Pasa, y no es grave. [pausa] No mires la hora. No hagas cuentas. [pausa] Quedate quieto, con los ojos cerrados. [pausa] Inhalá despacio… y soltá más despacio todavía. [pausa larga] Imaginá que estás en un lugar tranquilo, escuchando la lluvia desde adentro, calentito. [pausa larga] No hace falta dormirse rápido. Estás descansando igual. [pausa larga] El sueño va a volver cuando quiera.` },
        { id: "E4", titulo: `La cabeza no se apaga`, tecnica: "suave", min: "2 min", texto: `Si la cabeza sigue prendida, no te pelees con ella. [pausa] Imaginá un cielo grande, de noche. [pausa] Cada pensamiento que aparece es una nube que pasa. La mirás… y la dejás ir. [pausa larga] Viene otra. También la dejás pasar. No la seguís, no la empujás. [pausa larga] Vos sos el cielo, no las nubes. El cielo siempre sigue ahí, tranquilo. [pausa larga] Respirá lento. [pausa larga] Y dejá que el cielo se vaya quedando cada vez más quieto.` },
        { id: "E5", titulo: `Gracias por hoy`, tecnica: "suave", min: "1 min", texto: `Antes de dormir, pensá en una cosa del día por la que puedas dar las gracias. Algo chiquito alcanza. [pausa larga] Un mate, una charla, un rayo de sol, que llegaste al final del día. [pausa] Respirá hondo… y soltá. [pausa] Hoy fue suficiente. [pausa] Buenas noches.` }
      ]
    },
    {
      id: "dificiles", nombre: "Momentos difíciles", animo: "Me supera todo", tecnica: "anclaje", color: "#E1EEE9", circulo: "#C3DED4",
      bajada: "Para cuando se junta todo: una pérdida, problemas de plata, un cambio que no elegiste o la sensación de que la vida te supera.",
      textos: [
        { titulo: `De a un paso`, cuerpo: `Cuando la vida se pone pesada, mirar todo junto paraliza. Es como estar al pie de una cuesta empinada y querer llegar arriba de un salto. No se puede, y no hace falta. Las cuestas se suben de a un paso, y a veces hay que parar a tomar aire en el camino. Hoy no te preguntes cómo vas a resolver todo. Preguntate cuál es el próximo paso. Solo ese.` },
        { titulo: `No tenés que atravesarlo solo`, cuerpo: `En los momentos difíciles solemos encerrarnos, como si contar lo que nos pasa fuera una carga para los demás. Pero la mayoría de la gente que te quiere preferiría saberlo y acompañarte. Pedir ayuda no te hace más débil: te hace más acompañado. Pensá en una persona con la que podrías hablar hoy. Y si sentís que es demasiado para manejarlo con tu gente, hay profesionales preparados para escucharte.` }
      ],
      consejos: [
        `Hacé una lista de lo que te preocupa y marcá lo que podés hacer esta semana. Empezá por lo más chico.`,
        `Si el problema es de plata, anotá los números en un papel. Verlos claros asusta menos que imaginarlos.`,
        `Mantené una rutina mínima: levantarte, comer, salir un rato. En el caos, lo simple sostiene.`,
        `Contale a una persona de confianza lo que estás pasando. No hace falta que te dé soluciones.`,
        `Separá lo que depende de vos de lo que no. Poné la energía solo en la primera parte.`,
        `Permitite días malos. Atravesar algo difícil no es una línea recta.`,
        `Limitá las noticias y las redes cuando ya estás cargado.`,
        `Buscá un momento del día solo para vos, aunque sean diez minutos.`,
        `Recordá otras veces en que la pasaste mal y saliste adelante. Esa fuerza sigue ahí.`,
        `Si sentís que no podés más, tocá el botón de ayuda. Hablar con alguien ahora puede cambiar mucho.`
      ],
      frases: [
        `Las cuestas se suben de a un paso.`, `No hace falta ver todo el camino. Alcanza con el próximo paso.`,
        `Esto también va a pasar.`, `Hay días para crecer y días para aguantar. Los dos cuentan.`,
        `Ya saliste de otras. Vas a salir de esta.`, `Pedir ayuda es de valientes.`, `No tenés que atravesarlo solo.`,
        `Respirá. Un problema a la vez.`, `Lo que hoy pesa, mañana se carga distinto.`, `Seguir, aunque sea despacio, ya es mucho.`,
        `Estás haciendo lo mejor que podés con lo que tenés.`, `Hoy no ganar también es parte de ganar.`,
        `Las raíces crecen en los días que no se ven.`, `No estás atrasado. Estás atravesando algo.`,
        `La vida no te pide que puedas con todo. Solo que no te sueltes.`, `Un día a la vez.`, `Date un respiro. Te lo merecés.`
      ],
      guiones: [
        { id: "F1", titulo: `Cuando todo pesa`, tecnica: "anclaje", min: "2 min", texto: `Hola. Si estás acá, seguramente se te juntó todo. [pausa] No vinimos a resolver nada. Vinimos a darte un poco de aire. [pausa] Apoyá los pies en el piso y la espalda en algo firme. Sentí que algo te sostiene. [pausa] Inhalá despacio… y soltá más despacio. [pausa] Otra vez. [pausa larga] Nombrá tres cosas que ves y dos que escuchás. Estás acá, en este momento. [pausa larga] Las cuestas se suben de a un paso. No hace falta llegar arriba hoy. [pausa] Respirá una vez más, y cuando termines, elegí un solo paso chiquito para dar.` },
        { id: "F2", titulo: `La plata no alcanza`, tecnica: "anclaje", min: "2 min", texto: `Los problemas de plata quitan el sueño y la paz. Es lógico que estés preocupado. [pausa] Antes de hacer cuentas, vamos a respirar, porque con la cabeza acelerada todo parece peor. [pausa] Inhalá contando hasta cuatro… y soltá contando hasta seis. [pausa] Otra vez. [pausa larga] Ahora recordate algo importante: tu valor no depende de lo que tenés en la cuenta. [pausa] Cuando termines, anotá los números en un papel, con calma. Verlos claros asusta menos que imaginarlos. [pausa] Y si podés, hablá con alguien de confianza. Muchas salidas aparecen cuando se piensa de a dos.` },
        { id: "F3", titulo: `Después de una pérdida`, tecnica: "suave", min: "2 min", texto: `Perder algo o a alguien que querías duele, y el dolor no sigue reglas. [pausa] Acá no tenés que estar bien. [pausa] Poné una mano en el pecho y respirá despacio. [pausa larga] El duelo viene en olas. Algunas son chiquitas y otras te tapan. Ninguna dura para siempre. [pausa larga] Si hoy es un día de olas grandes, no hagas más que respirar y cuidarte. [pausa] Lo que quisiste sigue siendo parte tuya. [pausa larga] Una respiración más. Y si podés, no pases este día solo.` },
        { id: "F4", titulo: `Un cambio que no elegí`, tecnica: "suave", min: "1 min 30", texto: `A veces la vida cambia sin pedirnos permiso: una mudanza, un trabajo que se termina, una relación que se va. [pausa] Es normal sentir miedo, bronca o tristeza. Todo junto, incluso. [pausa] Inhalá profundo… y soltá. [pausa] No sabés cómo va a seguir esto, y está bien no saberlo todavía. [pausa larga] Pensá en una cosa que sigue igual, que sigue siendo tuya. Una persona, un lugar, una costumbre. [pausa] Agarrate de eso mientras el resto se acomoda.` },
        { id: "F5", titulo: `No estás solo`, tecnica: "suave", min: "1 min", texto: `Si hoy sentís que no podés más, quiero que sepas algo: no tenés que cargar esto solo. [pausa] Respirá hondo conmigo… y soltá. [pausa] Hay personas preparadas para escucharte ahora mismo, gratis y a cualquier hora. [pausa] Tocá el botón de ayuda en la pantalla para llamar. [pausa] Pedir ayuda es un acto de cuidado. Y vos merecés que te cuiden.` }
      ]
    }
  ],

  /* Técnicas de respiración: fases [nombre, segundos, tamaño del círculo 0..1] */
  tecnicas: {
    cuadrada:   { nombre: "Respiración cuadrada", vueltas: 4, fases: [["Inhalá", 4, 1], ["Sostené", 4, 1], ["Soltá", 4, 0], ["Esperá", 4, 0]] },
    exhalacion: { nombre: "Exhalación larga", vueltas: 5, fases: [["Inhalá", 4, 1], ["Soltá", 8, 0]] },
    suave:      { nombre: "Respiración suave", vueltas: 5, fases: [["Inhalá", 4, 1], ["Sostené", 2, 1], ["Soltá", 6, 0]] },
    dormir:     { nombre: "Respiración 4-7-8", vueltas: 4, fases: [["Inhalá", 4, 1], ["Sostené", 7, 1], ["Soltá", 8, 0]] },
    anclaje:    { nombre: "Anclaje y respiración", vueltas: 5, fases: [["Inhalá", 4, 1], ["Soltá", 6, 0]] }
  },

  /* Programas de 7 días según lo que trae a la persona (pregunta 1). */
  programas: {
    estres:   { titulo: "7 días para bajar un cambio",        dias: ["B2", "A5", "B3", "D2", "A4", "B1", "B5"] },
    ansiedad: { titulo: "7 días para aquietar la cabeza",     dias: ["A1", "A2", "A5", "A4", "A3", "E4", "F1"] },
    tristeza: { titulo: "7 días para volver a encontrarte",   dias: ["C1", "C2", "C5", "C3", "F1", "C4", "B5"] },
    sueno:    { titulo: "7 días para dormir mejor",           dias: ["E1", "E2", "E4", "E3", "E5", "A5", "B4"] },
    momento:  { titulo: "7 días para atravesar lo difícil",   dias: ["F1", "F4", "F2", "C2", "F3", "A5", "F5"] }
  },

  ayuda: [
    { numero: "0800-999-0091", tel: "08009990091", detalle: "Línea nacional de urgencias en salud mental · gratis, confidencial, las 24 horas", principal: true },
    { numero: "135", tel: "135", detalle: "Asistencia al suicida · gratis desde CABA y Gran Buenos Aires" },
    { numero: "0800 345 1435", tel: "08003451435", detalle: "Asistencia al suicida · desde todo el país" },
    { numero: "911", tel: "911", detalle: "Si hay peligro inmediato" }
  ]
};
