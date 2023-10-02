//Importando Classes model e Scheme do package mongoose
import {model, Schema } from 'mongoose';

//Criando A CONST com objeto Schema e definindo com o objeto Model com o nome Category para assim ser acessado por outros arquivos
//export indica que a const do tipo model com objeto Schema pode ser exportada para outros arquivos
export const Bairro = model('Bairro', new Schema({
	//Parametro "nome" do tipo String
	nome: {
		type: String,
		required: true,
	}
}));