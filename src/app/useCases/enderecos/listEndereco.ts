//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importante const Category da pasta models/Category
import { Endereco } from '../../models/Endereco';

//Função para listar todas as categorias cadastradas no MongoBD
//Parametros de Request e Response
export async function listEndereco(req: Request, res: Response) {
	try {
		//const categories definido com o objeto Category e metódo .find() que retorna todas as categorias cadastradas
		const enderecos = await Endereco.find();

		//Retorna as categorias em JSON
		res.json(enderecos);
	} catch (error) {
		//Mensagem caso ocorra algum erro
		console.log(error);
		res.sendStatus(500);
	}
}