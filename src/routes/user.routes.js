const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/user.controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints para la gestión de usuarios
 */

/**
 * @swagger
 * /api/user:
 *   get:
 *     tags: [Users]
 *     summary: Obtener todos los usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
 *       400:
 *         description: Error al obtener los usuarios
 */
router.get('/', UserController.getAll);

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Obtener un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error al obtener el usuario
 */
router.get('/:id', UserController.getById);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Actualizar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "juanperez"
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 example: "nuevaContraseña123"
 *               role:
 *                 type: string
 *                 enum: [admin, user]
 *                 example: "admin"
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error al actualizar el usuario
 */
router.put('/:id', UserController.update);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Eliminar un usuario
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 *       400:
 *         description: Error al eliminar el usuario
 */
router.delete('/:id', UserController.delete);

module.exports = router;
