import { db } from '../db';
import { getAllPropertiesFactory, addPropertyFactory, deletePropertyForUserFactory } from './model';
import { getAllPropertiesControllerFactory, addPropertyControllerFactory, deletePropertyControllerFactory } from './controllers';

export const getAllProperties = getAllPropertiesFactory(db)
export const addProperty = addPropertyFactory(db)
export const deletePropertyForUser = deletePropertyForUserFactory(db)

import { uuid } from '../auth'
export const getAllPropertiesController = getAllPropertiesControllerFactory(getAllProperties)
export const addPropertyController = addPropertyControllerFactory(addProperty, uuid)
export const deletePropertyController = deletePropertyControllerFactory(deletePropertyForUser)

