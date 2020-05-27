const users = [
  {
    name: 'Joao',
    Technologies: [
      'Javascript',
      'CSS'
    ]
  },
  {
    name: 'Frederico',
    Technologies: [
      'C#',
      'Materialize'
    ]
  },
  {
    name: 'Austin',
    Technologies: [
      'JAVA',
      'Spring'
    ]
  }
]

for (let user of users) {
  console.log(`${user.name} trabalha com ${user.Technologies.join(', ')}`)
}

// Search for technology
function searchUserCSS(user) {
  for(let technology of user.Technologies) {
    if (technology === 'CSS') {
      return true;
    }
  }

  return false;
}

function usersTechnology() {
  for(let i = 0; i < users.length; i++) {
    const usersWorkCSS = searchUserCSS(users[i])

    if (usersWorkCSS)
      console.log(`\n${users[i].name} trabalha com CSS`)
  }
}

usersTechnology()
