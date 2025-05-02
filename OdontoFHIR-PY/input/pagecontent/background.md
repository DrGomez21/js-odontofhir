# Transfondo

En Paraguay, la mayoría de los consultorios odontológicos aún no cuentan con sistemas electrónicos para gestionar las fichas clínicas de sus pacientes.
Esta carencia afecta tanto la calidad como la precisión en el acceso a la información clínica, generando procesos fragmentados y poco eficientes. Además, los sistemas existentes carecen de estándares internacionales que permitan la interoperabilidad, entendida como la capacidad de que dos o más sistemas intercambien y utilicen la información compartida de manera efectiva.

En este contexto, el proyecto busca desarrollar un sistema de ficha clínica electrónica odontológica interoperable, basado en el estándar [HL7-FHIR](https://hl7.org/fhir/) (Fast Healthcare Interoperability Resources), para mejorar la gestión y el intercambio de información clínica en el ámbito odontológico. 

La falta de interoperabilidad representa un desafío y oportunidad en términos de la actualización tecnológica y la integración de los consultorios odontológicos en una infraestructura sanitaria digital más amplia y eficiente. 
## Fichas Odontologicas utilizadas en Paraguay brindada por colaboradores
![formulario](../imagenes/formulario.png)
![formulario2](../imagenes/formulario2.png)



## Atencedentes
En el proceso de búsqueda de antecedentes sobre fichas clínicas electrónicas odontológicas interoperables, se identificó un proyecto de la [Asociación Americana Dental (ADA)](https://www.ada.org/), orientado a abordar la necesidad histórica de mejorar la comunicación entre los proveedores de atención primaria y los proveedores de salud dental. Tradicionalmente, esta comunicación se realizaba mediante papel o adjuntos por correo electrónico, implicando que los procesos de derivación de pacientes fueran fragmentados e ineficientes. Este problema fue identificado como una de las principales barreras a resolver. Para ello, se utilizaron los estándares interoperables HL7 CDA y FHIR como resultado, surgió la iniciativa [Dental Data Exchange](https://build.fhir.org/ig/HL7/dental-data-exchange/index.html), cuyo propósito es optimizar el intercambio de información entre dentistas y otros profesionales de la salud.



OdontoFHIR puede facilitar la continuidad de atención de un mismo paciente entre distintos centros, a pesar de que:

- Se utilicen sistemas diferentes (con y sin FHIR),
- El paciente se atienda en distintos momentos y lugares,
- Existe una red nacional externa, como HL7 Chile, que pueda integrarse al flujo desde Paraguay.
## Casos de uso
Los casos de uso pueden servir como puente entre las interpretaciones conceptuales y la implementación técnica de esta guía. Para el proyecto de fin de grado se ha probado un escenario, mientras mas avance el proyecto se iran agregando diferentes escenarios.

## **Escenario 1:** Continuidad del Cuidado Odontológico.
Conoce a *Juan Prueba* tiene 20 años, es un estudiante universitario de intercambio.

### Etapa Pediátrica – Atención inicial a los 8 años
Mateo Prueba, paciente masculino de 8 años, acude al consultorio Odontokids acompañado por su madre. Motivo de consulta: sangrado de encías y mal aliento persistente. Durante el interrogatorio dirigido, la madre indica que Mateo no se cepilla correctamente y consume muchos alimentos azucarados.
La odontopediatra Dra. Julia Odonto realiza un examen clínico y detecta acumulación de sarro en piezas posteriores, inflamación gingival y sangrado espontáneo al sondaje. Se realiza una orientación en higiene oral, se programa una limpieza y se documenta el hallazgo clínico en el sistema.

> Paciente presenta acumulación de sarro en dientes posteriores y encías inflamadas con sangrado espontáneo. Se orienta en técnicas de cepillado y se programa profilaxis.

Tabla de Hallazgos – Encuentro 1
| Descripción clínica             | Observación FHIR / Condición | Código SNOMED / CIE         | Tipo de Recurso FHIR |
| ------------------------------- | ---------------------------- | --------------------------- | -------------------- |
| Acumulación de sarro en dientes | `Observation`                | `12002OF` (código ficticio) | `Observation`        |
| Encías inflamadas               | `Condition`                  | `235719002` (SNOMED)        | `Condition`          |
| Encías sangrantes               | `Observation`                | `12561000087106` (SNOMED)   | `Observation`        |
| Higiene oral deficiente         | `Observation`                | `162220003` (SNOMED)        | `Observation`        |

Procedimientos realizados – Encuentro 2
Una semana despues, se realiza una limpieza de sarro, aplicación de flúor y educación en técnica de cepillado. Mateo y su madre comprenden la importancia de mantener un adecuado control de placa.

> Se realiza profilaxis con ultrasonido, aplicación de flúor tópica y refuerzo de higiene oral. Buena tolerancia al procedimiento.

Tabla de Procedimientos – Encuentro 2
 | Procedimiento realizado        | Código SNOMED / CIE        | Tipo de recurso FHIR |
| ------------------------------ | -------------------------- | -------------------- |
| Limpieza de sarro (profilaxis) | `442021000000100` (SNOMED) | `Procedure`          |
| Aplicación de flúor            | `281789004` (SNOMED)       | `Procedure`          |
| Asistencia en higiene oral     | `71079003` (SNOMED)        | `Procedure`          |

Encuentro 3 – Control 
Tres semana despues se cita al paciente para control, donde se observa notable mejoría en las encías, sin sangrado a la exploración y buena técnica de cepillado. Se indica control semestral.

"Control exitoso. Mejora en la higiene oral y encías saludables. Se sugiere seguimiento cada 6 meses.

Mateo Prueba, ahora de 14 años, acude a la clínica Sonrisa Integral por recomendación escolar debido a molestias al morder y percepción de dientes mal alineados. Es evaluado por el ortodoncista Dr. Leandro Dientes.

Durante la evaluación clínica se detecta maloclusión de Clase II, con apiñamiento dental moderado y leve dolor en la articulación temporomandibular (ATM) al masticar.

"Paciente refiere molestia al morder, dolor leve en región preauricular y estética comprometida. Se diagnostica maloclusión de Clase II con apiñamiento dental. Se indica tratamiento ortodóncico."

🗂️ Tabla de Hallazgos – Encuentro inicial adolescente
| Descripción clínica                     | Observación FHIR / Condición | Código SNOMED / CIE  | Tipo de Recurso FHIR |
| --------------------------------------- | ---------------------------- | -------------------- | -------------------- |
| Maloclusión dental                      | `Condition`                  | `367336001` (SNOMED) | `Condition`          |
| Dolor de articulación temporomandibular | `Observation`                | `247373008` (SNOMED) | `Observation`        |
| Anomalías dentales (apiñamiento)        | `Condition`                  | `125605004` (SNOMED) | `Condition`          |

Se inicia tratamiento ortodóncico con brackets convencionales. El plan incluye controles mensuales y seguimiento durante 18 meses. También se instruye al paciente en técnicas de higiene específicas para portadores de ortodoncia.

"Se coloca aparato ortodóncico fijo. Se brinda instrucción en higiene oral adaptada al aparato. Seguimiento mensual."

🗂️ Tabla de Procedimientos – Adolescencia
| Procedimiento realizado               | Código SNOMED               | Tipo de recurso FHIR |
| ------------------------------------- | --------------------------- | -------------------- |
| Tratamiento de ortodoncia             | `428881005` (SNOMED)        | `Procedure`          |
| Educación para higiene con ortodoncia | `71079003` (SNOMED)         | `Procedure`          |
| Evaluación de dolor ATM               | `386053000` (SNOMED - Pain) | `Observation`        |

👨‍🎓 Etapa Joven Adulto – Emergencia a los 19 años
Mateo, ahora estudiante universitario, obtiene una beca de intercambio y se traslada temporalmente a otro país. Durante su estancia, presenta dolor agudo en premolar superior derecho acompañado de inflamación local.

Acude al centro odontológico universitario Global Smile, donde lo atiende la odontóloga Dra. Erika FHIR. Al acceder a su Expediente Odontológico mediante estándares FHIR, la profesional verifica antecedentes de ortodoncia y antecedentes previos de higiene deficiente. Con esta información, evita duplicar estudios radiográficos y procede a tratamiento.

"Paciente con dolor en premolar superior derecho. Antecedente de ortodoncia. Se accede a historial clínico FHIR que muestra higiene oral deficiente en la infancia y ortodoncia reciente. Se confirma absceso periapical. Se realiza tratamiento de conducto."

| Descripción clínica            | Observación / Condición | Código SNOMED        | Tipo de Recurso FHIR |
| ------------------------------ | ----------------------- | -------------------- | -------------------- |
| Dolor de diente                | `Observation`           | `422587007` (SNOMED) | `Observation`        |
| Infección periapical (absceso) | `Condition`             | `68566005` (SNOMED)  | `Condition`          |

| Procedimiento realizado | Código SNOMED       | Tipo de Recurso FHIR |
| ----------------------- | ------------------- | -------------------- |
| Tratamiento de conducto | `23406003` (SNOMED) | `Procedure`          |

