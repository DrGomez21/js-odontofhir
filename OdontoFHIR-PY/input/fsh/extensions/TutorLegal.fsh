//Declaracion
Extension: TutorLegal

//Keywords
Id: tutor-legal
Title: "Tutor Legal"
Description: "Extensión que indica que este contacto actúa como tutor legal del paciente."

//Rules
* value[x] only boolean
* valueBoolean ^short = "Es tutor legal"
* valueBoolean ^definition = "Indica si este contacto tiene el rol de tutor legal del paciente."