-- Create the tables
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  hash TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS properties (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    owner_id TEXT NOT NULL,
    FOREIGN KEY(owner_id) REFERENCES users(id)
);

-- Initial data
INSERT INTO users (id, name, phone, hash) VALUES ('1', 'John Doe', '+46711223344', 'somehash1');
INSERT INTO users (id, name, phone, hash) VALUES ('2', 'Jane Doe', '+46722334455', 'somehash2');
INSERT INTO properties (id, name, owner_id) VALUES ('1', 'House 1', '1');
INSERT INTO properties (id, name, owner_id) VALUES ('2', 'House 2', '2');
