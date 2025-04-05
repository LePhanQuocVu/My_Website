var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myweb",
    port: 3306
  });


con.connect(function(err) {
    if (err) {
        console.error('❌ Kết nối thất bại: ' + err.stack);
        return;
      }
      console.log('✅ Đã kết nối MySQL với ID: ' + con.threadId);
});

module.exports  = con;