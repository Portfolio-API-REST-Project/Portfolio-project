// import { resetMocks } from "../../jest.config"

import {database} from "./datos.json"

export const myJson = {
    getAlljson: ()=>{
        return database;
    },
}


// export const messageModel = {
//     getPortfolio:()=>{
//         return { message: "alba" };
       
//     }
//  }