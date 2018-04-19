CREATE DATABASE powerbrokers;

CREATE TABLE vendors (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE NOT NULL,
  lat REAL NOT NULL,
  lng REAL NOT NULL,
  price SMALLINT NOT NULL
);

INSERT INTO vendors(username, lat, lng, price) VALUES ('nuno', '37.763', '-122.459', '12');
INSERT INTO vendors(username, lat, lng, price) VALUES ('zack', '37.783', '-122.429', '20');
INSERT INTO vendors(username, lat, lng, price) VALUES ('will', '37.762', '-122.451', '14');
INSERT INTO vendors(username, lat, lng, price) VALUES ('jonathan', '37.763', '-122.455', '10');
INSERT INTO vendors(username, lat, lng, price) VALUES ('priscilla', '37.764', '-122.454', '16');