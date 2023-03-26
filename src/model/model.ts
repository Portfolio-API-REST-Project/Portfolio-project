// import { resetMocks } from "../../jest.config"
import {database} from "./data.json";

export const myjson = {
    getAlldata: ()=>{
        return database;
    },
}

const project: Array<string> = [];


export const myJson = {
    getAlljson: ()=>{
        return database;
        //all data
    },
    
    getAllprojects: ()=>{
        return database.projects;
        //all projects
    },

    getProjectById: (position:string)=>{
        return database.projects[Number(position)];
        //one project
    },

    postProject:(project: any)=>{
        database.projects.push(project);
        return database.projects
        //add a project
    },

    putOneProject : (id:number, message: string) => {
        console.log (project);
        database.projects.[id] = message;
        return "Project modified";
        //modify a project
    },

    deleteOneProject: (id:number, mensaje: string) =>{
        console.log (mensaje);
        database.projects.splice(id,1);
        return mensaje;

    },

    // deleteProject: (req: Request, res: Response) => {
    //     const id: number = parseInt(req.params.id);
    //     const result = myJson.deleteProject(id);
    //     res.json({result});
    // },

};



