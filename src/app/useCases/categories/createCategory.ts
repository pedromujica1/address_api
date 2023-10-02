//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando Const do models/Category
import { Category } from '../../models/Category';

//FUNÇÃO PARA ADICIONAR CATEGORIA COM PARAMETRO REQUEST E RESPONSE
export async function createCategory(req: Request, res: Response) {
	try {
		//res.send('Ok post category');
		//definindo o BODY DO POST REQUEST
		const {icon, name} = req.body;
		//usando o metódo create da classe Model que adicona no BD uma categoria
		const category = await Category.create({icon, name});
		res.status(201).json(category);
	} catch (error) {
		//mensagem caso ocorra erro
		console.log(error);
		res.sendStatus(500);
	}
}