create database service_desk;
use service_desk;

CREATE TABLE Category (
	categoryId_Category bigint(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	categoryName_Category varchar(50) NOT NULL UNIQUE,
	categoryDesc_Category varchar(100) NOT NULL
);

CREATE TABLE Users (
	usersId_Users bigint(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	usersName_Users varchar(50) NOT NULL UNIQUE KEY,
	fullName_Users varchar(50) NOT NULL,
	mobNo_Users bigint(20) NOT NULL,
	email_Users varchar(50) NOT NULL,
	address_Users varchar(100) DEFAULT NULL,
	categoryId_Users bigint(20) DEFAULT NULL,
	isAdmin_Users tinyint(1) DEFAULT NULL,
	password_Users varchar(50) NOT NULL,
	FOREIGN KEY ( categoryId_Users) REFERENCES Category (categoryId_Category)
);

CREATE TABLE TaskStatus(
	statusId_TaskStatus int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	statusName_TaskStatus varchar(10) NOT NULL UNIQUE,
	statusDesc_TaskStatus varchar(50) NOT NULL
);

CREATE TABLE Task (
	taskId_Task bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	taskName_Task varchar(50) DEFAULT NULL,
	taskDesc_Task varchar(100) DEFAULT NULL,
	categoryId_Task bigint(20) DEFAULT NULL,
	adminId_Task bigint(20) DEFAULT NULL,
	toUserId_Task bigint(20) DEFAULT NULL,
	fromUserId_Task bigint(20) DEFAULT NULL,
	startDate_Task date DEFAULT NULL,
	endDate_Task date DEFAULT NULL,
	statusId_Task int(11) DEFAULT NULL,
	FOREIGN KEY (categoryId_Task) REFERENCES Category (categoryId_Category),
	FOREIGN KEY (toUserId_Task ) REFERENCES Users ( usersId_Users),
	FOREIGN KEY (fromUserId_Task) REFERENCES Users ( usersId_Users),
	FOREIGN KEY (adminId_Task) REFERENCES Users ( usersId_Users),
	FOREIGN KEY (statusId_Task ) REFERENCES TaskStatus (  statusId_TaskStatus)
);

CREATE TABLE TicketHistory (
	ticketHistoryId_TicketHistory  bigint(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	taskId_TicketHistory  bigint(20) DEFAULT NULL,
	taskName_TicketHistory  bigint(20) DEFAULT NULL,
	fromUserId_TicketHistory  bigint(20) DEFAULT NULL,
	ToUserId_TicketHistory  bigint(20) DEFAULT NULL,
	categoryId_TicketHistory bigint(20) DEFAULT NULL,
	startDate_TicketHistory date DEFAULT NULL,
	endDate_TicketHistory date DEFAULT NULL,
	ticketHistoryDate_TicketHistory  date DEFAULT NULL,
	statusId_TicketHistory  int(11) DEFAULT NULL,
	comment_TicketHistory varchar(100) DEFAULT NULL,	
	FOREIGN KEY (statusId_TicketHistory) REFERENCES TaskStatus (statusId_TaskStatus),
	FOREIGN KEY (taskId_TicketHistory) REFERENCES Task (taskId_Task),
	FOREIGN KEY (categoryId_TicketHistory) REFERENCES Category (categoryId_Category ),
	FOREIGN KEY (fromUserId_TicketHistory) REFERENCES Users (usersId_Users),
	FOREIGN KEY (ToUserId_TicketHistory) REFERENCES Users (usersId_Users),
);
SELECT t.taskId_Task, t.taskName_Task, t.taskDesc_Task, c.categoryName_Category, TU.usersName_Users AS ToUSER, FU.usersName_Users AS FromUser, t.startDate_Task, t.endDate_Task, t.actualEndDate_Task, ts.statusName_TaskStatus
FROM task t
LEFT JOIN users TU On t.toUserId_Task = TU.usersId_Users
LEFT JOIN users FU ON t.fromUserId_Task = FU.usersId_Users
LEFT JOIN taskstatus TS ON t.statusId_Task = TS.statusId_TaskStatus
LEFT JOIN category C ON t.categoryId_Task = C.categoryId_Category;

insert into Category (categoryName_Category,categoryDesc_Category )
values ('Administrator','Admin Administrator');
insert into Category (categoryName_Category,categoryDesc_Category )
values ('Finance','Finance');
insert into Category (categoryName_Category,categoryDesc_Category )
values ('Human Resource','Human Resource');
insert into Category (categoryName_Category,categoryDesc_Category )
values ('Facility','Facilities');
insert into Category (categoryName_Category,categoryDesc_Category )
values ('IT','Information Tecnology');


INSERT INTO Users (usersName_Users, fullName_Users, mobNo_Users,email_Users,address_Users,categoryId_Users,isAdmin_Users,password_Users)
VALUES ('admin','Administrator',9449953548,'admin@gmail.com','Bangalore',1,1,'admin');

SELECT th.ticketHistoryId_TicketHistory,th.taskId_TicketHistory,th.taskName_TicketHistory,TU.usersName_Users AS ToUSER,FU.usersName_Users AS FromUser,C.categoryName_Category,th.startDate_TicketHistory,th.endDate_TicketHistory,th.actualEndDate_TicketHistory,th.ticketHistoryDate_TicketHistory, TS.statusName_TaskStatus,th.comment_TicketHistory
from tickethistory th
left join  users TU On th.ToUserId_TicketHistory = TU.usersId_Users
LEFT JOIN users FU ON th.fromUserId_TicketHistory = FU.usersId_Users
LEFT JOIN taskstatus TS ON th.statusId_TicketHistory = TS.statusId_TaskStatus
LEFT JOIN category C ON th.categoryId_TicketHistory = C.categoryId_Category;



