import mongoose from "mongoose";
import MongoClient from '../core/MongoClient';

class MongoDBService {
  private client: MongoClient;

  public constructor() {
    this.client = MongoClient.getInstance();
  }

  public async connect(): Promise<mongoose.Connection> {
    return this.client.connect();
  }

  public async close(): Promise<void> {
    return this.client.close();
  }
}

export default MongoDBService
