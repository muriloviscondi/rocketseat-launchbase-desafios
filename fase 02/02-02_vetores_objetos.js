const programador = {
  nome: 'Murilo',
  idade: 32,
  tecnologias: [
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'Javascript', especialidade: 'Desktop' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)