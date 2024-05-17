const config = {
    port: 8081
}

const dbConfig = {
    database: process.env.DB_NAME || 'joaos-toolbox',
    user: process.env.DB_USER || 'joaos-toolbox',
    password: process.env.DB_PASSWORD || 'A1b2c3d4joaostoolbox!',
    options: {
        dialect: process.env.DIALECT || 'postgres',
        host: process.env.HOST || 'localhost',
        storage: './joaos-toolbox.postgres'
    }
}

export {config, dbConfig};