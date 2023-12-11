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
exports.deleteCita = exports.updateCita = exports.createCita = exports.getOneCita = exports.getCitas = void 0;
const cita_model_1 = require("../models/cita.model");
//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
const getCitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const citas = yield cita_model_1.Cita.findAll();
        res.status(200).json({
            message: 'Operación exitosa',
            data: citas
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error al obtener las citas',
            error: err.message
        });
    }
});
exports.getCitas = getCitas;
const getOneCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = req.query;
        const cita = yield cita_model_1.Cita.findOne({
            where: {
                fecha_hora: fecha,
                id_profesional: profesional,
                id_numeroCedula: paciente
            }
        });
        if (cita) {
            res.status(200).json({
                message: 'Cita encontrada',
                data: cita
            });
        }
        else {
            res.status(404).json({
                message: 'Cita no encontrada'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al obtener los doctores',
            error: error.message
        });
    }
});
exports.getOneCita = getOneCita;
const createCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cita = yield cita_model_1.Cita.create(req.body);
        res.status(201).json({
            message: 'Cita creada!',
            data: cita
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'No se pudo crear la cita',
            error: err.message
        });
    }
});
exports.createCita = createCita;
const updateCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = req.query;
        const cita = yield cita_model_1.Cita.findOne({
            where: {
                fecha_hora: fecha,
                id_profesional: profesional,
                id_numeroCedula: paciente
            }
        });
        if (cita) {
            yield cita_model_1.Cita.update(req.body, {
                where: {
                    fecha_hora: fecha,
                    id_profesional: profesional,
                    id_numeroCedula: paciente
                }
            });
            res.status(200).json({
                message: 'Cita actualizada'
            });
        }
        else {
            res.status(404).json({
                message: 'Cita no existe'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al modificar la cita',
            error: error.message
        });
    }
});
exports.updateCita = updateCita;
const deleteCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { profesional, paciente, fecha } = req.query;
        const cita = yield cita_model_1.Cita.findOne({
            where: {
                fecha_hora: fecha,
                id_profesional: profesional,
                id_numeroCedula: paciente
            }
        });
        if (cita) {
            yield cita_model_1.Cita.destroy({
                where: {
                    fecha_hora: fecha,
                    id_profesional: profesional,
                    id_numeroCedula: paciente
                }
            });
            res.status(200).json({
                message: 'Cita eliminada'
            });
        }
        else {
            res.status(404).json({
                message: 'Cita no existe'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al eliminar la cita',
            error: error.message
        });
    }
});
exports.deleteCita = deleteCita;
