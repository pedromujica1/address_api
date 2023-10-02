//Importando Classes model e Schema do package mongoose
import {model, Schema } from 'mongoose';

//Criando A CONST Product com objeto Schema e definindo com o objeto Model com o nome Product para assim ser acessado por outras função
export const Product = model('Product', new Schema({
	//Nome do tipo String
	name: {
		type: String,
		required: true,
	},
	//description do tipo string
	description: {
		type: String,
		required: true,
	},
	//caminho da Imagem do tipo String
	imagePath: {
		type: String,
		required: true,
	},
	//preço do tipo Number
	price: {
		type: Number,
		required: true,
	},
	//ingreditentes do tipo objeto
	ingredients: {
		required: true,
		type:[{
			name: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		}],
	},
	//category com ID do Category.ts
	category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Category',
	},
}));