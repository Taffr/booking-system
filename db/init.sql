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

CREATE TABLE IF NOT EXISTS reservations (
    id TEXT PRIMARY KEY,
    property_id TEXT NOT NULL,
    renter_id TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    checked_in BOOLEAN DEFAULT FALSE,
    FOREIGN KEY(property_id) REFERENCES properties(id),
    FOREIGN KEY(renter_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    from_id TEXT NOT NULL,
    to_id TEXT NOT NULL,
    message TEXT NOT NULL,
    FOREIGN KEY(to_id) REFERENCES users(id),
    FOREIGN KEY(from_id) REFERENCES users(id)
);

-- Initial data for easier testing
INSERT INTO users (id, name, phone, hash) VALUES ('1', 'John Doe', '+46711223344', 'somehash1');
INSERT INTO users (id, name, phone, hash) VALUES ('2', 'Jane Doe', '+46722334455', 'somehash2');

INSERT INTO properties (id, name, owner_id) VALUES ('1', 'House 1', '1');
INSERT INTO properties (id, name, owner_id) VALUES ('2', 'House 2', '2');

INSERT INTO reservations (id, property_id, renter_id, start_date, end_date) VALUES ('1', '1', '2', '2020-01-01', '2020-01-31');
INSERT INTO reservations (id, property_id, renter_id, start_date, end_date) VALUES ('2', '2', '1', '2020-02-01', '2020-02-28');

