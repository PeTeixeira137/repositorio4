interface ITarefa {
    id: number;
    title: string;
    completed: boolean;
}

interface ICriarTarefa {
    title: string;
}

const bancoDeDadosEmMemoria: ITarefa[] = [];

class TarefaService {
    create({ title }: ICriarTarefa) {
        if (!title) {
            throw new Error("Título da tarefa é obrigatório");
        }
        const novaTarefa: ITarefa = { id: Math.random(), title, completed: false };
        bancoDeDadosEmMemoria.push(novaTarefa);
        return novaTarefa;
    }

    list(completed?: string) {
        if (completed === undefined) return bancoDeDadosEmMemoria;
        const bool = completed === 'true';
        return bancoDeDadosEmMemoria.filter(t => t.completed === bool);
    }