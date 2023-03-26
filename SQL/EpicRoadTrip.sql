CREATE TABLE `Users` (
  `userId` nvarchar(450) NOT NULL,
  `Id` nvarchar(450) NOT NULL,
  `Username` nvarchar(450) NOT NULL,
  `Email` nvarchar(450) NOT NULL,
  `Password` nvarchar(450) NOT NULL,
  `RoleId` nvarchar(450) NOT NULL,
  `Created_at` datetime,
  PRIMARY KEY (`userId`)
);

CREATE TABLE `Roles` (
  `Id` nvarchar(450) NOT NULL,
  `Name` nvarchar(450),
  PRIMARY KEY (`Id`)
);

CREATE TABLE `ParcoursSauvegarder` (
  `Id` nvarchar(450) NOT NULL,
  `UserId` nvarchar(450) NOT NULL,
  `Adresse` nvarchar(450) NOT NULL,
  `Drink` bit,
  `Eat` bit,
  `Travel` bit,
  `Sleep` bit,
  `Enjoy` bit,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (`UserId`) REFERENCES `Users` (`userId`)
);

CREATE TABLE `Likes` (
  `Id` nvarchar(450) NOT NULL,
  `UserId` nvarchar(450) NOT NULL,
  `ParcoursId` nvarchar(450) NOT NULL,
  `Like` bit,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (`UserId`) REFERENCES `Users` (`userId`),
  FOREIGN KEY (`ParcoursId`) REFERENCES `ParcoursSauvegarder` (`Id`)
);

CREATE TABLE `Dislikes` (
  `Id` nvarchar(450) NOT NULL,
  `UserId` nvarchar(450) NOT NULL,
  `ParcoursId` nvarchar(450) NOT NULL,
  `DisLike` bit,
  PRIMARY KEY (`Id`),
  FOREIGN KEY (`UserId`) REFERENCES `Users` (`userId`),
  FOREIGN KEY (`ParcoursId`) REFERENCES `ParcoursSauvegarder` (`Id`)
);

ALTER TABLE `Users` ADD FOREIGN KEY (`RoleId`) REFERENCES `Roles` (`Id`);
