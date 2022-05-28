import db from '../commons/database.js'


export async function findAll(){
    return await db.query(`SELECT * FROM engineer`);
}

export async function findById(pId){
    return await db.query(`SELECT * FROM engineer where id=${pId}`);
}

export async function add(pObj){
    return await db.query(`INSERT 
                           INTO engineer 
                           VALUES(null, '${pObj.lastName}', '${pObj.firstName}', ${pObj.workload})`);
}

export async function update(pId, pObj){
    return await db.query(`UPDATE engineer  
                           SET last_name = '${pObj.lastName}',
                               first_name = '${pObj.firstName}',
                               workload = ${pObj.country}
                           WHERE id=${pId}`);
}

export async function remove(pId){
    return await db.query(`DELETE FROM engineer where id=${pId}`);
}