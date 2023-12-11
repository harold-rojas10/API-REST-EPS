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
exports.deleteDoctor = exports.updateDoctor = exports.createDoctor = exports.getDoctorById = exports.getDoctores = void 0;
const doctores_model_1 = require("../models/doctores.model");
//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
const getDoctores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctores = yield doctores_model_1.Doctor.findAll();
        res.status(200).json({
            message: 'Los datos solicitados son:',
            data: doctores
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'Error al obtener los doctores',
            error: err.message
        });
    }
});
exports.getDoctores = getDoctores;
const getDoctorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            res.status(200).json({
                message: 'El Doctor solicitado es:',
                data: doctor
            });
        }
        else {
            res.status(404).json({
                message: 'Doctor no encontrado'
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
exports.getDoctorById = getDoctorById;
const createDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.create(req.body);
        res.status(201).json({
            message: 'Doctor creado!',
            data: doctor
        });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            message: 'No se pudo crear el doctor',
            error: err.stack
        });
    }
});
exports.createDoctor = createDoctor;
const updateDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            yield doctores_model_1.Doctor.update(req.body, {
                where: {
                    id_profesional: req.params.id
                }
            });
            res.status(200).json({
                message: 'Doctor actualizado'
            });
        }
        else {
            res.status(404).json({
                message: 'Doctor no existe'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al modificar el doctor',
            error: error.message
        });
    }
});
exports.updateDoctor = updateDoctor;
const deleteDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctor = yield doctores_model_1.Doctor.findByPk(req.params.id);
        if (doctor) {
            yield doctores_model_1.Doctor.destroy({
                where: {
                    id_profesional: req.params.id
                }
            });
            res.status(200).json({
                message: 'Doctor eliminado'
            });
        }
        else {
            res.status(404).json({
                message: 'Doctor no existe'
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el doctor',
            error: error.message
        });
    }
});
exports.deleteDoctor = deleteDoctor;
