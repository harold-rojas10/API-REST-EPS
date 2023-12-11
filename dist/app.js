"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const paciente_routes_1 = __importDefault(require("./routes/paciente.routes"));
const doctor_routes_1 = __importDefault(require("./routes/doctor.routes"));
const citas_routes_1 = __importDefault(require("./routes/citas.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
app.use((0, body_parser_1.urlencoded)());
// Ruta base
app.get('/', (req, res) => {
    res.send('API DE EPS corriendo!');
});
app.use('/api/pacientes', paciente_routes_1.default);
app.use('/api/doctores', doctor_routes_1.default);
app.use('/api/citas', citas_routes_1.default);
// Error de rutas
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});
// Error de servidor
app.use((req, res) => {
    res.status(500).send('500: Internal server error');
});
config_1.default.sync()
    .then(() => {
    console.log('Conexion Exitosa!!');
})
    .catch((err) => {
    console.log(`Error en la conexión ${err}`);
});
app.listen(3000, () => {
    console.log(`Servidor corriendo en: http://localhost:3000`);
});
