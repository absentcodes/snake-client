const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '172.20.10.5',// IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");


  //event handler for connect event
  conn.on("connect", () => {
    console.log("Successfully connected to the game server!");
    conn.write("Name: FMF");
  });

    


  //event handler for 'data' event
  conn.on("data" , (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

 
// export the connect function using ES6 shorthand syntax
module.exports = { connect };