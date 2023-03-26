// import { resetMocks } from "../../jest.config"
import {database} from "./data.json";


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

    // putProject: (name: string, id: number) => {
    //     database.projects[id].name = name
    //     return fs.writeFileSync('src/models/db.json', JSON.stringify(database, null, 4), 'utf-8')
    // },

    // deleteProject: (req: Request, res: Response) => {
    //     const id: number = parseInt(req.params.id);
    //     const result = myJson.deleteProject(id);
    //     res.json({result});
    // },

 
}



