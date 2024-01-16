

export class CreateTodoDto {
  //Este constructor solo se podra llamar localmente
  private constructor(
    public readonly text: string,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateTodoDto?]  {

    const { text } = props;

    if ( !text ) return ['Text property is required', undefined];

    //! Si todo sale bien retornamos el Dto
    return [undefined, new CreateTodoDto(text)];
  }


}