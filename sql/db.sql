CREATE TABLE categories (
    id SERIAL PRIMARY KEY ,
    name TEXT NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE posts  (
    id SERIAL PRIMARY KEY ,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL,
);