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
