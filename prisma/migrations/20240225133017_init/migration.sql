-- CreateTable
CREATE TABLE `Hero` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `main_id` SMALLINT UNSIGNED NOT NULL,
    `name` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Hero_main_id_key`(`main_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Position` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Speciality` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skin` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `heroId` SMALLINT UNSIGNED NOT NULL,
    `skinTag` VARCHAR(25) NOT NULL,
    `skinTagIcon` VARCHAR(191) NULL,
    `name` VARCHAR(25) NOT NULL,
    `potrait` VARCHAR(191) NOT NULL,
    `splashArt` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `heroId` SMALLINT UNSIGNED NOT NULL,
    `type` VARCHAR(10) NOT NULL,
    `name` VARCHAR(25) NOT NULL,
    `damageType` VARCHAR(10) NULL,
    `icon` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SkillCost` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `skillId` INTEGER UNSIGNED NULL,
    `value` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SkillCooldown` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `skillId` INTEGER UNSIGNED NULL,
    `value` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpecialTerms` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `skillId` INTEGER UNSIGNED NULL,
    `name` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpecialValue` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `skillId` INTEGER UNSIGNED NULL,
    `name` VARCHAR(191) NOT NULL,
    `valuesFloat` JSON NOT NULL,
    `isPercentage` BOOLEAN NOT NULL,
    `heading` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rating` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `heroId` SMALLINT UNSIGNED NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `rgb` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HeroToRole` (
    `A` SMALLINT UNSIGNED NOT NULL,
    `B` SMALLINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_HeroToRole_AB_unique`(`A`, `B`),
    INDEX `_HeroToRole_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HeroToPosition` (
    `A` SMALLINT UNSIGNED NOT NULL,
    `B` SMALLINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_HeroToPosition_AB_unique`(`A`, `B`),
    INDEX `_HeroToPosition_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HeroToSpeciality` (
    `A` SMALLINT UNSIGNED NOT NULL,
    `B` SMALLINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_HeroToSpeciality_AB_unique`(`A`, `B`),
    INDEX `_HeroToSpeciality_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SkillToTag` (
    `A` INTEGER UNSIGNED NOT NULL,
    `B` SMALLINT UNSIGNED NOT NULL,

    UNIQUE INDEX `_SkillToTag_AB_unique`(`A`, `B`),
    INDEX `_SkillToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Skin` ADD CONSTRAINT `Skin_heroId_fkey` FOREIGN KEY (`heroId`) REFERENCES `Hero`(`main_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_heroId_fkey` FOREIGN KEY (`heroId`) REFERENCES `Hero`(`main_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SkillCost` ADD CONSTRAINT `SkillCost_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SkillCooldown` ADD CONSTRAINT `SkillCooldown_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpecialTerms` ADD CONSTRAINT `SpecialTerms_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpecialValue` ADD CONSTRAINT `SpecialValue_skillId_fkey` FOREIGN KEY (`skillId`) REFERENCES `Skill`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rating` ADD CONSTRAINT `Rating_heroId_fkey` FOREIGN KEY (`heroId`) REFERENCES `Hero`(`main_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroToRole` ADD CONSTRAINT `_HeroToRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `Hero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroToRole` ADD CONSTRAINT `_HeroToRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroToPosition` ADD CONSTRAINT `_HeroToPosition_A_fkey` FOREIGN KEY (`A`) REFERENCES `Hero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroToPosition` ADD CONSTRAINT `_HeroToPosition_B_fkey` FOREIGN KEY (`B`) REFERENCES `Position`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroToSpeciality` ADD CONSTRAINT `_HeroToSpeciality_A_fkey` FOREIGN KEY (`A`) REFERENCES `Hero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroToSpeciality` ADD CONSTRAINT `_HeroToSpeciality_B_fkey` FOREIGN KEY (`B`) REFERENCES `Speciality`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SkillToTag` ADD CONSTRAINT `_SkillToTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SkillToTag` ADD CONSTRAINT `_SkillToTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;