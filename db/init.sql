-- Create the tables
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  hash TEXT NOT NULL
);

-- Initial data
INSERT INTO users (id, name, phone, hash) VALUES ('1', 'John Doe', '+46711223344', 'somehash1');
INSERT INTO users (id, name, phone, hash) VALUES ('2', 'Jane Doe', '+46722334455', 'somehash2');
