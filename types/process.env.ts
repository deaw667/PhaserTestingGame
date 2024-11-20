// define the Node "process" object. If it is defined (@types/node) by another module you installed,
// then you can delete this file

// types/process.env.ts
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string;
    }
}
