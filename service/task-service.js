import * as taskRepository from '../data/task-repository.js'
import * as engineerRepository from '../data/engineer-repository.js'


export async function getTasks(){
    return await taskRepository.findAll();
}

export async function getTask(taskId){
    return await taskRepository.findById(taskId);
}

export async function createTask(task){
    return await taskRepository.add(task);
}

export async function updatedTask(taskId, existingTask){
    return await taskRepository.update(taskId, existingTask);
}

export async function deleteTask(taskId){
    return await taskRepository.remove(taskId);
}

export async function getEngineers(){
    return await engineerRepository.findAll();
}

export async function getEngineer(engineerId){
    return await engineerRepository.findById(engineerId);
}

export async function createEngineer(engineer){
    return await engineerRepository.add(engineer);
}

export async function updatedEngineer(engineerId, existingEngineer){
    return await engineerRepository.update(engineerId, existingEngineer);
}
    
export async function deleteEngineer(engineerId){
    return await engineerRepository.remove(engineerId);
}