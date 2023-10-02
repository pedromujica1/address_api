//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Order
import { Order } from '../../models/Order';

//Função para criar pedido com os parametros request e response
export async function createOrder(req: Request, res: Response) {
	try {
		//retira a table e products passados com argumento no body
		const {table, products} = req.body;

		//adiciona pedido no BD de acordo com os novos argumentos passados no Body
		const order = await Order.create({ table, products });
		//retorna json com o pedido criado
		res.status(201).json(order);
	} catch (error) {
		//mostra o erro que ocorreu na execução
		console.log(error);
		res.sendStatus(500);
	}
}