import { Database } from "../database/index.js";
import { ObjectId } from "mongodb";

const COLLECTION = 'info';

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
}

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return await collection.findOne({ _id: ObjectId(id) });
}

const create = async (data) => {
  const collection = await Database(COLLECTION);
  let result = collection.insertOne(data);
  return result.insertedId;
}

export const InfoServices = {
  getAll,
  getById,
  create
}