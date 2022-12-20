import { Request, Response, Router } from "express";
import { databaseCtrl } from '../controller/controller';

const router = Router();

router.get('/portfolio', databaseCtrl.getMyjson);

export default router;