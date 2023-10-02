//Importando objeto Request,Response do package express
import { Request, Response } from 'express';
//importando a const Order to tipo Model
import { Order } from '../../models/Order';

//Função para deletar pedido do BD 
export async function cancelOrder(req: Request, res: Response) {
	try {
		//Pega o ID passado como argumento no Body
		const { orderId } = req.params;
		//Metodo do objeto Model para encontrar pedido e deletar ele do BD de acordo com o ID
		await Order.findByIdAndDelete(orderId);
		res.sendStatus(204);

	} catch (error) {
		//mostra erro caso o catch encontre um (error)
		console.log(error);
		res.sendStatus(500);
	}
}