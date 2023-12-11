import express  from "express";
import {Request, Response} from 'express'
import connection from './db/config';
import { urlencoded, json } from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import pacienteRoutes from './routes/paciente.routes'
import doctorRoutes from './routes/doctor.routes'
import citaRoutes from './routes/citas.routes'

dotenv.config();

const app = express();

app.use( json() );
app.use( cors() );
app.use( urlencoded() );

// Ruta base
app.get('/', (req: Request, res: Response) => {
  res.send('API DE EPS corriendo!')
})

app.use('/api/pacientes', pacienteRoutes)
app.use('/api/doctores', doctorRoutes)
app.use('/api/citas', citaRoutes)

// Error de rutas
app.use( (req: Request, res: Response) => {
  res.status(404).send('404: Page not found')
})

// Error de servidor
app.use( (req: Request, res: Response) => {
  res.status(500).send('500: Internal server error')
})


connection.sync()
.then(() => {
  console.log('Conexion Exitosa!!')
})
.catch ((err) =>{
  console.log(`Error en la conexión ${err}`)
})

app.listen(3000, () => {
  console.log(`Servidor corriendo en: http://localhost:3000`)
})



