# Generalidades del Proyecto OdontoFHIR-PY
ASADS
## Estructura General del Modelo OdontoFHIR

> El siguiente diagrama representa la estructura general de los perfiles definidos en el proyecto OdontoFHIR-PY, así como sus cardinalidades:

- `{0..1}`: Elemento opcional, puede estar presente una vez como máximo.
- `{1}`: Elemento obligatorio, presente exactamente una vez.
- `{0..*}`: Elemento opcional, puede repetirse indefinidamente.
- `{1..*}`: Elemento obligatorio, puede repetirse indefinidamente.

<br>
<img src="diagrama_perfiles.png" alt="diagrama_perfiles" width="800px"/>
<br>

## Paradigmas FHIR Soportados

Este Implementation Guide soporta los siguientes paradigmas de interoperabilidad definidos por FHIR:

- Intercambio de información mediante **RESTful API**
- Agrupación de recursos clínicos mediante **Document Bundle**

## Perfiles FHIR Definidos

A continuación se describen los perfiles personalizados desarrollados en OdontoFHIR-PY:

- **Expediente Odontológico** (`Bundle`):  
  Recurso tipo `document` que agrupa todos los recursos clínicos relevantes para una atención odontológica integral.

- **Ficha Clínica** (`Composition`):  
  Documento clínico que estructura la atención recibida, incluyendo secciones para encuentros, hallazgos, procedimientos y alergias.

- **Consulta Odontológica** (`Encounter`):  
  Recurso que representa el acto clínico de consulta, incluyendo referencias al paciente, odontólogo, hallazgos y procedimientos.

- **Hallazgo Odontológico** (`Condition`):  
  Recurso para registrar condiciones clínicas observadas, asociables a dientes mediante `bodySite`.

- **Procedimiento Odontológico** (`Procedure`):  
  Recurso para documentar procedimientos realizados, con referencias a dientes, hallazgos previos y profesional actuante.

- **Profesional Odontológico** (`Practitioner`):  
  Perfil adaptado al contexto paraguayo con extensión para número de registro profesional (RPRO).

- **Paciente Odontológico** (`Patient`):  
  Perfil que incorpora datos sociales y demográficos relevantes, incluyendo extensiones para nacionalidad, dirección y pertenencia indígena.

## Extensiones Personalizadas

- **Dirección PY Paciente**:  
  Modelo extendido de dirección paraguaya. Incluye campos para Departamento, Ciudad, Barrio y Número de Casa.

- **Nacionalidad**:  
  Identifica la nacionalidad del paciente, basado en un `ValueSet` local adaptado del estándar ISO 3166-1.

- **Pueblo Indígena**:  
  Extensión para indicar pertenencia a un pueblo indígena reconocido en Paraguay.

- **Registro Profesional (RPRO)**:  
  Extensión obligatoria para profesionales, con tipo de identificador fijo `#RPRO`.

## ValueSet Utilizados

- **Documento de Identidad**:  
  Códigos para tipos de documento utilizados por pacientes y profesionales.

- **Secciones Ficha Clínica**:  
  Códigos que definen las secciones del `Composition` clínico (encuentros, procedimientos, etc.).

- **Barrio / Ciudad / Departamento**:  
  Listas jerárquicas oficiales de división territorial paraguaya.

- **Nacionalidad / Pueblos Indígenas**:  
  Terminologías locales para clasificar características socio-demográficas.

- **Anatomía Dental**:  
  Códigos anatómicos para ubicar hallazgos y procedimientos en piezas dentales específicas.

- **Hallazgos Odontológicos** / **Procedimientos Odontológicos**:  
  Terminologías clínicas desarrolladas para el ámbito odontológico nacional.

## Ejemplos de CodeSystem Personalizado

A continuación, se presentan ejemplos de códigos definidos localmente y su correspondencia con SNOMED CT y SNODENT:

### Hallazgos Odontológicos

| #  | Display    | Descripción  | CodigoOdontoFHIR | CodigoSnomed | CodigoSnodent  |
|----|------------|--------------|------------------|--------------|----------------|
| 1  | Absceso    | Absceso      | 12001OF          | 128477000    | 123286D        |
| 2  | Acumulación de sarro en dientes  | Acumulación de depósitos en dientes                                 | 12002OF          | 6288001      | 127701D        |
| 3  | Encías sangrantes                                | Encías sangrantes                                                   | 12003OF          | 86276007     | 142683D        |
| 4  | Evaluación dental previa a trasplante, cirugía u otro tratamiento | Evaluación dental previa a trasplante, cirugía u otro tratamiento | 12004OF          | 110475006    | 146328D        |
| 5  | Caries dental                                     | Caries dental                                                        | 12005OF          | 80967001     | 118065D        |
| 6  | Diabetes                                          | Diabetes mellitus                                                    | 12006OF          | 73211009     | 133643D        |
| 7  | Alteraciones en la erupción dental               | Alteraciones en la erupción dental                                  | 12007OF          | 234972003    | 144684D        |
| 8  | Boca seca (xerostomía)                           | Boca seca (xerostomía)                                              | 12008OF          | 87715008     | 138508D        |
| 9  | Erosión dental por vómito persistente            | Erosión dental por vómito persistente                               | 12009OF          | 52031007     | 104212D        |
| 10 | Evaluación de hinchazón o lesión para descartar cáncer oral | Evaluación de hinchazón o lesión para descartar cáncer oral     | 12010OF          | 65124004     | 128015D        |
| 11 | Infección                                         | Infección                                                            | 12011OF          | 40733004     | 138169D        |
| 12 | Higiene oral deficiente                          | Falta de higiene oral, sarro dental                                 | 12012OF          | 110299009    | 140234D        |
| 13 | Ausencia de atención dental reciente             | Ausencia de atención dental reciente (No consultó con un dentista en los últimos 12 - 18 meses) | 12013OF |                  | 212130D        |
| 14 | Maloclusión                                       | Maloclusión dental                                                   | 12014OF          | 47944004     | 150365D        |
| 15 | Lesión oral                                       | Lesión oral                                                          | 12015OF          | 1071000119107| 180678D        |
| 16 | Embarazo                                          | Embarazo                                                             | 12016OF          | 77386006     | 174950D        |
| 17 | Encías doloridas                                  | Encías doloridas                                                    | 12017OF          | 11114002     | 104458D        |
| 18 | Encías inflamadas                                 | Encías inflamadas                                                   | 12018OF          | 309685001    | 148393D        |
| 19 | Dolor de la articulación temporomandibular        | Dolor de la articulación temporomandibular (ATM)                    | 12019OF          | 298376001    | 167337D        |
| 20 | Anomalías dentales                                | Anomalías dentales (erosión o desgaste excesivo)                    | 12020OF          | 82212003     | 135988D        |
| 21 | Dolor de diente                                   | Dolor de diente                                                      | 12021OF          | 27355003     | 131687D        |
| 22 | Trauma dental                                     | Trauma dental                                                        | 12022OF          | 397869004    | 128117D        |


### Procedimientos Odontológicos 13:41 / 14:52

| #  | Display                                     | Descripción                                                                                    | Código OdontoFHIR | Código SNOMED       |
|----|---------------------------------------------|------------------------------------------------------------------------------------------------|-------------------|---------------------|
| 1  | Tratamiento de ortodoncia                  | Procedimiento para corregir la posición y alineación de los dientes y la mordida.               | 14001OF           | 71369009             |
| 2  | Restauración estética dental               | Mejora estética de restauraciones dentales insatisfactorias.                                    | 14002OF           | 109730006            |
| 3  | Remoción de prótesis dental                | Extracción de una prótesis dental removible o fija.                                             | 14003OF           | 448434009            |
| 4  | Implante de prótesis dental                | Inserción quirúrgica de prótesis en hueso maxilar o mandibular.                                 | 14004OF           | 789147006            |
| 5  | Restauración con corona metálica           | Colocación de corona metálica sobre diente dañado.                                              | 14005OF           | 1256041000           |
| 6  | Blanqueamiento en dientes no vitales       | Blanqueo con peróxido en dientes desvitalizados.                                                | 14006OF           | 104801000220102      |
| 7  | Blanqueamiento en dientes vitales          | Blanqueo con peróxido en dientes con pulpa viva.                                                | 14007OF           | 104791000220103      |
| 8  | Limpieza de sarro                          | Remoción de depósitos como placa o cálculo.                                                     | 14008OF           | 1260189003           |
| 9  | Extracción de diente permanente            | Remoción por indicación clínica u ortodóntica.                                                  | 14009OF           | 57703000             |
| 10 | Extracción de diente supernumerario        | Remoción quirúrgica de un diente adicional.                                                     | 14010OF           | 709108007            |
| 11 | Extracción de diente temporal              | Remoción de un diente de leche.                                                                 | 14011OF           | 26119007             |
| 12 | Tratamiento de conducto                    | Procedimiento endodóntico para remover la pulpa dañada.                                         | 14012OF           | 1264277001           |
| 13 | Asistencia en higiene oral                 | Actividades para mantener o mejorar la higiene bucal.                                           | 14013OF           | 827136003            |
| 14 | Aplicación de flúor                        | Aplicación de flúor para fortalecer el esmalte dental.                                          | 14014OF           | 68071007             |
| 15 | Prevención de caries                       | Acciones clínicas para evitar la aparición de caries.                                           | 14015OF           | 426482000            |
| 16 | Profilaxis y flúor en niños                | Limpieza profesional y aplicación de flúor en pacientes pediátricos.                            | 14016OF           | 70468009             |
| 17 | Limpieza de caries                         | Eliminación de tejido cariado antes de restauración.                                            | 14017OF           | -                    |
