import { db } from "./SQLiteDatabase";
import IProfile from "../interfaces/IProfile";

db.transaction(tx => {
    tx.executeSql(
        "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, photo TEXT, name TEXT, login TEXT, location TEXT);"
    );
});

const getAllUserData = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM user;',
                [],
                (_, { rows }) => resolve(rows._array),
                // (_, error) => reject(error)
            );
        });
    });
}

const createUserData = async (obj: IProfile) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO user (id, photo, name, login, location) VALUES (?, ?, ?, ?, ?)',
                [obj.id, obj.photo, obj.name, obj.login, obj.location],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject(new Error('Erro ao inserir user ' + JSON.stringify(obj)));
                },
            )
        })
    })
}

const removeAllUserData = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM user;",
                [],
                (_, rowsAffected) => {
                    resolve(rowsAffected);
                },
            )
        })
    })
}

export { getAllUserData, createUserData, removeAllUserData };