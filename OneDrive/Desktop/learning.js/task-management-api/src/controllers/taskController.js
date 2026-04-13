// Task Controller
// Handles task operations like create, read, update, delete

/**
 * Get all tasks
 * GET /api/tasks
 */
const getAllTasks = async (req, res) => {
  try {
    // TODO: Fetch all tasks from MongoDB
    // const tasks = await Task.find();

    const tasks = [
      {
        id: '1',
        title: 'Complete Project',
        description: 'Finish the project setup',
        status: 'pending',
        priority: 'high',
        userId: 1,
      },
      {
        id: '2',
        title: 'Review Code',
        description: 'Review team code',
        status: 'in_progress',
        priority: 'medium',
        userId: 1,
      },
    ];

    res.status(200).json({
      success: true,
      message: 'Tasks retrieved successfully',
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tasks',
      error: error.message,
    });
  }
};

/**
 * Get task by ID
 * GET /api/tasks/:id
 */
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Fetch task from MongoDB
    // const task = await Task.findById(id);

    const task = {
      id,
      title: 'Sample Task',
      description: 'This is a sample task',
      status: 'pending',
      priority: 'medium',
      userId: 1,
    };

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task retrieved successfully',
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve task',
      error: error.message,
    });
  }
};

/**
 * Create a new task
 * POST /api/tasks
 */
const createTask = async (req, res) => {
  try {
    const { title, description, priority, status } = req.body;
    const userId = req.user?.userId || 1; // Get from JWT token

    // TODO: Create task in MongoDB
    // const newTask = new Task({
    //   title,
    //   description,
    //   priority,
    //   status,
    //   userId,
    //   createdAt: new Date(),
    // });
    // await newTask.save();

    const newTask = {
      id: 'new_id',
      title,
      description,
      priority,
      status,
      userId,
      createdAt: new Date(),
    };

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create task',
      error: error.message,
    });
  }
};

/**
 * Update task
 * PUT /api/tasks/:id
 */
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;

    // TODO: Update task in MongoDB
    // const updatedTask = await Task.findByIdAndUpdate(
    //   id,
    //   { title, description, status, priority, updatedAt: new Date() },
    //   { new: true }
    // );

    const updatedTask = {
      id,
      title,
      description,
      status,
      priority,
      updatedAt: new Date(),
    };

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update task',
      error: error.message,
    });
  }
};

/**
 * Delete task
 * DELETE /api/tasks/:id
 */
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Delete task from MongoDB
    // await Task.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete task',
      error: error.message,
    });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
