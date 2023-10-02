//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Product
import { Cidade } from '../../models/Cidade';

//função para listar produtos cadastrados
export async function listCidades(req: Request, res: Response) {
	try {
		//metodo .find() para retornar todos os produtos cadastrados no bd
		const cidades = await Cidade.find();

		//retorna produtos cadastrados no formato JSON
		res.json(cidades);
	} catch (error) {
		//mostra erro caso a função não for executada corretamente
		console.log(error);
		res.sendStatus(500);
	}

}