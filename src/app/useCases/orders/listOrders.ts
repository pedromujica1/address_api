//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Order
import { Order } from '../../models/Order';

//Funçãp para listar pedidos com parametros Request e Response
export async function listOrders(req: Request, res: Response) {
	try {
		//const com o metodo .find() do objeto model para ordenar Pedidos com inicio no 1
		const orders = await Order.find()
			.sort({creatAt: 1})
			//prenche os produtos com os dados do produto
			.populate('products.product');
		//retorna os pedidos em formato JSON
		res.json(orders);
	} catch (error) {
		//mostra o erro caso ocorreu algum problema de execução
		console.log(error);
		res.sendStatus(500);
	}

}