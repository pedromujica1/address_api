//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Product
import { Cidade } from '../../models/Cidade';

//função para criar Produto com os parametros Request e Response
export async function createCidade(req: Request, res: Response) {
	try{
    //res.send('Ok post category');
		//definindo o BODY DO POST REQUEST
		const {nome,estado} = req.body;
		//usando o metódo create da classe Model que adicona no BD uma categoria
		const cidade = await Cidade.create({nome,estado});
		res.status(201).json(cidade);
	} catch (error) {
		//mensagem caso ocorra erro
		console.log(error);
		res.sendStatus(500);
	}
}//fim da função