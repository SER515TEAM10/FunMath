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

''' Query for creating expression table  '''     
                                                                         
CREATE TABLE `student_expressions` (
  `expression_id` int(11) NOT NULL AUTO_INCREMENT,
  `expression_val` varchar(1000) NOT NULL,
  `user_id` int(11) NOT NULL,
  `result` int(11) DEFAULT NULL,
  PRIMARY KEY (`expression_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) 
 ''' Table for storing published assignments''' 
  CREATE TABLE `published_assignments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `assignment_number` int(11) DEFAULT NULL,
  `class` int(11) DEFAULT NULL,
  `question_id` int(11) DEFAULT NULL,
  `solution_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 
