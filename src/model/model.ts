// import { resetMocks } from "../../jest.config"

import {database} from "./datos.json";

export const myJson = {
    getAlljson: ()=>{
        return database;
        //all data
    },
    
    getAllprojects: ()=>{
        return database.projects;
        //all projects
    },

    getOneProject: (position:string)=>{
        return database.projects[Number(position)];
        //one project
    },

    postProject:(project: any)=>{
        database.projects.push(project);
        return database.projects
    },

    // editProject: (name: string, id:[number]) => {
    //     console.log (message)
    //     database.projects[id] = message;
    //     return message;
    // },

    // deleteOneProject:(project: any) =>{
    //     // const id = parseInt(req.body.id);
    //     database.projects.splice(project);
    //     return database.projects
    // },
}



// export const messageModel = {
//     getPortfolio:()=>{
//         return { message: "alba" };
       
//     }
//  }