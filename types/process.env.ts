// define the Node "process" object. If it is defined (@types/node) by another module you installed,
// then you can delete this file

// Remove this file or modify it to check if process is already defined
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
        }
    }
}
