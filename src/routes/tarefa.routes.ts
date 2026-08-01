import { Router } from 'express';
import { TarefaController } from '../domains/tarefa/controllers';

const tarefaRoutes = Router();
const controller = new TarefaController();

tarefaRoutes.post('/tasks', controller.createTarefa);
tarefaRoutes.get('/tasks', controller.listTarefas);
tarefaRoutes.get('/tasks/:id', controller.findById);
tarefaRoutes.put('/tasks/:id', controller.UpdateTarefa);
tarefaRoutes.delete('/tasks/:id', controller.DeleteTarefa);

export { tarefaRoutes };