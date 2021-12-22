CREATE TABLE IF NOT EXISTS drink(
   id_drink INT AUTO_INCREMENT,
   name_drink VARCHAR(256) NOT NULL,
   content_drink TEXT NOT NULL,
   price_drink REAL NOT NULL,
   PRIMARY KEY(id_drink)
);

CREATE TABLE IF NOT EXISTS resource(
   id_resource INT AUTO_INCREMENT,
   name_resource VARCHAR(256) NOT NULL,
   stock_resource REAL NOT NULL,
   PRIMARY KEY(id_resource)
);

CREATE TABLE IF NOT EXISTS cup_size(
   size INT,
   PRIMARY KEY(size)
);

CREATE TABLE IF NOT EXISTS drink_order(
   id_order INT AUTO_INCREMENT,
   canceled_order BOOLEAN NOT NULL,
   bought_cup_order BOOLEAN NOT NULL,
   size INT NOT NULL,
   id_drink INT NOT NULL,
   PRIMARY KEY(id_order),
   FOREIGN KEY(size) REFERENCES cup_size(size),
   FOREIGN KEY(id_drink) REFERENCES drink(id_drink)
);

CREATE TABLE IF NOT EXISTS cup(
   id_cup INT AUTO_INCREMENT,
   price_cup REAL NOT NULL,
   stock_cup INT NOT NULL,
   size INT NOT NULL,
   PRIMARY KEY(id_cup),
   UNIQUE(size),
   FOREIGN KEY(size) REFERENCES cup_size(size)
);

CREATE TABLE IF NOT EXISTS uses_resource(
   id_resource INT,
   id_order INT,
   quantity_used INT NOT NULL,
   PRIMARY KEY(id_resource, id_order),
   FOREIGN KEY(id_resource) REFERENCES resource(id_resource),
   FOREIGN KEY(id_order) REFERENCES drink_order(id_order)
);
