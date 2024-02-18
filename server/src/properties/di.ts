import { db } from '../db';
import { getAllPropertiesFactory, addPropertyFactory } from './model';
import { getAllPropertiesControllerFactory, addPropertyControllerFactory} from './controllers';

export const getAllProperties = getAllPropertiesFactory(db)
export const addProperty = addPropertyFactory(db)

import { uuid } from '../auth'
export const getAllPropertiesController = getAllPropertiesControllerFactory(getAllProperties)
export const addPropertyController = addPropertyControllerFactory(addProperty, uuid)

