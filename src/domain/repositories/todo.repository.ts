import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { TodoEntity } from '../entities/todo.entity';


//!Firma para implementar el repository
export abstract class TodoRepository {

  //! Firma para implementar los metodos
  abstract create( createTodoDto: CreateTodoDto ): Promise<TodoEntity>;

  //todo: paginación
  abstract getAll(): Promise<TodoEntity[]>;

  abstract findById( id: number ): Promise<TodoEntity>;
  abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>;
  abstract deleteById( id: number ): Promise<TodoEntity>;

}