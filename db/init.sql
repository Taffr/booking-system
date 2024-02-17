-- Create the tables
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  phoneNumber TEXT NOT NULL
);

-- Initial data
INSERT INTO users (id, firstName, lastName, phoneNumber) VALUES ('1', 'John', 'Doe', '+46711223344');
INSERT INTO users (id, firstName, lastName, phoneNumber) VALUES ('2', 'Jane', 'Doe', '+46722334455');
