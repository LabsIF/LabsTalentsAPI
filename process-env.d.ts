/* eslint-disable linebreak-style */
export {};

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        PORT: string;
        DATABASE_URL: string;
		NODE_ENV: string;
	
      
      }
    }
  }