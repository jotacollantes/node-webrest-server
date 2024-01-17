import { Router } from 'express';
import { TodosController } from './controller';
import { TodoDatasourceImpl } from '../../implementations/datasource/todo.datasource.impl';
import { TodoRepositoryImpl } from '../../implementations/repositories/todo.repository.impl';


export class TodoRoutes {


  static get routes(): Router {

    const router = Router();
    //!Creo una instancia del datasource Implementation
    const datasource = new TodoDatasourceImpl();
    //!Creo una instancia del todoRepository Implementation y le inyecto el datasource
    const todoRepository = new TodoRepositoryImpl( datasource );
    //! Creo una instancia de Todoscontroler y le inyecto el todoRepository
    const todoController = new TodosController(todoRepository);    

    router.get('/', todoController.getTodos );
    router.get('/:id', todoController.getTodoById );
    
    router.post('/', todoController.createTodo );
    router.put('/:id', todoController.updateTodo );
    router.delete('/:id', todoController.deleteTodo );


    return router;
  }


}

