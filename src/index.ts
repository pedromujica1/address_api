import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

//conecta com o MongoDB do Docker
mongoose.connect('mongodb://localhost:27017')
	.then(() => {
		//define objeto express()
		const app = express();
		//define porta
		const port = 3000;

		//objeto app retorna imagens baixadas e salva no uploads
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json());
		//configuar router para uso da const app
		app.use(router);
		//teclado de emotion tecla win+.
		app.listen(port, () => {
			console.log(`🚗Server is runing on http://localhost:${port}`);
		});
		//mensagem de Welcome ou bem-vindo
		app.get("/", (req,res) => {
			res.send("Welcome to My Food API app! \n Here you can add Products, Orders, Categories to a MONGO-DB database running on Docker! \n You can also list the following data with GET HTTP methods! \n Enjoy! ");
			
		});
		
	})
	//mostra caso ocorreu erro ao conectar no mongoDB
	.catch(() => console.log('Erro ao conectar no mongoDb'));