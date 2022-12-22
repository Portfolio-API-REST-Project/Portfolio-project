import {myJson} from '../model/model';
import {Request,Response} from 'express';

export const databaseCtrl = {
    getMyjson:(req:Request, res:Response)=>{
        const result = myJson.getAlljson();
        res.json({message: result});
    },
    getProjects:(req:Request, res:Response)=>{
        const result = myJson.getAllprojects();
        res.json({message: result});
    },

    getOneProject:(req:Request, res:Response)=>{
        const id = req.params.id;
        const result = myJson.getOneProject(id);
        res.json({message: result});
    },

    saveOneProject:(req:Request, res:Response)=>{
        const project = req.body
        const result = myJson.postProject(project)
        res.json({message: result});
    },

    // deleteThisProject: (req:Request, res:Response) =>{
    //     const id = req.params.id;
    //     const result = myJson.deleteOneProject(id)
    //     res.json({message: result});
    // },



// export const messageCtrl = {
//     getPortfolio: (req: Request, res: Response) => {
//         const result = messageModel.getPortfolio();
//         res.json(result)
//     }
        // const result = messageModel.getMessages();
}
