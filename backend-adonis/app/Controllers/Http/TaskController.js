"use strict";

const { formatDates } = require("../../Models/Task");

const Task = use("App/Models/Task");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // faz a checagem para listar apenas as tasks do usuário que está solicitando.
  async index({ auth, request, response, view }) {
    const tasks = await Task.all();
    let results = [];
    const check = auth.user.$attributes.id;
    tasks.rows.map((row) => {
      if (row.$attributes.user_id === check) {
        results.push(row);
      }
    });

    return results;
  }

  /**
   * Create/save a new task.
   * POST tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response }) {
    const { id } = auth.user;
    const data = request.only(["task", "description", "deadline", "concluded"]);

    const task = await Task.create({ ...data, user_id: id });
    response.status(201);

    return {
      message: "Task criada com sucesso",
      data: task,
    };
  }

  /**
   * Display a single task.
   * GET tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const task = await Task.findOrFail(params.id);
    return task;
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const task = await Task.findOrFail(params.id);

    const data = request.only([
      "task",
      "description",
      "deadline",
      "concluded",
      "user_id",
    ]);

    task.merge(data);

    await task.save();

    return task;
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    const task = await Task.findOrFail(params.id);

    if (task.user_id !== auth.user.id) {
      return response.status(401).send({ error: "Not authorized" });
    }

    await task.delete();
    return {
      message: "task deletada",
    };
  }
}

module.exports = TaskController;
