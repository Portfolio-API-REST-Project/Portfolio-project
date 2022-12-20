import {myJson} from '../model/model'
import {Request,Response} from 'express';

export const databaseCtrl = {
    getMyjson:(req:Request, res:Response)=>{
        const result = myJson.getAlljson();
        res.json({message: result});
    },
}

// export const messageCtrl = {
//     getPortfolio: (req: Request, res: Response) => {
//         const result = messageModel.getPortfolio();
//         res.json(result)
//     }
        // const result = messageModel.getMessages();

    // }

