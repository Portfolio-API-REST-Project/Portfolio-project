import { Request, Response, Router } from "express";
import { messageCtrl } from '../controller/controller';

const router = Router();

router.get('/portfolio', messageCtrl.getPortfolio);

export default router;