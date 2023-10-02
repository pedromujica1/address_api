//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//Importando const Product da pasta models/Product
import { Cidade } from '../../models/Cidade';
import { Endereco } from '../../models/Endereco';

//Função para listar produtos de acordo com o ID da categoria com parametros (objeto Request e Response)
export async function listEnderecoByCidade(req: Request, res: Response) {
	try {
		//ID estrangeiro do model Category
		//Pega o ID dado como argumento no body
		const {cidadeId} = req.params;

		//const products que por meio do .find() retorna os produtos cadastrados
		//o metodo .where().equals() retorna somente os produtos que são iguais ao id da categoria
		const cidades = await Endereco.find().where('cidade').equals(cidadeId);

		//retorna o objeto em JSON
		res.json(cidades);
	} catch (error) {
		//Mostra a mensagem de erro caso ocorra alguma falha de execução
		console.log(error);
		res.sendStatus(500);
	}

}