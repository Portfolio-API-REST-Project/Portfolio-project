// import { resetMocks } from "../../jest.config"

import {database} from "./datos.json"

export const myJson = {
    getAlljson: ()=>{
        return database;
        //all data
    },
    
    getAllprojects: ()=>{
        return database.projects;
        //all projects
    },

    getOneproject: ()=>{
        return database.projects;
        //all projects
    },
}




// export const messageModel = {
//     getPortfolio:()=>{
//         return { message: "alba" };
       
//     }
//  }