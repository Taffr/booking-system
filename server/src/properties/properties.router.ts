import { Router } from 'express'
import { getAllPropertiesController } from './di'

const router = Router();
router.get('/', getAllPropertiesController);

export const propertiesRouter = router;
export const PROPERTIES_ROUTE = '/properties';
