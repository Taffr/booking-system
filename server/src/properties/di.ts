import { db } from "../db";
import {
  getAllPropertiesFactory,
  addPropertyFactory,
  deletePropertyForUserFactory,
  updatePropertyForUserFactory,
} from "./model";
import {
  getAllPropertiesControllerFactory,
  addPropertyControllerFactory,
  deletePropertyControllerFactory,
} from "./controllers";

export const getAllProperties = getAllPropertiesFactory(db);
export const addProperty = addPropertyFactory(db);
export const deletePropertyForUser = deletePropertyForUserFactory(db);
export const updatePropertyForUser = updatePropertyForUserFactory(db);

import { uuid } from "../auth";
import { updatePropertyControllerFactory } from "./controllers/update-property.controller";
export const getAllPropertiesController =
  getAllPropertiesControllerFactory(getAllProperties);
export const addPropertyController = addPropertyControllerFactory(
  addProperty,
  uuid,
);
export const deletePropertyController = deletePropertyControllerFactory(
  deletePropertyForUser,
);
export const updatePropertyController = updatePropertyControllerFactory(
  updatePropertyForUser,
);
