import prisma from '../../../config/prismaClient';

interface ICriarTarefa {
    title: string;
}

class TarefaService {
    async create({ title }: ICriarTarefa) {
        if (!title) {
            throw new Error("Título da tarefa é obrigatório");
        }
        return prisma.task.create({ data: { title } });
    }

    async list(completed?: string) {
        if (completed === undefined) return prisma.task.findMany();
        const bool = completed === 'true';
        return prisma.task.findMany({ where: { completed: bool } });
    }

    async findById(id: number) {
        return prisma.task.findUnique({ where: { id } });
    }

    async update(id: number, dados: Partial<ICriarTarefa & { completed: boolean }>) {
        const existe = await this.findById(id);
        if (!existe) return null;
        return prisma.task.update({ where: { id }, data: dados });
    }

    async delete(id: number) {
        const existe = await this.findById(id);
        if (!existe) return false;
        await prisma.task.delete({ where: { id } });
        return true;
    }
}

export { TarefaService };