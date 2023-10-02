//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Order
import { Order } from '../../models/Order';

//Função para mudar o status do Pedido
export async function changeOrderStatus(req: Request, res: Response) {
	try {
		//Retira o orderID e status passados como parametros
		const { orderId } = req.params;
		const { status } = req.body;

		//se o status for diferente de WAITING, IN PRODUCTION e DONE, um erro será apontado
		if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)){
			return res.status(400).json({
				error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
			});
		}
		//atualiza o model Order e atualiza o status com o novo argumento dado na função
		await Order.findByIdAndUpdate(orderId, { status });
		//manda o status
		res.sendStatus(204);
	} catch (error) {
		//mostar o erro
		console.log(error);
		res.sendStatus(500);
	}
}