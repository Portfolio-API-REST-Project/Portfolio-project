import { Request, Response, Router } from "express";
import { databaseCtrl } from '../controller/controller';

const router = Router();

router.get('/portfolio', databaseCtrl.getMyjson);
router.get('/portfolio/project', databaseCtrl.getProjects);
router.get('/portfolio/project/:id', databaseCtrl.getProjectById);
router.post('/portfolio/project', databaseCtrl.saveOneProject);
router.put('/portfolio/project/:id', databaseCtrl.putOneProject);
router.delete('/portfolio/project/:id', databaseCtrl.deleteOneProject );


export default router;