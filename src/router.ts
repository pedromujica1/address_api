//importando funções e objetos 
import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

//Endereço
import { listEndereco } from './app/useCases/enderecos/listEndereco';
import { createEndereco } from './app/useCases/enderecos/createEndereco';

//Endereço By ID
import { listEnderecoByBairro } from './app/useCases/enderecos/listEnderecoByBairro';
import { listEnderecoByCidade } from './app/useCases/enderecos/listEnderecoByCidade';


//Bairro
import { listBairros } from './app/useCases/bairros/listBairros';
import { createBairro } from './app/useCases/bairros/createBairro';

//cidades
import { createCidade } from './app/useCases/cidades/createCidade';
import { listCidades } from './app/useCases/cidades/listCidades';
export const router = Router();

//configuração do multer
//pega arquivos e salva na pasta uploads
const upload = multer({
	//configurar armazenamento
	storage: multer.diskStorage({
		//configurar destino
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		//configura nome do arquivo
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`);
		},
	})

});

//configurando caminhos do objeto router

//List enderecos
router.get('/enderecos', listEndereco);

//Create enderecos
router.post('/enderecos', createEndereco);

//Get bairro by category
router.get('/enderecos/:bairroId/bairros', listEnderecoByBairro);

//Get bairro
router.get('/enderecos/:cidadeId/cidades', listEnderecoByCidade);

//List bairros
router.get('/bairros', listBairros);

//create bairros
router.post('/bairros', createBairro);

//create cidades
router.post('/cidades', createCidade);

//list cidades
router.get('/cidades',listCidades);