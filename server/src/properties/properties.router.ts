import { Router } from 'express'
import { getAllPropertiesController, addPropertyController } from './di'
import { userGuard } from '../auth'
import { validateRequest } from '../validation'
import { AddPropertySchema } from './controllers'

const router = Router();
router.get('/', getAllPropertiesController);
router.post('/', [ validateRequest(AddPropertySchema), userGuard ], addPropertyController);

export const propertiesRouter = router;
export const PROPERTIES_ROUTE = '/properties';
