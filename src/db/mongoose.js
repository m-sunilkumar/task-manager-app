const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// const me = new User({
//   name: "sunilkumar",
//   email: "msunkumdi@gmail.com",
//   age: 24,
//   password: "hello world"
// });

// const task = new Tasks({
//   title: "clean floor",
//   description: "claning the floor",
//   completed: true
// });

// task
//   .save()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// me.save()
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
