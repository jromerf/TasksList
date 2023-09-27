import Task from './Task';

class Tasks{

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