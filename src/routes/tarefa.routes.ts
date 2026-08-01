import { Router } from 'express';
import { TarefaController } from '../domains/tarefa/controllers';

const tarefaRoutes = Router();
const controller = new TarefaController();

tarefaRoutes.post('/', controller.createTarefa);
tarefaRoutes.get('/', controller.listTarefas);
tarefaRoutes.get('/:id', controller.findById);
tarefaRoutes.put('/:id', controller.UpdateTarefa);
tarefaRoutes.delete('/:id', controller.DeleteTarefa);

export { tarefaRoutes };