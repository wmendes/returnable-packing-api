import { Router } from 'express';
import { createPack, getPacks } from '../controllers/packController';

const router = Router();

router.post('/data', createPack);
router.get('/data', getPacks);

export default router;
