//Importando Classes model e Scheme do package mongoose
import {model, Schema } from 'mongoose';

//Criando A CONST com objeto Schema e definindo com o objeto Model com o nome Category para assim ser acessado por outros arquivos
//export indica que a const do tipo model com objeto Schema pode ser exportada para outros arquivos
export const Endereco = model('Endereco', new Schema({
	//Parametro "nome" do tipo String
	nome: {
		type: String,
		required: true,
	},
	//Parametro "icon" do tipo String 
	numero: {
		type: String,
		required: true,
	},
	complemento: {
		type: String,
		required: true,
	},
	bairro: {
		type: Schema.Types.ObjectId,
		required: false,
	},
	cidade: {
		type: Schema.Types.ObjectId,
		required: false,
	}

}));//Fim da função