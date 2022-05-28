import db from '../commons/database.js'


export async function findAll(){
    return await db.query(`SELECT * FROM website`);
}

export async function findById(pId){
    return await db.query(`SELECT * FROM website where id=${pId}`);
}

export async function add(pObj){
    return await db.query(`INSERT 
                           INTO website 
                           VALUES(null, '${pObj.name}', '${pObj.url}')`);
}

export async function update(pId, pObj){
    return await db.query(`UPDATE task  
                           SET name = '${pObj.name}',
                               url = '${pObj.url}'
                           WHERE id=${pId}`);
}

export async function remove(pId){
    return await db.query(`DELETE FROM website where id=${pId}`);
}