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

  getCatImgPath: {
    query: "select * from catImg where catImgId = ?",
  },
  createUser: {
    query: "insert into user set ?",
  },
  getcatDetail: {
    query: "select * from cat where catId =?",
  },

  getContact: {
    query: "select * from user where userId = ?",
  },

  // userList: {
  //   query: "select * from user",
  // },
};
