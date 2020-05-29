const users = [
  {
    name: 'Joao',
    Technology: [
      'Javascript',
      'CSS'
    ]
  },
  {
    name: 'Frederico',
    Technology: [
      'C#',
      'Materialize'
    ]
  },
  {
    name: 'Austin',
    Technology: [
      'JAVA',
      'Spring'
    ]
  }
]

function usersTechnology() {
  for(let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} trabalha com ${users[i].Technology}`);
  }
}

usersTechnology();
