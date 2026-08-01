import { Request, Response } from 'express';
import { TarefaService } from '../services/tarefaService';

class TarefaController {
    createTarefa(req: Request, res: Response) {
        try {
            const { title } = req.body;
            const service = new TarefaService();
            const tarefa = service.create({ title });
            return res.status(201).json(tarefa);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    listTarefas(req: Request, res: Response) {
        const { completed } = req.query;
        const service = new TarefaService();
        const tarefas = service.list(completed as string | undefined);
        return res.status(200).json(tarefas);
    }

    findById(req: Request, res: Response) {
        const service = new TarefaService();
        const tarefa = service.findById(Number(req.params.id));
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        return res.status(200).json(tarefa);
    }

    DeleteTarefa(req: Request, res: Response) {
        const service = new TarefaService();
        const sucesso = service.delete(Number(req.params.id));
        if (!sucesso) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        return res.status(204).send();
    }

    UpdateTarefa(req: Request, res: Response) {
        const service = new TarefaService();
        const tarefaAtualizada = service.update(Number(req.params.id), req.body);
        if (!tarefaAtualizada) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        return res.status(200).json(tarefaAtualizada);
    }
}

export { TarefaController };