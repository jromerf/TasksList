import Task from './Task';

class Tasks{
    /**
     * Se plantea la clase de tal forma que sea modular y siguiendo el principio de responsabilidad única,
     * utilizamos un Map para asegurar que no haya duplicados y facilitar la búsqueda.
     */
    private tasks = new Map<string,Task>();
    constructor(private taksListName:string){
    }

    addTask(taskName:string){
        const exist = this.tasks.get(taskName);
        if(exist) throw `Task already included in list: ${taskName}`;
        this.tasks.set(taskName,new Task(taskName))
    }

    addTasks(listName:string[]){
        for(const taskName of listName){
            this.addTask(taskName);
        }
    }

    changeStatus(taskName:string){
        const task = this.tasks.get(taskName);
        if(!task){
            throw `Task not found: ${taskName}`;
        }
        task.changeStatus();
    }

    listTasks(){
        for(const task of this.tasks.values()){
            console.log(task.toString());
        }
    }
}

export default Tasks;