// interface IProtocol  "http" | "https"; //не будут работать с примитивными типами!
type Protocol4 = "http" | "https";

interface IConfig4 {
  protocol: "http" | "https"; // можно Protocol4
  port: 3000 | 3001;
}

interface IConfig4 { // расширили interface , не очевидно! лучше добавить вверху!
	date: Date;
}

interface IRole4 {
  role: string;
}

interface IConfigWithRole4 extends IConfig4, IRole4 {}

const serverIConfig4: IConfigWithRole4 = {
  protocol: "https",
  port: 3001,
  role: "admin",
	date: new Date(), // нужно добавить
};

const startIServer4 = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

startIServer4(serverIConfig4.protocol, serverIConfig4.port);
