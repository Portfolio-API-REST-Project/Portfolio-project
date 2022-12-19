import {messageModel} from '../model/model';
import {Request,Response} from 'express';

export const messageCtrl = {
    getPortfolio: (req: Request, res: Response) => {
        const result = messageModel.getPortfolio();
        res.json(result)
    }
        // const result = messageModel.getMessages();

    }

