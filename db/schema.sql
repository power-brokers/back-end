CREATE DATABASE powerbrokers;

CREATE TABLE vendors (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE NOT NULL,
  lat INT NOT NULL,
  lng INT NOT NULL,
  price SMALLINT NOT NULL
);

INSERT INTO vendors(username, lat, lng, price) VALUES ('nuno', '37763', '-122459', '12');