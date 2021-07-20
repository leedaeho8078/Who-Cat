const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env.local") });

//강사님 코드
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});
var upload = multer({ storage: storage });

//cors
const cors = require("cors");

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption));

app.use(
  express.json({
    limit: "50mb",
  })
);

const server = app.listen(3001, () => {
  var dir = __dirname + "/uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  console.log("Server stared. port 3001.");
});

app.use("/static", express.static(__dirname + "/uploads"));

const dbPool = require("mysql").createPool({
  database: process.env.database,
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
});

app.post("/api/uploadFile", upload.single("attachment"), async (req, res) => {
  console.log(req.file);
  return res.status(200).json(req.file);
});

app.delete("/api/deleteFile", async (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.query.filename);
  console.log(path);
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(400).json({
        type: "E",
        msg: "파일을 삭제할 수 없습니다. 다시 시도하세요.",
      });
    }

    res.status(200).json({ type: "S", msg: "성공적으로 삭제되었습니다." });
  });
});

app.get("/api/getUserList", async (req, res) => {
  const userList = { data: [{ name: "Daeho Lee", gender: "male" }] };
  res.send(userList);
});

app.get("/api/getList", async (req, res) => {
  try {
    res.send(await sys.db("list"));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

app.post("/api/:alias", async (req, res) => {
  try {
    res.send(await sys.db(req.params.alias, req.body.param, req.body.where));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const sys = {
  async db(alias, param = [], where = "") {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != "ER_DUP_ENTRY") console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};

// const userList = async () => {
//   try {
//     console.log(await sys.db("userList"));
//   } catch (err) {
//     console.log(err);
//   }
// };

// userList();

// sys.db("selectUser");
