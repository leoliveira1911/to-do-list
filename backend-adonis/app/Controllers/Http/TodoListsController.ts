import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TodoList from 'App/Models/TodoList'


export default class TodoListsController {

    public async store({ request, response }: HttpContextContract) {

        const body = request.body()

        const task = await TodoList.create(body)

        response.status(201)

        return {
            message: "Task criada com sucesso",
            data: task,

        }



    }

    public async index() {

        const tasks = await TodoList.all()
        return {
            data: tasks,
        }
    }

    public async show({ params }: HttpContextContract) {
        const task = await TodoList.findOrFail(params.id)

        return {
            data: task,
        }
    }

    public async destroy({ params }: HttpContextContract) {
        const task = await TodoList.findOrFail(params.id)
        await task.delete()
        return {
            message: "task deletada com sucesso!",
        }
    }

    public async update({ params, request }: HttpContextContract) {
        const body = request.body()
        const task = await TodoList.findOrFail(params.id)

        task.title = body.title
        task.description = body.description
        task.deadline = body.deadline
        task.concluded = body.concluded

        await task.save()

        return {
            message: "momento atualizado com sucesso",
            data: task
        }


    }

}
