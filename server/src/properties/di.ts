import { db } from '../db';
import { getAllPropertiesFactory } from './model';
import { getAllPropertiesControllerFactory } from './controllers';

export const getAllProperties = getAllPropertiesFactory(db)
export const getAllPropertiesController = getAllPropertiesControllerFactory(getAllProperties)

