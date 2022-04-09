SET search_path TO springReact;

CREATE TABLE IF NOT EXISTS springreact_users (
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    enabled boolean NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE IF NOT EXISTS springreact_notes (
    id serial primary key,
    title VARCHAR(100) NOT NULL,
    body VARCHAR(100) ,
    category VARCHAR(100)
);