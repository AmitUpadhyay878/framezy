export type deviceType = 'website' | 'mobile';

export type ProjectType={
    id:string;
    projectId:string;
    userId:string;
    userInput?:string;
    device?:deviceType;
    createdOn?:string;
    projectName?:string;
    theme?:string;   
}

export type ScreenConfigType={
    id:string;
    projectId:string;
    screenId:string;
    screenName?:string;
    purpose?:string;
    description?:string;
    code?:string;
}