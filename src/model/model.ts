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

    // deleteOneProject:(project: string) =>{
    //     // database.projects[Number(project)];
    //     return database.projects.splice(database.projects.findIndex(project));
    // },
}



// export const messageModel = {
//     getPortfolio:()=>{
//         return { message: "alba" };
       
//     }
//  }