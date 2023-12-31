//importando funções e objetos 
import { Router } from 'express';

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
