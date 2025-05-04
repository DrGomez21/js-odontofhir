## Antecedentes y Justificación

En Paraguay, la mayoría de los consultorios odontológicos aún no cuentan con sistemas electrónicos para gestionar las fichas clínicas de sus pacientes. Esta carencia compromete la calidad y precisión del acceso a la información clínica, generando procesos fragmentados y poco eficientes.

Además, los sistemas existentes carecen de estándares de interoperabilidad, entendida como la capacidad de que dos o más sistemas intercambien y utilicen información compartida de manera efectiva. En este contexto, el proyecto **OdontoFHIR-PY** propone una solución interoperable basada en el estándar internacional [HL7 FHIR](https://hl7.org/fhir/), orientada a mejorar la gestión y el intercambio de datos clínicos en odontología.

La falta de interoperabilidad representa un desafío, pero también una oportunidad para integrar a los consultorios odontológicos dentro de una infraestructura de salud digital nacional e incluso regional.

---

## Formularios Referenciales Utilizados

Se recopilaron y analizaron formularios clínicos utilizados actualmente en clínicas odontológicas de Paraguay, los cuales sirvieron como base para diseñar los perfiles regionalizados de esta guía.

<div>
<img src="formulario.png" alt="formulario1" width="400px"/>
<img src="formulario2.png" alt="formulario2" width="400px"/>
</div>

<p></p>


## Antecedentes Internacionales

Uno de los referentes identificados es el proyecto de la [Asociación Dental Americana (ADA)](https://www.ada.org/), que buscó mejorar la comunicación entre odontólogos y médicos de atención primaria. El problema: procesos de derivación fragmentados realizados en papel o por correo electrónico.

Como solución, se propuso el uso de estándares HL7 CDA y FHIR, derivando en la creación de la guía [Dental Data Exchange](https://build.fhir.org/ig/HL7/dental-data-exchange/index.html), que define perfiles específicos para optimizar el intercambio de información clínica odontológica en entornos heterogéneos.


# Escenarios de Implementación

## Escenario 1: Continuidad del Cuidado Odontológico

Este escenario ilustra cómo el uso de OdontoFHIR permite mantener la continuidad del historial clínico del paciente a lo largo del tiempo y a través de diferentes instituciones, incluso en distintos países. Se presenta la evolución de un paciente desde la infancia hasta la adultez joven, con atención odontológica en diversos contextos.

---

### Infancia – Atención Odontopediátrica

**Paciente:** Juan Prueba, 8 años  
**Institución:** Clínica Odontopediátrica (sin sistema FHIR)  
**Profesional tratante:** Dra. Julia O.

La clínica odontopediátrica utiliza un sistema de registro clínico no interoperable, pero permite exportar datos en formato plano, sin codificación estandarizada.

> Consulta por sangrado de encías y mal aliento. Se observa acumulación de sarro, inflamación gingival y deficiente higiene oral. Se indica profilaxis y orientación.

#### Hallazgos – Encuentro 1

| Descripción clínica         | Recurso FHIR           | Código SNOMED         |
|----------------------------|------------------------|------------------------|
| Acumulación de sarro       | `Observation` (Hallazgo) | *Sin codificación*     |
| Encías inflamadas          | `Observation` (Hallazgo) | *Sin codificación*     |
| Encías sangrantes          | `Observation` (Hallazgo) | *Sin codificación*     |
| Higiene oral deficiente    | `Observation` (Hallazgo) | *Sin codificación*     |

#### Procedimientos – Encuentro 2 (1 semana después)

- Profilaxis con ultrasonido  
- Aplicación de flúor  
- Reforzamiento de técnicas de higiene oral

| Procedimiento                  | Recurso FHIR | Código SNOMED         |
|-------------------------------|--------------|------------------------|
| Limpieza de sarro             | `Procedure`  | *Sin codificación*     |
| Aplicación de flúor           | `Procedure`  | *Sin codificación*     |
| Educación en higiene oral     | `Procedure`  | *Sin codificación*     |

#### Control – Encuentro 3

> Se evidencia una mejoría significativa. Se indica control cada 6 meses.

---

### Adolescencia – Atención Ortodóntica

**Edad:** 14 años  
**Clínica:** Sonrisa Integral (compatible con FHIR)  
**Profesional tratante:** Dr. Leandro P.

El paciente cambia de consultorio odontologico por motivos personales. La nueva clínica utiliza OdontoFHIR, permitiendo acceder y cargar el historial clínico previo exportado por la clínica anterior. Se realiza una consulta por molestias al morder.

> Se diagnostica maloclusión Clase II con apiñamiento dental y dolor leve en la articulación temporomandibular (ATM).

#### Hallazgos

| Descripción clínica                     | Recurso FHIR | Código SNOMED |
|----------------------------------------|--------------|----------------|
| Maloclusión dental                     | `Condition`  | 367336001      |
| Dolor en articulación temporomandibular | `Observation`| 247373008      |
| Apiñamiento dental                     | `Condition`  | 125605004      |

#### Procedimientos

| Procedimiento                | Recurso FHIR | Código SNOMED |
|-----------------------------|--------------|----------------|
| Colocación de brackets      | `Procedure`  | 428881005      |
| Educación para higiene oral | `Procedure`  | 71079003       |

---

### Adultez Joven – Atención en el Extranjero

**Edad:** 20 años  
**Clínica:** Global Smile (extranjero, compatible con FHIR)  
**Profesional tratante:** Dra. Erika

Durante una estancia universitaria en el exterior, el paciente presenta un dolor agudo y acude a consulta odontológica. El sistema clínico del país extranjero, basado en FHIR, permite acceder al expediente interoperable de Juan.

> Gracias al acceso al historial clínico completo, se evita la duplicación de estudios y se toma una decisión clínica precisa.

#### Diagnóstico y Procedimientos

| Descripción clínica        | Recurso FHIR | Código SNOMED |
|---------------------------|--------------|----------------|
| Dolor de diente           | `Observation`| 422587007      |
| Absceso periapical        | `Condition`  | 68566005       |

| Procedimiento realizado    | Recurso FHIR | Código SNOMED |
|---------------------------|--------------|----------------|
| Tratamiento de conducto   | `Procedure`  | 23406003       |

