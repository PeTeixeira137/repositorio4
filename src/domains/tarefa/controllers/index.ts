import { Request, Response } from 'express';
import { TarefaService } from '../services/tarefaService';

class TarefaController {
    async createTarefa(req: Request, res: Response) {
        try {
            const { title } = req.body;
            const service = new TarefaService();
            const tarefa = await service.create({ title });
            return res.status(201).json(tarefa);
        } catch (error) {
            return res.status(400).json({ error: (error as Error).message });
        }
    }

    async listTarefas(req: Request, res: Response) {
        const { completed } = req.query;
        const service = new TarefaService();
        const tarefas = service.list(completed as string | undefined);
        return res.status(200).json(tarefas);
    }

    async findById(req: Request, res: Response) {
        const service = new TarefaService();
        const tarefa = await service.findById(Number(req.params.id));
        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        return res.status(200).json(tarefa);
    }

    async DeleteTarefa(req: Request, res: Response) {
        const service = new TarefaService();
        const sucesso = await service.delete(Number(req.params.id));
        if (!sucesso) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        return res.status(204).send();
    }

    async UpdateTarefa(req: Request, res: Response) {
        const service = new TarefaService();
        const tarefaAtualizada = await service.update(Number(req.params.id), req.body);
        if (!tarefaAtualizada) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        return res.status(200).json(tarefaAtualizada);
    }
}

export { TarefaController };