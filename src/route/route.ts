import { Request, Response, Router } from "express";
import { databaseCtrl } from '../controller/controller';

const router = Router();

router.get('/portfolio', databaseCtrl.getMyjson);

router.get('/portfolio/project', databaseCtrl.getProjects);

router.get('/portfolio/project/:id', databaseCtrl.getOneProject);

router.post('/portfolio/project', databaseCtrl.saveOneProject);

// router.delete('/portfolio/project', databaseCtrl.deleteThisProject);

export default router;