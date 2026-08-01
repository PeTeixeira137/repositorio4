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

    findById(id: number) {
        return bancoDeDadosEmMemoria.find(t => t.id === id);
    }

    update(id: number, dados: Partial<ICriarTarefa & { completed: boolean }>) {
        const tarefa = this.findById(id);
        if (!tarefa) return null;
        if (dados.title !== undefined) tarefa.title = dados.title;
        if (dados.completed !== undefined) tarefa.completed = dados.completed;
        return tarefa;
    }

    delete(id: number) {
        const index = bancoDeDadosEmMemoria.findIndex(t => t.id === id);
        if (index === -1) return false;
        bancoDeDadosEmMemoria.splice(index, 1);
        return true;
    }
}

export { TarefaService };