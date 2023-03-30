type Protocol5 = "http" | "https";

type Config5 = {
  protocol: Protocol5;
  port: 3000 | 3001;
};

type Role5 = {
  role: string;
};

// type Config5 = { // нельзя расширить type
// }

type ConfigWithRole5 = Config5 & Role5;

const serverConfig5: ConfigWithRole5 = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const startServer5 = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

startServer5(serverConfig5.protocol, serverConfig5.port);
