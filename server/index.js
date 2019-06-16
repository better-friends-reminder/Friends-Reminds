PORT = 3300 || process.env.PORT;
server = require("./server");

server.listen(PORT, () => {
  console.log(`The Server is running on Port:${PORT}`);
});
