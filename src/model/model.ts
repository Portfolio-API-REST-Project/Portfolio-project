// import { resetMocks } from “../../jest.config”
import database from '../data.json';
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
     putOneProject : (id:number, updatedProject: any) => {
         database.projects[id] = updatedProject;
         return "Project modified";
         //modify a project
     },
    // deleteOneProject: (id:number, mensaje: string) =>{
    //     console.log (mensaje);
    //     database.projects.splice(id,1);
    //     return mensaje;
    // },
    // deleteProject: (req: Request, res: Response) => {
    //     const id: number = parseInt(req.params.id);
    //     const result = myJson.deleteProject(id);
    //     res.json({result});
    // },
    // putOneProject: (id: string, updatedProject: any) => {
    //     const project = myJson.getProjectById(id);
    //     if (project) {
    //         const index = database.projects.indexOf(project);
    //         database.projects[index] = { ...project, ...updatedProject };
    //         return database.projects[index];
    //     } else {
    //         return null;
    //     }
    // },
    deleteOneProject: (id: string) => {
        const project = myJson.getProjectById(id);
        if (project) {
            const index = database.projects.indexOf(project);
            database.projects.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }
};

