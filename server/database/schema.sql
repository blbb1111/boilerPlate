CREATE DATABASE myyoutube;

\c myyoutube;

CREATE TABLE favorites (
  id text PRIMARY KEY NOT NULL,
  music BOOLEAN NOT NULL,
  comedy BOOLEAN NOT NULL,
  educational BOOLEAN NOT NULL,
  history BOOLEAN NOT NULL,
  etc BOOLEAN NOT NULL
);