import Tasks from "./Tasks";

try {
    let tasks = new Tasks('My first task list');
    
    tasks.addTask('Tasks 1');
    tasks.addTask('Tasks 2');
    tasks.addTask('Tasks 3');
    
    console.log('FirstTasks')
    tasks.listTasks();
    console.log('FirstTasks');
    
    const tasksList = ['Taks 5', 'Task 6', 'Tasks 7'];
    
    tasks.addTasks(tasksList);
    
    console.log('3 more tasks');
    tasks.listTasks();
    console.log('3 more tasks');

    tasks.changeStatus('Task 6');
    tasks.changeStatus('Tasks 1');
    
    console.log('Change status');
    tasks.listTasks();
    console.log('Change status');

    console.log('duplicate task');
    try {
        tasks.addTask('Tasks 2');
    } catch (error) {
        console.error(error);
    }
    
    console.log('non-existent task');
    tasks.changeStatus('Task none');
    
    
} catch (error) {
    console.error(error);
}

