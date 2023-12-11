"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaciente = exports.updatePaciente = exports.createPaciente = exports.getPacienteById = exports.getPacientes = void 0;
const paciente_model_1 = require("../models/paciente.model");
//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
const getPacientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pacientes = yield paciente_model_1.Paciente.findAll();
        res.status(200).json({
            message: 'Los datos solicitados son:',
            data: pacientes
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error al obtener los pacientes',
            error: err.message
        });
    }
});
exports.getPacientes = getPacientes;
const getPacienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            res.status(200).json({
                message: 'El Paciente solicitado es:',
                data: paciente
            });
        }
        else {
            res.status(404).json({
                message: 'Paciente no encontrado'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al obtener los pacientes',
            error: error.message
        });
    }
});
exports.getPacienteById = getPacienteById;
const createPaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.create(req.body);
        res.status(201).json({
            message: 'Datos del Paciente creado!',
            data: paciente
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'No se pudo crear el paciente',
            error: err.stack
        });
    }
});
exports.createPaciente = createPaciente;
const updatePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            yield paciente_model_1.Paciente.update(req.body, {
                where: {
                    id_numeroCedula: req.params.id
                }
            });
            res.status(200).json({
                message: 'Paciente actualizado'
            });
        }
        else {
            res.status(404).json({
                message: 'Paciente no existe'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Paciente modificado',
            error: error.message
        });
    }
});
exports.updatePaciente = updatePaciente;
const deletePaciente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paciente = yield paciente_model_1.Paciente.findByPk(req.params.id);
        if (paciente) {
            yield paciente_model_1.Paciente.destroy({
                where: {
                    id_numeroCedula: req.params.id
                }
            });
            res.status(200).json({
                message: 'Paciente eliminado'
            });
        }
        else {
            res.status(404).json({
                message: 'Paciente no existe'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el paciente',
            error: error.message
        });
    }
});
exports.deletePaciente = deletePaciente;
