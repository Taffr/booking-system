import { app } from "./src/app";

const PORT = 8080; // TODO: Use environment variable

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
