import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db.db");

const initializeDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY, photo TEXT, name TEXT, login TEXT, location TEXT);',
            [],
            () => console.log('Tabela user criada com sucesso'),
            // (_, error) => console.error('Erro ao criar tabela:', error)
        );
    });
};

export { db, initializeDatabase };