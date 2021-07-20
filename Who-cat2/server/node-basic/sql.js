module.exports = {
  list: {
    query: "select * from test2",
  },
  createPerson: {
    query: "insert into test2 set ?",
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
  // userList: {
  //   query: "select * from user",
  // },
};