import { Service } from 'typedi';
import { MongoClient } from 'mongodb';

@Service()
export class DatabaseClient {
  private client: MongoClient;
  private dbName: string;
  private url: string;

  constructor(url: string, dbName: string) {
    this.url = url;
    this.dbName = dbName;
  }

  async connect() {
    console.info(
      `Connecting to '${this.censoredUrl}' using db '${this.dbName}'`
    );
    this.client = new MongoClient(this.url);
    await this.client.connect();
    console.info(`Successfully connected to database!`);
  }

  db() {
    return this.client.db(this.dbName);
  }

  // url example
  // mongodb://admin:password@localhost:27017/db
  private get censoredUrl() {
    const beforePassword = this.url.substring(0, this.url.indexOf('//') + 2);
    const afterPassword = this.url.substring(this.url.indexOf('@'));

    return `${beforePassword}*****:*****${afterPassword}`;
  }
}
