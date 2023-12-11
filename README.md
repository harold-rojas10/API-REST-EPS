# API REST EPS - CENTRO MEDICO
Tecnología utilizada
- Node.js
- Express.js
- MySQL
- Sequelize
- Typescript
## DESARROLLADA POR 
- Harold Eduardo Rojas Clavijo, Diciembre 2023

## REQUISITOS
   - Tener instalado Node.js
   - Tener instalado MySQL
   - Crear una base de datos en MySQL con el nombre "EPS"
    
### Nota: 

No se requiere crear tablas, pues Sequelize se encarga de crear las tablas a partir del siguiente modelo relacional
- **Doctores** = (**id_prof**, nombre, apellido, especialidad, correo)
- **Pacientes** = (**num_cedula**, nombre, apellido, fecha_nac, telefono)
- **Cita** = (**fecha_hora**, ***id_prof***, ***num_cedula***)

## PASOS PARA UTILIZAR LA API

Guia basica para ejecutar y comprobar el funcionamiento de la API REST

1.  Clonar el repositorio desde la siguiente ubicacion en GITHUB 

```bash
    https://github.com/harold-rojas10/API-REST-EPS.git

```
2. Despues de colonar y abrir el pryecto en VS-Code, se deben instalar los paquetes requeridos con el siguiente comando en la terminal del proyecto 

```bash
    npm install || sudo npm install
```
3. Terminada la instalación de los paquetes, se procede a ejecutar la API con el siguiente comando

```bash
    npm run dev
```

4. Se comprueba que esta corriendo la API, si en la terminal sale el siguiente mensaje

    ![Api Corriendo](Imagenes/API-Run.png)

5. Ya corriendo la API, con POSTMAN se prueba cada una de las peticiones establecidas para la API

# PETICIONES SOPORTADAS POR LA API

## PETICIONES GET
1. Devuelva una pagina con el siguiente mensaje "API DE EPS corriendo!" 
```bash
http://localhost:3000/
```
2. Retorna un JSON con los pacientes registrados
```bash
http://localhost:3000/api/pacientes 
```
3. Retorna un JSON con el paciente asociado al id que se solicite
```bash
http://localhost:3000/api/pacientes/:id
```
4. Retorna un JSON con los doctores registrados
```bash
http://localhost:3000/api/doctores
```
5. Retorna un JSON con el doctor asociado al id que se solicite
```bash
http://localhost:3000/api/doctores/:id
```
6. Retorna un JSON con las citas registradas
```bash
http://localhost:3000/api/citas
```
7. Retorna un JSON con la cita asociado segun los parametros query enviados de fecha_hora,id_profesional,id_numeroCedula
```bash
http://localhost:3000/api/citas/one-cita/?fecha=2023-12-11T00:00:00.000Z&profesional=id_profesional&paciente=id_numeroCedula
```
## MODELO JSON

Para las peticiones POST Y PUT, se requiere enviar un JSON con los datos necesarios para cada caso, pacientes, doctores o citas

- **JSON PACIENTES**
```bash
{
    "id_numeroCedula": number,
    "nombre": "string",
    "apellido": "string",
    "fecha_nacimiento": "Date AAAA-MM-DD",
    "telefono": "string"
}
```
- **JSON DOCTORES**
```bash
{
    "id_profesional": number,
    "nombre": "string",
    "apellido": "string",
    "correo": "string",
    "telefono": "string",
    "especialidad": "medicina_interna||medicina_general"
}
```
- **JSON CITAS**
```bash
{
    "fecha_hora": "Date 2023-12-11T00:00:00.000Z",
    "id_profesional": "number",
    "id_numeroCedula": "number"
}
```
## PETICIONES POST

1. Envia el JSON de pacientes con los datos diligenciados
```bash
http://localhost:3000/api/pacientes 
```
2. Envia el JSON de doctores con los datos diligenciados
```bash
http://localhost:3000/api/doctores
```
3. Envia el JSON de citas con los datos diligenciados
```bash
http://localhost:3000/api/citas
```
## PETICIONES PUT

1. Envia el JSON de pacientes con los datos diligenciados
```bash
http://localhost:3000/api/pacientes/:id
```
2. Envia el JSON de doctores con los datos diligenciados
```bash
http://localhost:3000/api/doctores/:id
```
3. Envia el JSON de citas con los datos diligenciados
```bash
http://localhost:3000/api/citas/?fecha=2023-12-11T00:00:00.000Z&profesional=id_profesional&paciente=id_numeroCedula
```
## PETICIONES DELETE

1. Elimina el paciente correspondiente al id
```bash
http://localhost:3000/api/pacientes/:id
```
2. Elimina el doctor correspondiente al id
```bash
http://localhost:3000/api/doctores/:id
```
3. Elimina la cita correspondiente segun los parametros query enviados de fecha_hora,id_profesional,id_numeroCedula
```bash
http://localhost:3000/api/citas/?fecha=2023-12-11T00:00:00.000Z&profesional=id_profesional&paciente=id_numeroCedula
```
