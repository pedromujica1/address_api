//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importante const Category da pasta models/Category
import { Bairro } from '../../models/Bairro';

//Função para listar todas as categorias cadastradas no MongoBD
//Parametros de Request e Response
export async function listBairros(req: Request, res: Response) {
	try {
		//const categories definido com o objeto Category e metódo .find() que retorna todas as categorias cadastradas
		const bairros = await Bairro.find();

		//Retorna as categorias em JSON
		res.json(bairros);
	} catch (error) {
		//Mensagem caso ocorra algum erro
		console.log(error);
		res.sendStatus(500);
	}
}