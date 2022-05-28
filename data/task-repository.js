import db from '../commons/database.js'


export async function findAll(){
    return await db.query(`SELECT * FROM task`);
}

export async function findById(pId){
    return await db.query(`SELECT * FROM task where id=${pId}`);
}

export async function add(pObj){
    return await db.query(`INSERT 
                           INTO task 
                           VALUES(null, '${pObj.title}', '${pObj.deadline}', '${pObj.done}')`);
}

export async function update(pId, pObj){
    return await db.query(`UPDATE task  
                           SET title = '${pObj.title}',
                               deadline = '${pObj.deadline}',
                               done = '${pObj.done}'
                           WHERE id=${pId}`);
}

export async function remove(pId){
    return await db.query(`DELETE FROM task where id=${pId}`);
}