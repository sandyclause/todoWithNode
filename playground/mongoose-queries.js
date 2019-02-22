const {
  ObjectID
} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = '5c6cb231aced402de8f45833';

// if (!ObjectID.isValid(id)) {
//   console.log('id not valid')
// } 

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found')
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e))


User.findById(id).then((user) => {
  if (!user) {
    return console.log('user not found')
  }
  console.log('user by id', user)
}).catch((e) => {
  console.log(e)
})
