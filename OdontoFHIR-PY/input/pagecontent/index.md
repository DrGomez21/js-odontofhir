# OdontoFHIR-PY

## Aspectos Generales

**OdontoFHIR-PY** es una iniciativa que busca desarrollar un sistema interoperable de ficha clínica odontológica basado en el estándar [HL7-FHIR](https://hl7.org/fhir/), permitiendo la gestión estructurada y el intercambio seguro de información clínica entre distintos sistemas de salud.

Como parte de la validación de esta propuesta, el proyecto contempla la ejecución de un experimento de interoperabilidad entre OdontoFHIR y tres sistemas: uno creado para trabajar con FHIR, uno no compatible con FHIR (interoperabilidad mediada mediante middleware) y otro desarrollado en un pais diferente por la organización [HL7 Chile](https://hl7chile.cl), con el objetivo de demostrar la viabilidad del intercambio de información clínica odontológica a nivel internacional.

Esta guia fue desarrollada para demostrar los perfiles FHIR personalizados, adaptados a los requerimientos específicos del contexto de atención odontológica en Paraguay.

<img src="odontofhir_esquema.png" alt="odontofhir_esquema" width="800px" />


## Autores

| **Nombre**                     | **Correo Electrónico**               | **Afiliación**                              |
|-------------------------------|--------------------------------------|---------------------------------------------|
| Diego Rubén Gómez Morel       | diegoruben10.drgm@fpuna.edu.py       | [Facultad Politécnica - UNA](https://www.pol.una.py/) |
| José María Cabrera Peralta    | jaguarete2000@fpuna.edu.py           | [Facultad Politécnica - UNA](https://www.pol.una.py/) |

### Alcance

Esta Guía de Implementación define los siguientes **8 Perfiles FHIR**:

- `Bundle`: Expediente Odontológico
- `Composition`: Ficha Clínica
- `Encounter`: Consulta Odontológica
- `Observation`: Hallazgos Odontológicos
- `Procedure`: Procedimientos Odontológicos
- `Patient`: Paciente Odontológico
- `Practitioner`: Profesional Odontológico
- `AllergyIntolerance`: Registro de Alergias

Asimismo, establece **7 categorías de terminologías** (CodeSystems y ValueSets):

- Anatomía Dental
- Hallazgos Odontológicos
- Procedimientos Odontológicos
- Secciones de la Ficha Clínica
- Pueblos Indígenas
- Direcciones geográficas de Paraguay
- Documentos de Identidad

Se incluye **1 escenario de uso** inicial:

- [**Escenario 1:**](background.md#escenario-1) *Continuidad del Cuidado Odontológico*: Un paciente inicia su tratamiento en un consultorio odontológico pediátrico. Años más tarde, al cambiar de profesional durante la adolescencia, el nuevo odontólogo accede al historial clínico del paciente gracias al expediente clínico interoperable generado previamente. Ya como joven universitario, el paciente logra conseguir una beca para viajar a otro pais donde por dolor de muelas se ve obligado a visitar una odontologia, el profesional que antiende al joven accede, mediante el uso de estándares FHIR, al **Expediente Odontológico** almacenado en su país de origen, asegurando continuidad asistencial y evitando duplicidad de procedimientos.

**OdontoFHIR** busca garantizar la portabilidad, accesibilidad y seguridad de la información clínica a lo largo del tiempo y del lugar fisico.



### Audiencia

Esta guía fue escrita y dirigida a estudiantes de informática sin importar su area, carreras afines a la medicina que deseen iniciarse en el uso de estándares FHIR. Desarrolladores de sistemas clínicos odontológicos interesados en aplicar interoperabilidad en Paraguay. Profesionales de la salud y responsables de políticas públicas en salud digital.

**¿A quién beneficia OdontoFHIR?**

- A los pacientes, facilitando el acceso a su historial odontológico en cualquier centro habilitado.
- A los profesionales odontológicos, permitiéndoles dar seguimiento clínico con datos completos, incluso en contextos de urgencia.
- A la comunidad de desarrolladores, ofreciendo una guía reutilizable y abierta para construir soluciones interoperables.


### Reconocimientos

Esta guía fue desarrollada como parte de un trabajo de fin de grado en la Facultad Politécnica de la Universidad Nacional de Asunción.

Queremos agradecer profundamente a:

- **Lic. Romina Rojas**, tutora del trabajo, quien con compromiso y rigor académico nos ayudó a pulir y mejorar cada entrega.
- **Dr. Sosa Cabrera**, por su apoyo incondicional, guía académica y motivación constante desde el inicio del proyecto. Le agradecemos especialmente por habernos introducido a esta iniciativa, depositando en nosotros su confianza desde el primer momento.
- **César Viaux**, Director de HL7 Chile, por su colaboración desinteresada, asesoramiento técnico y confianza hacia nuestro equipo.
