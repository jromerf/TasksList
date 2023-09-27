class Task{

    constructor(private name:string, private complete:boolean = false){
    }

    changeName(name:string){
        this.name = name;
    }

    //Simple switch
    changeStatus(){
        this.complete = !this.complete;
    }

    toString(){
        return `Task: ${this.name} Status: ${this.complete ? 'completed' : 'in progress'}`;
    }

    // //If there is more status types
    // setStatus(completed:boolean){
    //     this.complete = completed;
    // }
}

export default Task;