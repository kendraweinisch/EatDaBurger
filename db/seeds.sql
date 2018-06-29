-- These are sample answers 

INSERT INTO burgers (type, devoured)
VALUES ('Veggie burger', false);

INSERT INTO burgers (type, devoured)
VALUES ('Tofu burger', true);

INSERT INTO burgers (type, devoured)
VALUES ('Jellyfish burger', false);
USE burgers_db;
UPDATE burgers SET devoured = true WHERE id = 6;