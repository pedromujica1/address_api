//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Product
import { Product } from '../../models/Product';

//função para listar produtos cadastrados
export async function listProducts(req: Request, res: Response) {
	try {
		//metodo .find() para retornar todos os produtos cadastrados no bd
		const products = await Product.find();

		//retorna produtos cadastrados no formato JSON
		res.json(products);
	} catch (error) {
		//mostra erro caso a função não for executada corretamente
		console.log(error);
		res.sendStatus(500);
	}

}