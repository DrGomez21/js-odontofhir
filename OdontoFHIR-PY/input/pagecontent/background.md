## Antecedentes y Justificación

En Paraguay, la mayoría de los consultorios odontológicos aún no cuentan con sistemas electrónicos para gestionar las fichas clínicas de sus pacientes. Esta carencia compromete la calidad y precisión del acceso a la información clínica, generando procesos fragmentados y poco eficientes.

Además, los sistemas existentes carecen de estándares de interoperabilidad, entendida como la capacidad de que dos o más sistemas intercambien y utilicen información compartida de manera efectiva. En este contexto, el proyecto **OdontoFHIR-PY** propone una solución interoperable basada en el estándar internacional [HL7 FHIR](https://hl7.org/fhir/), orientada a mejorar la gestión y el intercambio de datos clínicos en odontología.

La falta de interoperabilidad representa un desafío, pero también una oportunidad para integrar a los consultorios odontológicos dentro de una infraestructura de salud digital nacional e incluso regional.

---

## Formularios Referenciales Utilizados

Se recopilaron y analizaron formularios clínicos utilizados actualmente en clínicas odontológicas de Paraguay, los cuales sirvieron como base para diseñar los perfiles regionalizados de esta guía.


<img src="formulario.png" alt="formulario1" width="800px" />
<img src="formulario2.png" alt="formulario2" width="800px" />


## Antecedentes Internacionales

Uno de los referentes identificados es el proyecto de la [Asociación Dental Americana (ADA)](https://www.ada.org/), que buscó mejorar la comunicación entre odontólogos y médicos de atención primaria. El problema: procesos de derivación fragmentados realizados en papel o por correo electrónico.

Como solución, se propuso el uso de estándares HL7 CDA y FHIR, derivando en la creación de la guía [Dental Data Exchange](https://build.fhir.org/ig/HL7/dental-data-exchange/index.html), que define perfiles específicos para optimizar el intercambio de información clínica odontológica en entornos heterogéneos.


# Escenarios de Implementación

## Escenario 1: Continuidad del Cuidado Odontológico

Este escenario describe cómo el uso de OdontoFHIR permite mantener el historial clínico del paciente a través del tiempo y de diferentes instituciones, incluso entre países.

### Infancia – Atención Odontopediátrica

**Paciente:** Juan Prueba, 8 años.  
**Institución:** Clínica A (sin sistema FHIR).  
**Profesional:** Dra. Julia Odonto

> Consulta por sangrado de encías y mal aliento. Se detecta sarro, inflamación gingival y deficiente higiene oral. Se indica profilaxis y orientación.

#### Hallazgos - Encuentro 1

| Descripción clínica             | Recurso FHIR                       | Código SNOMED (si disponible) |
| ------------------------------- | ---------------------------------- | ----------------------------- |
| Acumulación de sarro            | `Observation` (`Hallazgo`)         | *Sin codificación*            |
| Encías inflamadas               | `Observation` (`Hallazgo`)         | *Sin codificación*            |
| Encías sangrantes               | `Observation` (`Hallazgo`)         | *Sin codificación*            |
| Higiene oral deficiente         | `Observation` (`Hallazgo`)         | *Sin codificación*            |

#### Procedimientos - Encuentro 2

Una semana después, se realiza:

- Profilaxis con ultrasonido
- Aplicación de flúor
- Reforzamiento de higiene oral

| Procedimiento                  | Recurso FHIR         | Código SNOMED (si disponible) |
| ----------------------------- | -------------------- | ----------------------------- |
| Limpieza de sarro             | `Procedure`          | *Sin codificación*            |
| Aplicación de flúor           | `Procedure`          | *Sin codificación*            |
| Educación en higiene oral     | `Procedure`          | *Sin codificación*            |

#### Control - Encuentro 3

> Se observa mejoría significativa. Se indica control cada 6 meses.

---

### Adolescencia – Atención Ortodóntica

**Edad:** 14 años  
**Clínica:** Sonrisa Integral  
**Profesional:** Dr. Leandro P.

> Consulta por molestias al morder. Se diagnostica maloclusión Clase II con apiñamiento dental. Dolor leve en la ATM.

#### Hallazgos

| Descripción clínica                     | Recurso FHIR   | Código SNOMED        |
| --------------------------------------- | -------------- | -------------------- |
| Maloclusión dental                      | `Condition`    | 367336001            |
| Dolor en articulación temporomandibular | `Observation`  | 247373008            |
| Apiñamiento dental                      | `Condition`    | 125605004            |

#### Procedimientos

| Procedimiento                       | Recurso FHIR  | Código SNOMED   |
| ---------------------------------- | ------------- | --------------- |
| Colocación de brackets             | `Procedure`   | 428881005       |
| Educación para higiene oral        | `Procedure`   | 71079003        |

### Joven Adulto – Atención en el Extranjero

**Edad:** 20 años  
**Clínica:** Global Smile (extranjero)  
**Profesional:** Dra. Erika FHIR

> Consulta por dolor agudo en premolar superior derecho. Se accede al expediente odontológico interoperable y se evita duplicar estudios.

#### Diagnóstico y Procedimientos

| Descripción clínica                | Recurso FHIR   | Código SNOMED   |
| ---------------------------------- | -------------- | --------------- |
| Dolor de diente                    | `Observation`  | 422587007       |
| Absceso periapical                 | `Condition`    | 68566005        |

| Procedimiento realizado            | Recurso FHIR   | Código SNOMED   |
| ---------------------------------- | -------------- | --------------- |
| Tratamiento de conducto            | `Procedure`    | 23406003        |

