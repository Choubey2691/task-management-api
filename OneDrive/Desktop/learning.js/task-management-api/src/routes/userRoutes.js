// User Routes
// Routes for user management (get, update, delete users)

const express = require('express');
const userController = require('../controllers/userController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * GET /api/users
 * Get all users
 */
router.get('/', verifyToken, userController.getAllUsers);

/**
 * GET /api/users/:id
 * Get user by ID
 */
router.get('/:id', verifyToken, userController.getUserById);

/**
 * PUT /api/users/:id
 * Update user profile
 */
router.put('/:id', verifyToken, userController.updateUser);

/**
 * DELETE /api/users/:id
 * Delete user
 */
router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;
