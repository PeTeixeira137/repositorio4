import { Router } from 'express';
import { TarefaController } from '../domains/Tarefa/controllers';

const tarefaRoutes = Router();
const controller = new TarefaController();

tarefaRoutes.post('/tasks', controller.create);
tarefaRoutes.get('/tasks', controller.list);
tarefaRoutes.get('/tasks/:id', controller.findById);
tarefaRoutes.put('/tasks/:id', controller.update);
tarefaRoutes.delete('/tasks/:id', controller.delete);

export { tarefaRoutes };