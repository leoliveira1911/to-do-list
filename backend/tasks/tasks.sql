--Create table

create table tasks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(400),
    deadline VARCHAR(100),
    concluded VARCHAR(100) ,
   
    PRIMARY KEY(id)
) ;

--npm fu

INSERT INTO tasks (name, description, deadline, concluded)

VALUES( 'lanche', 'alimentação', '15/09' , 'true');


SELECT name, description, deadline FROM tasks;