import {TypeOrmModuleOptions} from '@nestjs/typeorm'
import * as config from 'config';
import { configInterface } from 'src/main';

const dbconfig:configInterface=config.get('db')


export const typeOrmConfig:TypeOrmModuleOptions={




    "type": 'postgres',
    host: dbconfig.host,
    port: dbconfig.port,
    username: dbconfig.username,
    password: dbconfig.password,
    database: dbconfig.database,
    //dropSchema:true, // to delete all data in all table (entity)
    entities: [__dirname+"/../**/*.entity{.ts,.js}"],
    "synchronize": dbconfig.synchronize


    

}