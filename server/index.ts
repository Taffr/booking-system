import express from 'express';
import { getAllUsersController } from './src/user';

const app = express();
const PORT = 8080; // TODO: Use environment variable

app.get('/', getAllUsersController);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

