import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';

const ormCfg:TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345678",
  database: "ldy_insight_db",
  entities: [`./**/*.entity{.ts,.js}`],
  synchronize: true,
  maxQueryExecutionTime: 1000
}

export default ormCfg