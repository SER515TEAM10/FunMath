DROP TABLE IF EXISTS student_grades;
DROP TABLE IF EXISTS assignment;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_role;

CREATE TABLE `funmath_project`.`user_role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_id_UNIQUE` (`role_id`),
  UNIQUE KEY `role_name_UNIQUE` (`role_name`)
)COMMENT = 'This table stores user roles like student, teacher, or administrator';


INSERT INTO user_role(role_id,role_name) VALUES(100,'STUDENT');
INSERT INTO user_role(role_id,role_name) VALUES(101,'ADMIN');
INSERT INTO user_role(role_id,role_name) VALUES(102,'TEACHER');

CREATE TABLE `funmath_project`.`users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `gender` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `email_id` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role_id` int(11) DEFAULT '100',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_id_UNIQUE` (`email_id`),
  KEY `role_id_fk_idx` (`role_id`),
  CONSTRAINT `role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `user_role` (`role_id`))COMMENT = 'used to store user info';

INSERT INTO users (first_name,last_name,email_id,password,gender,dob) VALUES ('sharad','dhar','sharaddhar@yahoo.com','abcd','male','2019-10-09');

CREATE TABLE `funmath_project`.`assignment` (
	`assignment_id` INT NOT NULL AUTO_INCREMENT,
	`assignment_name` VARCHAR(100) NOT NULL,
	`due_date` DATE NOT NULL,
	PRIMARY KEY (`assignment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO funmath_project.assignment (assignment_name, due_date) values("Addition", '2019-10-31');
INSERT INTO funmath_project.assignment (assignment_name, due_date) values("Subtraction", '2019-09-10');
INSERT INTO funmath_project.assignment (assignment_name, due_date) values("Multiplication", '2019-11-01');

CREATE TABLE `funmath_project`.`student_grades` (
	`ass_id` INT NOT NULL,
	`student_user_id` INT NOT NULL,
	`marks` INT,
	`maximum_marks` INT NOT NULL,
	`comments` VARCHAR(200),
	PRIMARY KEY (`ass_id`,`student_user_id`),
    CONSTRAINT `student_user_id`
		FOREIGN KEY (`student_user_id`)
		REFERENCES `funmath_project`.`users` (`user_id`)
        ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	CONSTRAINT `ass_id`
		FOREIGN KEY (`ass_id`)
		REFERENCES `funmath_project`.`assignment` (`assignment_id`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO funmath_project.student_grades (ass_id, student_user_id, marks, maximum_marks, comments) values (1, 1, 100, 100, 'Excellent!');
INSERT INTO funmath_project.student_grades (ass_id, student_user_id, marks, maximum_marks, comments) values (2, 1, 90, 100, 'Great!');
INSERT INTO funmath_project.student_grades (ass_id, student_user_id, marks, maximum_marks, comments) values (3, 1, 90, 100, 'Great!');

#Query for creating expression table   

CREATE TABLE `funmath_project`.`funmath_expression_tab` (
  `expression_id` INT NOT NULL AUTO_INCREMENT,
  `expression_val` VARCHAR(1000) NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`expression_id`),
  INDEX `user_id_idx` (`user_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `funmath_project`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);