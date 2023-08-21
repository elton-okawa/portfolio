import { ConfigService } from '@nestjs/config';
import { Db, MongoClient } from 'mongodb';

export const DATABASE_KEY = 'DATABASE_KEY';

export const databaseProviders = [
  {
    provide: DATABASE_KEY,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService): Promise<Db> => {
      try {
        const url = configService.get('DB_URL');
        const dbName = configService.get('DB_NAME');

        console.info(`Connecting to '${censorUrl(url)}' using db '${dbName}'`);
        const client = await MongoClient.connect(url);
        console.info(`Successfully connected to database!`);

        return client.db(dbName);
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  },
];

function censorUrl(url) {
  const beforePassword = url.substring(0, url.indexOf('//') + 2);
  const afterPassword = url.substring(url.indexOf('@'));

  return `${beforePassword}*****:*****${afterPassword}`;
}
