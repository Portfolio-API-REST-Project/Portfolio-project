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
        //add a project
    },

    

    
}



// export const messageModel = {
//     getPortfolio:()=>{
//         return { message: "alba" };
       
//     }
//  }