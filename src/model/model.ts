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

    getOneProject: (position:string)=>{
        return database.projects[Number(position)];
        //all projects
    },
}




// export const messageModel = {
//     getPortfolio:()=>{
//         return { message: "alba" };
       
//     }
//  }