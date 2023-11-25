import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
    "type": "postgres",
    "host": "p-j5kb4zjueb.pg.biganimal.io",
    "port": 5432,
    "username": "edb_admin",
    "password": "pedro123456789",
    "database": "testemkss",
    "entities": ["src/**/*.entity{.ts,.js}"],
    "migrations": ["src\\migrations\\*.ts"],     
    "synchronize": true
  }
  );
