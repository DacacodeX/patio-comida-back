const express = require('express');
const router = express.Router();
const { RequestController } = require('../controllers/request.controller');

/**
 * @swagger
 * tags:
 *   name: Requests
 *   description: Endpoints para la gestión de solicitudes
 */

/**
 * @swagger
 * /api/request:
 *   post:
 *     tags: [Requests]
 *     summary: Crear una nueva solicitud
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               type:
 *                 type: string
 *                 enum: [desaparecido, encontrado, otro]
 *                 example: desaparecido
 *               name:
 *                 type: string
 *                 example: "Juan"
 *               lastName:
 *                 type: string
 *                 example: "Pérez"
 *               age:
 *                 type: integer
 *                 example: 30
 *               gender:
 *                 type: string
 *                 enum: [masculino, femenino, otro, desconocido]
 *                 example: masculino
 *               affectedStatus:
 *                 type: string
 *                 enum: [a salvo, herido, fallecido, desconocido]
 *                 example: desconocido
 *               lastSightingPlace:
 *                 type: string
 *                 example: "Parque Central"
 *               descriptionPhysics:
 *                 type: string
 *                 example: "Alto, cabello corto, ojos marrones"
 *               additionalNotes:
 *                 type: string
 *                 example: "Lleva una mochila roja"
 *               status:
 *                 type: string
 *                 enum: [pendiente, aprobado, rechazado, resuelto]
 *                 example: pendiente
 *     responses:
 *       201:
 *         description: Solicitud creada exitosamente
 *       400:
 *         description: Error al crear la solicitud
 */
router.post('/', RequestController.create);

/**
 * @swagger
 * /api/request:
 *   get:
 *     tags: [Requests]
 *     summary: Obtener todas las solicitudes
 *     responses:
 *       200:
 *         description: Lista de solicitudes obtenidas exitosamente
 *       400:
 *         description: Error al obtener todas las solicitudes
 */
router.get('/', RequestController.getAll);

/**
 * @swagger
 * /api/request/{id}:
 *   get:
 *     tags: [Requests]
 *     summary: Obtener una solicitud por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la solicitud
 *     responses:
 *       200:
 *         description: Solicitud encontrada exitosamente
 *       404:
 *         description: Solicitud no encontrada
 *       400:
 *         description: Error al obtener la solicitud
 */
router.get('/:id', RequestController.getById);

/**
 * @swagger
 * /api/request/{id}:
 *   put:
 *     tags: [Requests]
 *     summary: Actualizar una solicitud
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la solicitud
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [desaparecido, encontrado, otro]
 *               name:
 *                 type: string
 *               lastName:
 *                 type: string
 *               age:
 *                 type: integer
 *               gender:
 *                 type: string
 *                 enum: [masculino, femenino, otro, desconocido]
 *               affectedStatus:
 *                 type: string
 *                 enum: [a salvo, herido, fallecido, desconocido]
 *               lastSightingPlace:
 *                 type: string
 *               descriptionPhysics:
 *                 type: string
 *               additionalNotes:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pendiente, aprobado, rechazado, resuelto]
 *     responses:
 *       200:
 *         description: Solicitud actualizada exitosamente
 *       404:
 *         description: Solicitud no encontrada
 *       400:
 *         description: Error al actualizar la solicitud
 */
router.put('/:id', RequestController.update);

/**
 * @swagger
 * /api/request/{id}:
 *   delete:
 *     tags: [Requests]
 *     summary: Eliminar una solicitud
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la solicitud
 *     responses:
 *       200:
 *         description: Solicitud eliminada exitosamente
 *       404:
 *         description: Solicitud no encontrada
 *       400:
 *         description: Error al eliminar la solicitud
 */
router.delete('/:id', RequestController.delete);

module.exports = router;
