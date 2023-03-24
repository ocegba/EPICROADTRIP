CREATE TABLE `Users` (
  `userId` nvarchar(450), 
  `id` nvarchar(450),
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


-- ALTER TABLE `Users` ADD FOREIGN KEY (`RoleId`) REFERENCES `Roles` (`Id`);

-- ALTER TABLE `Roles` ADD FOREIGN KEY (`Id`) REFERENCES `Users` (`RoleId`);

-- ALTER TABLE `Users` ADD FOREIGN KEY (`Id`) REFERENCES `Likes` (`UserId`);

-- ALTER TABLE `ParcoursSauvegarder` ADD FOREIGN KEY (`Id`) REFERENCES `Likes` (`ParcoursId`);

-- ALTER TABLE `Users` ADD FOREIGN KEY (`Id`) REFERENCES `Dislikes` (`UserId`);

-- ALTER TABLE `ParcoursSauvegarder` ADD FOREIGN KEY (`Id`) REFERENCES `Dislikes` (`ParcoursId`);

-- ALTER TABLE `Likes` ADD FOREIGN KEY (`UserId`) REFERENCES `Users` (`userId`);
-- ALTER TABLE `Likes` ADD FOREIGN KEY (`ParcoursId`) REFERENCES `ParcoursSauvegarder` (`Id`);

-- ALTER TABLE `Dislikes` ADD FOREIGN KEY (`UserId`) REFERENCES `Users` (`userId`);
-- ALTER TABLE `Dislikes` ADD FOREIGN KEY (`ParcoursId`) REFERENCES `ParcoursSauvegarder` (`Id`);
