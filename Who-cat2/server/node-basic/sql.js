module.exports = {
  list: {
    query: "select * from test2",
  },
  createPerson: {
    query: "insert into user set ?",
  },
  deletePerson: {
    query: "delete from test2 where id=?",
  },
  updatePerson: {
    query: "update test2 set ? where  id= ?",
  },
  catList: {
    query: "select * from cat",
  },
  catDetail: {
    query: "select * from cat where catId = ?",
  },
  createCat: {
    query: "insert into cat set ?",
  },
<<<<<<< HEAD

  getCatImgPath: {
    query: "select * from catImg where catImgId = ?",
=======
  createUser: {
    query: "insert into user set ?",
>>>>>>> 3e38594a370c5dd20a338500be1aabdaeeee81d7
  },
  // userList: {
  //   query: "select * from user",
  // },
};
