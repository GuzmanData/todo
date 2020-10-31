export class Todo {
    constructor(tarea) {

        this.tarea = tarea;

        // una fora de obtener un id con la fecha actual
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}