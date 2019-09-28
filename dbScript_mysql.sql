CREATE TABLE `custom_user`.`users` (
  `user_id` INT NOT NULL DEFAULT 1000,
  `user_name` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `dob` DATE NOT NULL,
  `email_id` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC) VISIBLE,
  UNIQUE INDEX `email_id_UNIQUE` (`email_id` ASC) VISIBLE)
COMMENT = 'used to store user info';

INSERT INTO users (first_name,last_name,email_id,password,gender,dob) VALUES ('sharad','dhar','sharaddhar@yahoo.com','abcd','male','2019-10-09');


CREATE TABLE `custom_user`.`roles` (
  `user_id` INT NOT NULL,
  `user_role` VARCHAR(45) NOT NULL DEFAULT 'Student',
  INDEX `user_id_fk_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id_fk`
    FOREIGN KEY (`user_id`)
    REFERENCES `custom_user`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
COMMENT = 'This table stores user roles like student, teacher, or administrator';

INSERT INTO roles (user_id) VALUES (1000);
