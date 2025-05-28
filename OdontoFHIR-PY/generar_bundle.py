import os, json

# Carpeta de entrada
carpeta = "./fsh-generated/resources"

# Bundle base
bundle = {
    "resourceType": "Bundle",
    "type": "transaction",
    "entry": []
}


def agregar_recursos(tipo, filtro_id=None):
    
    for archivo in sorted(os.listdir(carpeta)):
        if archivo.endswith(".json"):
            ruta = os.path.join(carpeta, archivo)
            with open(ruta, encoding="utf-8") as f:
                recurso = json.load(f)
                if recurso["resourceType"] == tipo:
                    if filtro_id == "Extension":
                        # Solo las StructureDefinition de extensiones
                        if recurso.get("type") != "Extension":
                            continue
                    elif filtro_id == "Perfil":
                        # Solo las StructureDefinition que NO son extensiones
                        if recurso.get("type") == "Extension":
                            continue

                    bundle["entry"].append({
                        "resource": recurso,
                        "request": {
                            "method": "PUT",
                            "url": f'{recurso["resourceType"]}/{recurso["id"]}'
                        }
                    })

# Agregar en orden
agregar_recursos("CodeSystem")
agregar_recursos("ValueSet")
agregar_recursos("StructureDefinition", filtro_id="Extension")
agregar_recursos("StructureDefinition", filtro_id="Perfil")

# Guardar el bundle
with open("bundle-upload.json", "w", encoding="utf-8") as f:
    json.dump(bundle, f, indent=2, ensure_ascii=False)

print("Bundle generado: bundle-upload.json")
