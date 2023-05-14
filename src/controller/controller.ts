import {myJson} from '../model/model';
import {Request,Response} from 'express';
import database from '../data.json';

export const databaseCtrl = {
    getMyjson:(req:Request, res:Response)=>{
        const result = myJson.getAlljson();
        res.json({message: result});
    },
    getProjects:(req:Request, res:Response)=>{
        const result = myJson.getAllprojects();
        res.json(result);
    },
    getProjectById:(req:Request, res:Response)=>{
        const id = req.params.id;
        const result = myJson.getProjectById(id);
        res.json({message: result});
    },
    saveOneProject:(req:Request, res:Response)=>{
        const message = req.body;
        const result = myJson.postProject(message)
        res.json(result);
    },
    putOneProject: (req: Request, res: Response) => {
        const updatedProject = req.body;
        const id = parseInt(req.params.id);
        //messages[id] = message;
        const result = myJson.putOneProject(id, updatedProject);
        res.json(result);
    },
    // deleteOneProject: (req: Request, res: Response) => {
    //     const message = req.body
    //     const id = parseInt(req.params.id);
    //     const result = myJson.deleteOneProject(id, message);
    //     res.json({ message: `Array deleted ${id}` });
    // },
    // deleteProject: (req: Request, res: Response) => {
    //     const id: number = parseInt(req.params.id);
    //     const result = myJson.deleteProject(id);
    //     res.json({message:“Project successfully deleted”});
    //
    // putOneProject:(req:Request, res:Response)=>{
    //     const id = req.params.id;
    //     const message = req.body;
    //     const project = myJson.getProjectById(id);
    //     if (project) {
    //         const index = database.projects.indexOf(project);
    //         database.projects[index] = message;
    //         res.json({ message: "Project updated successfully", project: database.projects[index] });
    //     } else {
    //         res.status(404).json({ message: "Project not found" });
    //     }
    // },
    deleteOneProject:(req:Request, res:Response)=>{
        const id = req.params.id;
        const project = myJson.getProjectById(id);
        if (project) {
            const index = database.projects.indexOf(project);
            database.projects.splice(index, 1);
            res.json({ message: "Project deleted successfully" });
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    }
};













