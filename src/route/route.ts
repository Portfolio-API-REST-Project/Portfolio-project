import { Request, Response, Router } from "express";
import { databaseCtrl } from '../controller/controller';

const router = Router();

router.get('/portfolio', databaseCtrl.getMyjson);

router.get('/portfolio/project', databaseCtrl.getProjects);

export default router;