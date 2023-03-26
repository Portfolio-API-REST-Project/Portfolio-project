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
        const project = req.body
        const result = myJson.postProject(project)
        res.json({message: "Project added successfully"});
    },

    // put request to modify a Project by id with the properties that are passed in the body, if a property is not passed, it should not be modified
    // modifyProject: (req: Request, res: Response) => {
    //     const id: number = parseInt(req.params.id);
    //     const projectToUpdate = {
    //         ...myJson.getProjectById(id), // get the original project object "spread operator"
    //         ...req.body, // override with any properties present in the request body
    //     };
    //     const result = myJson.putProject(projectToUpdate, id);
    //     res.json({result});
    //},

    // deleteProject: (req: Request, res: Response) => {
    //     const id: number = parseInt(req.params.id);
    //     const result = myJson.deleteProject(id);
    //     res.json({message:"Project successfully deleted"});
    // 
}
