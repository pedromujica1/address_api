//Importando Classes model e Schema do package mongoose
import {model, Schema } from 'mongoose';

//const Order com o objeto model para ser acessado com outros arquivos
//const Order definido com o objeto Schema para definir os tipos de dados dentro que a constante vai receber
export const Order = model('Order', new Schema({
	//dado table do tipo string
	table: {
		type: String,
		required: true,
	},
	//status to tipo string
	status: {
		type: String,
		enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
		default: 'WAITING',
	},
	//createdAt do tipo Date
	creatdAt: {
		type: Date,
		default: Date.now,
	},
	//Products com o ObjectId do arquvio Product.ts
	products: {
		required: true,
		type:[{
			product: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'Product',
			},
			quantity: {
				type: Number,
				default: 1,
			},
		}],
	},
}));