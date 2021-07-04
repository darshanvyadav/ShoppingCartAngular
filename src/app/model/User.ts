import { Address } from "cluster";

    export interface IUser{
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email:string;
        address:Address;
        password:string;
        isDeleted:boolean;        
    }