class User{
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []
  }

sendMessage(rec) {
  let msg = new Message()
  rec.inbox.push(msg)
  }
}

class Message {
  constructor(content) {
    this.content = prompt('Enter a message')
  }
}

user1 = new User('jimmy@gmail.com', '111111')
user2 = new User('me@gmail.com', '111111')

let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventListener('keydown', function(event) {
  if(event.which == 'Shift' && event.which == 13){
    
  }

  if (event.which == 13) {
  }
})


function sendMessage() {
  let text = document.getElementById('msg-content')
  let p = document.createElement('p')
  p.innerText = text.value
  user2inbox.appendChild(p)
  text.value = ''
  text.focus()
}

user1form.addEventListener('submit', function(event) {
  event.preventDefault()
  sendMessage()
})
// sendMessage(recipient) {
//   let msg = new Message()
//   console.log('Message sent: ' + msg.content)
//   recipient.inbox.push(msg)
// }
//
// class Message {
//   construcotr {
//
//   }
// }
//
