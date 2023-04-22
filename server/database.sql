CREATE DATABASE devdb;

--set extension for uuid()
--create extention if not exists "uuid-ossp" in postgresql CL;
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);