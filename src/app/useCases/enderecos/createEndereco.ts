//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando Const do models/Category
import { Endereco } from '../../models/Endereco';

//FUNÇÃO PARA ADICIONAR CATEGORIA COM PARAMETRO REQUEST E RESPONSE
export async function createEndereco(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		//definindo o BODY DO POST REQUEST
		const {nome,numero,complemento,bairro,cidade} = req.body;
		//usando o metódo create da classe Model que adicona no BD uma categoria
		const endereco = await Endereco.create({nome,numero,complemento,bairro,cidade});
		res.status(201).json(endereco);
	} catch (error) {
		//mensagem caso ocorra erro
		console.log(error);
		res.sendStatus(500);
	}
}