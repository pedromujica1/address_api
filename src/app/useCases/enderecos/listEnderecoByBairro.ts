//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//Importando const Product da pasta models/Product
import { Endereco } from '../../models/Endereco';

//Função para listar produtos de acordo com o ID da categoria com parametros (objeto Request e Response)
export async function listEnderecoByBairro(req: Request, res: Response) {
	try {
		//ID estrangeiro do model Category
		//Pega o ID dado como argumento no body
		const {bairroId} = req.params;

		//const products que por meio do .find() retorna os produtos cadastrados
		//o metodo .where().equals() retorna somente os produtos que são iguais ao id da categoria
		const bairros = await Endereco.find().where('bairro').equals(bairroId);

		//retorna o objeto em JSON
		res.json(bairros);
	} catch (error) {
		//Mostra a mensagem de erro caso ocorra alguma falha de execução
		console.log(error);
		res.sendStatus(500);
	}

}