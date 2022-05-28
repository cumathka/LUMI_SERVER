import db from '../commons/database.js'


export async function findAll(){
    return await db.query(`SELECT * FROM customer`);
}

export async function findById(pId){
    return await db.query(`SELECT * FROM customer where id=${pId}`);
}

export async function add(pObj){
    //  result."insertId" could be used to fetch the new entry again
    return await db.query(`INSERT 
                           INTO customer 
                           VALUES(null, '${pObj.lastName}', '${pObj.firstName}', '${pObj.country}')`);
}

export async function update(pId, pObj){
    return await db.query(`UPDATE customer  
                           SET last_name = '${pObj.lastName}',
                               first_name = '${pObj.firstName}',
                               country = '${pObj.country}'
                           WHERE id=${pId}`);
}

export async function remove(pId){
    return await db.query(`DELETE FROM customer where id=${pId}`);
}