import { ReactNode } from "react";


export interface FormData {
    name:string,
    email:string,
    phone:string
}


export interface FormFieldProps {
    label: string;
    name: keyof FormData;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }

export  interface PrivateRouteProps {
    children: ReactNode;
  }

  export interface post {
    userId:number,
    id:number,
    body:string,
    title:string
}
