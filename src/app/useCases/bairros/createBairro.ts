//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Order
import { Bairro } from '../../models/Bairro';

//Função para criar pedido com os parametros request e response
export async function createBairro(req: Request, res: Response) {
	try {
		//retira a table e products passados com argumento no body
		const {nome} = req.body;

		//adiciona pedido no BD de acordo com os novos argumentos passados no Body
		const bairro = await Bairro.create({ nome});
		//retorna json com o pedido criado
		res.status(201).json(bairro);
	} catch (error) {
		//mostra o erro que ocorreu na execução
		console.log(error);
		res.sendStatus(500);
	}
}