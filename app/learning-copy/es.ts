import type { LearningCopy } from './en';

const copy = {
  recapTitle: "Tu recorrido con {name}",
  recapIntro: "Repasa tus decisiones, vuelve a lo que merece otra mirada y encuentra fuentes útiles para los siguientes pasos.",
  decisionsTitle: "Tus decisiones, explicadas",
  revisitCount: "Decisiones que conviene revisar: {count}",
  allConsidered: "Identificaste la opción más fundamentada en cada etapa. Explora las razones y los recursos que aparecen a continuación.",
  yourChoice: "Elegiste",
  informedChoice: "Elección más fundamentada",
  worthRevisiting: "Merece otra mirada",
  saferOption: "Una opción a considerar",
  revisitDecision: "Revisar esta decisión",
  revisitLabel: "Revisar {stage}: {title}",
  returnToRecap: "Volver al resumen de tu recorrido",
  misunderstanding: "Un malentendido frecuente",
  nextStep: "Un siguiente paso útil",
  checkSource: "Consultar la orientación",
  relatedResources: "Fuentes para este recorrido",
  relatedIntro: "Empieza por las preguntas que plantearon tus decisiones. Cada fuente tiene su propia finalidad y sus propias condiciones.",
  openResource: "Abrir recurso",
  reflectTitle: "Haz una pausa y reflexiona",
  reflectIntro: "Piensa en las circunstancias de esta persona ficticia. Estas preguntas no tienen puntuación.",
  controlPrompt: "¿Qué estaba bajo el control de esta persona y qué dependía de otras personas, servicios o circunstancias?",
  supportPrompt: "¿Qué apoyo podría hacer que el siguiente paso fuera más llevadero?",
  livedContext: "Ten presentes las circunstancias de la persona",
  sourcePublisher: "Publicado por",
  sourceScope: "Abarca",
  sourceChecked: "Fuente consultada",
  sourceUndated: "Fecha de consulta no registrada",
  sourceDateMeaning: "La fecha de consulta indica cuándo se comprobó la página enlazada para este proyecto. No es la fecha de actualización de la entidad que la publica ni una garantía de que una norma siga sin cambios.",
  sourceMethod: "Cómo utilizamos y comprobamos las fuentes",
  sourceMethodIntro: "La orientación enlaza con el organismo público responsable o con una organización especializada identificada. La entidad que publica la fuente, el tema y la fecha de consulta aparecen junto a cada fuente cuando se han registrado esos datos. Abre la fuente para comprobar sus condiciones actuales y a quién se aplica.",
  sourceMethodContent: "Las historias simplifican una situación para facilitar el aprendizaje. La explicación analiza la decisión de esa escena; no puede evaluar si una persona real cumple los requisitos. Una puntuación refleja las elecciones del ejercicio, no la preparación para inmigrar ni el resultado probable de una solicitud.",
  sourceMethodTranslation: "Las traducciones intentan conservar las mismas situaciones, el significado de las respuestas y los enlaces a las fuentes. Son ayudas para el aprendizaje, no traducciones oficiales de la orientación enlazada. La información vigente de la entidad que publicó el original sigue siendo la referencia para las decisiones reales.",
  sourceMethodReflection: "Las preguntas de reflexión exploran las barreras que aparecen en las historias ficticias, como la incertidumbre, las responsabilidades de cuidado, las necesidades de accesibilidad y la dependencia de otras personas. No pretenden representar la experiencia de todas las personas migrantes ni ser el testimonio de una persona real.",
  sourceMethodLink: "Lee sobre nuestras fuentes",
  professionalTitle: "Registro profesional de enfermería y matronas",
  professionalDescription: "Para profesionales de enfermería y matronas que obtuvieron su titulación fuera de la UE: comprueba el reconocimiento de las titulaciones y el registro profesional ante el NMBI, junto con los requisitos de inmigración aplicables.",
  professionalAction: "Comprueba los pasos del registro profesional para este puesto de enfermería.",
  taxTitle: "Registrar tu primer empleo a efectos fiscales",
  taxDescription: "Para quienes empiezan su primer empleo en Irlanda: Revenue explica cómo registrar el empleo con un número PPS y myAccount, y cómo esto ayuda a evitar la retención fiscal de emergencia.",
  taxAction: "Consulta los pasos de Revenue para registrar el primer empleo cuando te prepares para empezar a trabajar.",
  scopes: {
    immigration: "Permisos y condiciones de inmigración",
    employment: "Permisos de trabajo y derechos laborales",
    protection: "Protección internacional y acogida",
    "public-services": "Servicios públicos y vida cotidiana",
    equality: "Igualdad y discriminación",
    "specialist-support": "Información y apoyo especializados independientes",
    "professional-registration": "Titulaciones y registro profesionales",
    "general-information": "Información general y orientación hacia otros recursos",
  },
  insights: {
    offer: {
      explanation: "Una oferta de empleo no es un permiso de trabajo. Todavía hay que comprobar las funciones reales, la empresa y los criterios actuales del permiso.",
      action: "Compara la oferta escrita con la lista oficial de requisitos y anota lo que aún necesita confirmación.",
    },
    permissions: {
      explanation: "Una aprobación no completa todos los pasos de inmigración. La autorización para trabajar, el visado cuando sea obligatorio, la entrada al país y el registro de residencia responden a preguntas diferentes.",
      action: "Haz una lista de las aprobaciones y los documentos necesarios para esta vía, utilizando la fuente actual.",
    },
    travel: {
      explanation: "Una aprobación no elimina la necesidad de explicar el verdadero motivo del viaje. El relato de la persona y los documentos que lo respaldan deben ser coherentes.",
      action: "Identifica los documentos que explican este viaje y mantenlos seguros y accesibles durante el desplazamiento.",
    },
    registration: {
      explanation: "Un número PPS, una cita y un permiso de inmigración tienen finalidades diferentes. Completar el proceso de un servicio no completa los de los demás.",
      action: "Comprueba qué pasos de registro corresponden y lleva un registro separado de cada cita y requisito.",
    },
    workRights: {
      explanation: "Depender de una empresa no significa aceptar todas sus exigencias. Las condiciones de inmigración y los derechos laborales son cuestiones distintas que deben comprobarse con el servicio competente.",
      action: "Guarda de forma segura registros de horas, remuneración y mensajes, e identifica una fuente independiente de asesoramiento laboral.",
    },
    protection: {
      explanation: "No hay un guion que garantice la protección. Importan las circunstancias propias de la persona, un relato veraz y el procedimiento aplicable.",
      action: "Utiliza la información sobre protección que corresponda a la solicitud e identifica dónde pedir apoyo jurídico independiente.",
    },
    evidence: {
      explanation: "La falta de pruebas no es motivo para inventarlas. Explicar lagunas reales y preguntar qué otras pruebas podrían ayudar es distinto de alterar la historia.",
      action: "Enumera las pruebas que existen, las que faltan y lo que debe hablarse con una persona asesora.",
    },
    services: {
      explanation: "Un servicio que ayuda con una necesidad puede no decidir sobre otra. El alojamiento, las decisiones de protección, la atención sanitaria y el asesoramiento jurídico tienen funciones diferentes.",
      action: "Relaciona la pregunta inmediata con el servicio responsable y anota con quién contactar después.",
    },
    protectionWork: {
      explanation: "La experiencia de otra persona solicitante puede no establecer el derecho de esta persona a trabajar. Hay que comprobar el procedimiento aplicable, los plazos y el permiso individual.",
      action: "Consulta la orientación actual sobre el acceso al mercado laboral y el permiso de la persona antes de elaborar un plan de trabajo.",
    },
    study: {
      explanation: "Una oferta de admisión en un centro de estudios no resuelve los trámites de inmigración, el alojamiento ni las cuestiones económicas. Un plan de estudios viable debe considerar cada uno de estos aspectos.",
      action: "Utiliza la lista de requisitos para estudiantes para identificar las cuestiones sobre el curso, la financiación, el seguro y el alojamiento que aún hay que resolver.",
    },
    studentWork: {
      explanation: "Un permiso de estudiante no es una autorización ilimitada para trabajar. Importan el sello de inmigración concreto, las horas permitidas y las fechas aplicables.",
      action: "Compara el horario de trabajo propuesto con las condiciones actuales del permiso de estudiante.",
    },
    family: {
      explanation: "No hay una única solicitud familiar válida para todo el mundo. El estatus de la persona que patrocina la reunificación y la relación familiar determinan qué orientación debe utilizarse.",
      action: "Encuentra la orientación que corresponda a esta persona y esta relación familiar y, después, revisa sus requisitos de prueba.",
    },
    familyWork: {
      explanation: "Reunirse con la familia no explica por sí solo todos los derechos a trabajar. Hay que comprobar las condiciones del permiso de inmigración que la persona tiene realmente.",
      action: "Comprueba el permiso registrado y sus condiciones de trabajo antes de confiar en una suposición de la empresa.",
    },
    support: {
      explanation: "Un permiso, por sí solo, no resuelve las cuestiones de vivienda, salud, ingresos o aislamiento. Distintas necesidades pueden requerir distintas fuentes de ayuda.",
      action: "Elige una necesidad inmediata e identifica un servicio independiente adecuado o un contacto en la comunidad.",
    },
    access: {
      explanation: "Que se ofrezca un servicio no significa que sea accesible. Una discapacidad visible también puede ser solo una parte de las necesidades de apoyo de una persona.",
      action: "Describe la barrera concreta, pide que se registren las necesidades e identifica el contacto adecuado para recibir apoyo o presentar una reclamación.",
    },
    participation: {
      explanation: "La dificultad para participar no debe tratarse como falta de interés. Las necesidades de interpretación, salud o accesibilidad pueden requerir que se hable del apoyo con antelación.",
      action: "Explica al servicio competente y a la persona asesora qué apoyo podría ser necesario para participar en la cita.",
    },
    euWork: {
      explanation: "La ciudadanía de la UE cambia la cuestión del permiso de trabajo. El registro fiscal y el número PPS son distintos del fundamento del derecho de una persona a trabajar.",
      action: "Consulta la orientación para la ciudadanía de la UE y aborda por separado cada requisito de los servicios públicos.",
    },
    euResidence: {
      explanation: "La libre circulación no significa que todas las situaciones de residencia tengan condiciones idénticas. Hay que considerar el fundamento y la duración de la estancia.",
      action: "Identifica el fundamento de residencia aplicable y las pruebas que podrían ser necesarias para esta situación.",
    },
    equality: {
      explanation: "Una negativa o un incidente laboral puede plantear más de una cuestión de igualdad. La identidad de una persona, por sí sola, no determina si una reclamación legal prosperará.",
      action: "Conserva un registro objetivo de lo ocurrido y busca asesoramiento a tiempo sobre el procedimiento adecuado y los plazos.",
    },
    abuse: {
      explanation: "La amenaza de una pareja maltratadora no es una decisión de inmigración. El apoyo para estar a salvo y el asesoramiento sobre un permiso independiente atienden necesidades relacionadas, pero distintas.",
      action: "Identifica una forma segura de contactar con apoyo especializado y pregunta por el procedimiento aplicable para obtener un permiso independiente.",
    },
    safeContact: {
      explanation: "Un medio de contacto solo es útil si la persona puede utilizarlo de forma segura. Un dispositivo, una cuenta o un intérprete compartido puede no ofrecer privacidad.",
      action: "Considera un medio de contacto más seguro con un servicio de apoyo especializado, teniendo en cuenta las circunstancias de la persona.",
    },
  },
  reflections: {
    critical: "¿Cómo podrían una fecha de incorporación, los requisitos profesionales o la presión de una empresa afectar al tiempo disponible para tomar una decisión informada?",
    general: "¿Cómo podrían las comisiones de contratación, el control de los documentos o la dependencia de una empresa dificultar que se cuestione un acuerdo inseguro?",
    protection: "¿Cómo podrían el miedo, el agotamiento, la separación de la familia o la falta de documentos afectar a la capacidad de alguien para explicar lo ocurrido?",
    study: "¿Cómo podrían el coste de la vivienda, la presión económica o sentirse aislado afectar a la capacidad de un estudiante para continuar el curso?",
    family: "¿Cómo podría una persona conseguir acceso independiente a la información, los documentos y el apoyo mientras se instala con su familia?",
    "protection-access": "¿Cómo sería un acceso efectivo cuando hay que considerar conjuntamente la movilidad, el dolor, la crianza y las citas?",
    "eu-mobility": "¿Cómo pueden diferir los derechos formales y las experiencias cotidianas cuando el racismo, la discriminación por edad o la transfobia afectan al acceso al empleo y a la vivienda?",
    "family-safety": "¿Cómo podrían el control económico, las barreras lingüísticas, los niños y un dispositivo vigilado limitar las opciones que parecen disponibles?",
  },
} satisfies LearningCopy;

export default copy;
