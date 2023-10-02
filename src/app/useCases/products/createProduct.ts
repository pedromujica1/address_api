//importando Request e Response objetos do package express
import { Request, Response } from 'express';
//importando model Product
import { Product } from '../../models/Product';

//função para criar Produto com os parametros Request e Response
export async function createProduct(req: Request, res: Response) {
	try {
		const imagePath = req.file?.filename; //operador ternario para retorna caminho da imagem caso seja o mesmo nome que o arquivo
		const { name, description, price, category, ingredients } = req.body; //pega os argumentos passados como parametro na função

		//metodo .create() para adicionar argumentos na const Product para assim cadastrar o produto no BD
		const product = await Product.create({
			name,
			description,
			imagePath,
			price: Number(price),
			category,
			ingredients:ingredients ? JSON.parse(ingredients): [],
		});

		res.status(201).json(product);
	} catch (error) {
		//retorna erro caso a operação não funcione corretamente
		console.log(error);
		res.sendStatus(500);
	}
}//fim da função