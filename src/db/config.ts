import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import { Paciente } from '../models/paciente.model';
import { Cita } from '../models/cita.model';
import { Doctor } from '../models/doctores.model';

dotenv.config();

const connection = new Sequelize({
  dialect: 'mysql',
  host: process.env.HOST,
  username: 'root',
  port: Number(3306),
  password: '$Adm1n10',
  database: 'EPS',
  logging: false,
  models: [Paciente, Cita, Doctor]
})

export default connection;