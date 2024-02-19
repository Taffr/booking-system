import { Router } from "express";
import {
  getAllPropertiesController,
  addPropertyController,
  deletePropertyController,
  updatePropertyController,
} from "./di";
import { userGuard } from "../auth";
import { validateRequest } from "../validation";
import {
  AddPropertySchema,
  DeletePropertySchema,
  UpdatePropertySchema,
} from "./controllers";

const router = Router();
/**
 * Gets all properties
 * @returns an array of properties
 */
router.get("/", getAllPropertiesController);
/**
 * Adds a new property
 * @returns the id of the new property
 * @throws 400 - if the request is invalid
 * @throws 401 - if the user is not authenticated
 */
router.post(
  "/",
  [validateRequest(AddPropertySchema), userGuard],
  addPropertyController,
);

/**
 * Deletes a property
 * @param id - the id of the property to delete
 * @returns the id of the deleted property
 * @throws 400 - if the request is invalid
 * @throws 401 - if the user is not authenticated
 * @throws 403 - if the user is not the owner of the property
 */
router.delete(
  "/:id",
  [userGuard, validateRequest(DeletePropertySchema)],
  deletePropertyController,
);

/**
 * Updates a property
 * @param id - the id of the property to update
 * @returns the id of the updated property
 * @throws 400 - if the request is invalid
 * @throws 401 - if the user is not authenticated
 * @throws 403 - if the user is not the owner of the property
 */
router.put(
  "/:id",
  [userGuard, validateRequest(UpdatePropertySchema)],
  updatePropertyController,
);

export const propertiesRouter = router;
export const PROPERTIES_ROUTE = "/properties";
