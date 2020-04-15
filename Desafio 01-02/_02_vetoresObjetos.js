const users = {
  name: 'Joaquim',
  age: 48,
  technology: [
    {
      name: 'C++',
      specialty: 'Desktop'
    },
    {
      name: 'Python',
      specialty: 'Data Science'
    },
    {
      name: 'Javascript',
      specialty: 'Web/Mobile'
    }
  ]
};

console.log(`O usuário ${users.name} tem ${users.age} anos e usa a tecnologia ${users.technology[0].name} com especialidade em ${users.technology[0].specialty}.`)
