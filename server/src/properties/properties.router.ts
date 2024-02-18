import { Router } from 'express'
import { getAllPropertiesController, addPropertyController, deletePropertyController, updatePropertyController } from './di'
import { userGuard } from '../auth'
import { validateRequest } from '../validation'
import { AddPropertySchema, DeletePropertySchema, UpdatePropertySchema } from './controllers'

const router = Router();
router.get('/', getAllPropertiesController);
router.post('/', [ validateRequest(AddPropertySchema), userGuard ], addPropertyController);
router.delete('/:id', [ userGuard, validateRequest(DeletePropertySchema) ], deletePropertyController);
router.put('/:id', [ userGuard, validateRequest(UpdatePropertySchema) ], updatePropertyController);

export const propertiesRouter = router;
export const PROPERTIES_ROUTE = '/properties';
