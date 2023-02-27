CREATE TABLE `Users` (
  `Id` nvarchar(450),
  `Username` nvarchar(450),
  `Email` nvarchar(450),
  `Password` nvarchar(450),
  `RoleId` nvarchar(450),
  `Created_at` datetime
);

CREATE TABLE `Roles` (
  `Id` nvarchar(450),
  `Name` nvarchar(450)
);

CREATE TABLE `ParcoursSauvegarder` (
  `Id` nvarchar(450),
  `UserId` nvarchar(450),
  `Adresse` nvarchar(450),
  `Drink` bit,
  `Eat` bit,
  `Travel` bit,
  `Sleep` bit,
  `Enjoy` bit
);

CREATE TABLE `Likes` (
  `Id` nvarchar(450),
  `UserId` nvarchar(450),
  `ParcoursId` nvarchar(450),
  `Like` bit
);

CREATE TABLE `Dislikes` (
  `Id` nvarchar(450),
  `UserId` nvarchar(450),
  `ParcoursId` nvarchar(450),
  `DisLike` bit
);

ALTER TABLE `Roles` ADD FOREIGN KEY (`Id`) REFERENCES `Users` (`RoleId`);

ALTER TABLE `Users` ADD FOREIGN KEY (`Id`) REFERENCES `ParcoursSauvegarder` (`UserId`);

ALTER TABLE `Users` ADD FOREIGN KEY (`Id`) REFERENCES `Likes` (`UserId`);

ALTER TABLE `ParcoursSauvegarder` ADD FOREIGN KEY (`Id`) REFERENCES `Likes` (`ParcoursId`);

ALTER TABLE `Users` ADD FOREIGN KEY (`Id`) REFERENCES `Dislikes` (`UserId`);

ALTER TABLE `ParcoursSauvegarder` ADD FOREIGN KEY (`Id`) REFERENCES `Dislikes` (`ParcoursId`);
