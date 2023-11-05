<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230525140330 extends AbstractMigration
{
  public function getDescription(): string
  {
    return 'Create country table';
  }

  public function up(Schema $schema): void
  {
    $this->addSql('CREATE TABLE country (
          id INT AUTO_INCREMENT NOT NULL,
          code INT NOT NULL,
          alpha2 VARCHAR(10) NOT NULL,
          alpha3 VARCHAR(10) NOT NULL,
          name_fr VARCHAR(255) NOT NULL,
          name_en VARCHAR(255) NOT NULL,
          PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
  }

  public function down(Schema $schema): void
  {
    $this->addSql('DROP TABLE country');
  }
}
