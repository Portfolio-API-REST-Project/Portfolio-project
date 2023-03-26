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

    getProjectById:(req:Request, res:Response)=>{
        const id = req.params.id;
        const result = myJson.getProjectById(id);
        res.json({message: result});
    },

    saveOneProject:(req:Request, res:Response)=>{
        const message = req.body
        const result = myJson.postProject(message)
        res.json({project: result});
    },

    putOnePoject: (req: Request, res: Response) => {
        const message = req.body
        const id = parseInt(req.params.id);
        //messages[id] = message;
        const result = myJson.putOneProject(id, message);

        res.json({ message: `Array is modified ${id} with ${message}`});
    }, 

    deleteOneProject: (req: Request, res: Response) => {
        const message = req.body
        const id = parseInt(req.params.id);
        const result = myJson.deleteOneProject(id, message);

        res.json({ message: `Array deleted ${id}` });
    },

    // deleteProject: (req: Request, res: Response) => {
    //     const id: number = parseInt(req.params.id);
    //     const result = myJson.deleteProject(id);
    //     res.json({message:"Project successfully deleted"});
    // 
};
