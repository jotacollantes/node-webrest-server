export class TodoEntity {
  constructor(
    public id: number,
    public text: string,
    public completedAt?: Date | null
  ) {}

  get isCompleted() {
    return !!this.completedAt;
  }

  public static fromObject(object: { [key: string]: any }): TodoEntity {
    const { id, text, completedAt } = object;
    if (!id) throw "Id is required";
    if (!text) throw "text is required";

    let newCompletedAt;
    if (completedAt) {
      newCompletedAt = new Date(completedAt);
      //getTime() devuelve un numero 2145345435
      if (isNaN(newCompletedAt.getTime())) {
        throw "CompletedAt is not a valid date";
      }
    }
    
    //!Retornamos una instancia del objetp TodoEntity
    return new TodoEntity(id, text, completedAt);
  }
}
