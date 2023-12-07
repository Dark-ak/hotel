create database hotel;
use hotel; 

create table user(email varchar(50) primary key, password varchar(50));
create table city(code int primary key, name varchar(20));
create table country(code int primary key, name varchar(20));
create table hotels(id varchar(10) primary key, h_name varchar(100), country_code int, city_code int, foreign key(country_code) references city(code), foreign key(city_code) references country(code)) ;



INSERT INTO city (code, name) VALUES
(1, 'New York'),
(2, 'London'),
(3, 'Paris'),
(4, 'Tokyo'),
(5, 'Sydney'),
(6, 'Dubai'),
(7, 'Beijing'),
(8, 'Mumbai'),
(9, 'São Paulo'),
(10, 'Amsterdam');

INSERT INTO country (code, name) VALUES
(1, 'United States'),
(2, 'United Kingdom'),
(3, 'France'),
(4, 'Japan'),
(5, 'Australia'),
(6, 'United Arab Emirates'),
(7, 'China'),
(8, 'India'),
(9, 'Brazil'),
(10, 'Germany');

insert into user(email,password) values("admin@gmail.com", "admin");

