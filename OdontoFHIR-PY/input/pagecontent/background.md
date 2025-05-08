## Antecedentes

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

**Paciente:** [`Juan Sánchez`](pacientejuansanchezescenario1.html), 8 años  
**Institución:** Clínica Odontopediátrica Juan Agusto Salivar (sin sistema FHIR)  
**Profesional tratante:** [`Dra. Julia O.`](profesionalodontologodrajuliaescenario1.html)

La clínica odontopediátrica utiliza un sistema de registro clínico no interoperable, pero permite exportar datos en formato plano, sin codificación estandarizada.

> Consulta por sangrado de encías y mal aliento. Se observa acumulación de sarro, inflamación gingival y deficiente higiene oral. Se indica profilaxis y orientación.

#### Hallazgos – [`Encuentro 1`](consultaodontologica-juanodontopediatria-1.html)

- [`Acumulación de sarro`](hallazgoodontologico-juanodontopediatria-sarro.html)
- [`Encías inflamadas`](hallazgoodontologico-juanodontopediatria-inflamaciongingival.html)
- [`Encías sangrantes`](hallazgoodontologico-juanodontopediatria-enciassangrantes.html)
- [`Higiene oral deficiente`](hallazgoodontologico-juanodontopediatria-higieneoraldeficiente.html)

#### Procedimientos – [`Encuentro 2`](consultaodontologica-juanodontopediatria-2.html)

- [`Profilaxis`](procedimientoodontologico-juanodontopediatria-profilaxis.html), en respuesta a [`Higiene oral deficiente`](hallazgoodontologico-juanodontopediatria-higieneoraldeficiente.html)
- [`Aplicación de flúor`](procedimientoodontologico-juanodontopediatria-fluor.html), en respuesta a [`Encías inflamadas`](hallazgoodontologico-juanodontopediatria-inflamaciongingival.html)
- [`Educación en higiene oral`](procedimientoodontologico-juanodontopediatria-educacionhigiene.html)

#### Control – [`Encuentro 3`](consultaodontologica-juanodontopediatria-3.html)

> Se evidencia una mejoría significativa. Se indica control cada 6 meses.


Toda la información clínica de esta etapa se consolida en un documento estructurado FHIR de tipo `Composition`, el cual organiza los encuentros, hallazgos y procedimientos realizados. Este documento constituye la **Ficha Clínica Odontopediátrica** de Juan y puede consultarse en el siguiente recurso:
- [`Ficha Clínica Pediatrica`](fichaclinica-juanodontopediatria-1.html)


### Adolescencia – Atención Ortodóntica

**Edad:** 14 años  
**Clínica:** Odontologia Ada Lovelace (compatible con FHIR)  
**Profesional tratante:** [`Dr. Leandro P.`](profesionalodontologodrleandroescenario1.html)

El paciente cambia de consultorio odontológico por motivos personales. La nueva clínica utiliza OdontoFHIR, permitiendo acceder y cargar el historial clínico previo exportado por la clínica anterior. Se introduce en un Bundle con los Expendientes Odontologicos de la anterior clinica, en este caso Juan llega a esta odontologia para realizar una consulta por molestias al morder.

> Se diagnostica maloclusión Clase II con apiñamiento dental y dolor leve en la articulación temporomandibular (ATM).

#### Hallazgos – [`Encuentro 1`](consultaodontologica-juanortodoncia-1.html)

- [`Maloclusión dental`](hallazgoodontologico-juanortodoncia-maloclusion.html)
- [`Dolor en articulación temporomandibular`](hallazgoodontologico-juanortodoncia-doloratm.html)

#### Procedimientos – [`Encuentro 2`](consultaodontologica-juanortodoncia-2.html)

- [`Colocación de brackets`](procedimientoodontologico-juanortodoncia-colocacionbrackets.html)
- [`Tratamiento ortodóntico`](procedimientoodontologico-juanortodoncia-tratamientortodoncia.html)
- [`Educación para higiene oral`](procedimientoodontologico-juanodontopediatria-educacionhigiene.html)

#### Control – [`Encuentro 3`](consultaodontologica-juanortodoncia-3.html)

> Se realiza seguimiento a la evolución del tratamiento de ortodoncia.

Toda la información clínica de esta etapa se consolida en un documento estructurado FHIR de tipo `Composition`, el cual organiza los encuentros, hallazgos y procedimientos realizados. Este documento constituye la **Ficha Clínica de Ortodoncia** para Juan y puede consultarse en el siguiente recurso:
- [`Ficha Clínica Ortodoncia`](fichaclinica-juanortodoncia-1.html)


### Adultez Joven – Atención en el Extranjero

**Edad:** 20 años  
**Clínica:** Odontologia El Extranjero (extranjero, compatible con FHIR)  
**Profesional tratante:** [`Dra. Erika`](profesionalodontologodraerikaescenario1.html)

Durante una estancia universitaria en el exterior, el paciente presenta un dolor agudo y acude a consulta odontológica. El sistema clínico del país extranjero, basado en FHIR, permite acceder al expediente interoperable de Juan.

> Gracias al acceso al historial clínico completo, se evita la duplicación de estudios y se toma una decisión clínica precisa.

#### Diagnóstico y Procedimientos – [`Encuentro 1`](consultaodontologica-juaninternacional-1.html)

- [`Dolor de diente`](hallazgoodontologico-juaninternacional-dolordiente.html)
- [`Absceso periapical`](hallazgoodontologico-juaninternacional-absceso.html)
- [`Tratamiento de conducto`](procedimientoodontologico-juaninternacional-tratamientoconducto.html)

---
Toda la información clínica de esta etapa se consolida en un documento estructurado FHIR de tipo `Composition`, el cual organiza los encuentros, hallazgos y procedimientos realizados. Este documento constituye la **Ficha Clínica Extranjera** de Juan y puede consultarse en el siguiente recurso:
- [`Ficha Clínica Extranjero`](fichaclinica-juaninternacional-1.html)
