import { Request, Response, Router } from "express";
import { messageCtrl } from '../controller/controller';

const router = Router();

router.get('/portfolio', messageCtrl.getPortfolio);
router.get(‘/portfolio/project’, databaseCtrl.getProjects);
router.get(‘/portfolio/project/:id’, databaseCtrl.getProjectById);
router.post(‘/portfolio/project’, databaseCtrl.saveOneProject);
router.put(‘/portfolio/project/:id’, databaseCtrl.putOnePoject);
router.delete(‘/portfolio/project/:id’, databaseCtrl.deleteOneProject );

export default router;