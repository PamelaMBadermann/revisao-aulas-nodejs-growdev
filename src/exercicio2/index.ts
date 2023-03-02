interface Aluno {
  nome: string;
  notas: Array<number>
}
class Escola {
  alunos: Array<Aluno>;

  constructor(alunos: Array<Aluno>) {
    this.alunos = alunos;
  }

  calcularMediaGeral(): number {
    let somaNotasGeral: number = 0;

    this.alunos.forEach((aluno) => {
      let mediaAluno: number;
      mediaAluno = this.calcularMedia(aluno)

      somaNotasGeral += mediaAluno;
    });

    let mediaGeral: number;
    mediaGeral = somaNotasGeral / this.alunos.length;

    return mediaGeral;
  }

  calcularMedia(aluno: Aluno): number {
    let somaNotasAluno: number = 0;
    somaNotasAluno = aluno.notas.reduce((acumulador, valorAtual) => acumulador + valorAtual)

    let mediaAluno: number;
    mediaAluno = somaNotasAluno / aluno.notas.length;

    return mediaAluno;
  }

  mensagemAprovacao(aluno: Aluno): void {
    let mediaAluno: number;
    mediaAluno = this.calcularMedia(aluno);

    let resultado: string;
    resultado = mediaAluno >= 6 ? "APROVADO" : "REPROVADO";

    let mensagem: string;
    mensagem = `Aluno ${aluno.nome}, média ${mediaAluno.toFixed(2)}, ${resultado}`
    console.log(mensagem);
  }
}

let aluno1: Aluno = {
  nome: "Pamela",
  notas: [9, 8, 9]
}

let aluno2: Aluno = {
  nome: "Angus",
  notas: [10, 10, 10]
}

let aluno3: Aluno = {
  nome: "Goido",
  notas: [9, 10, 9]
}

let school = new Escola([aluno1, aluno2, aluno3])
school.mensagemAprovacao(aluno1);
school.mensagemAprovacao(aluno2);
school.mensagemAprovacao(aluno3);

let mediaGeral = school.calcularMediaGeral();
console.log(`A média geral da escola foi ${mediaGeral.toFixed(2)}.`);