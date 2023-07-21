import { connectToDatabase } from "./utils/db";


const start = async () => {
  await connectToDatabase();
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
start();