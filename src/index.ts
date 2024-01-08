/* eslint-disable linebreak-style */
import { server } from './server/Server';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;


server.listen(port, () => {
    console.log(`Rodando na porta ${port}, acesse:\nhttp://localhost:${port}`);
});
