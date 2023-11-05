<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230804132025 extends AbstractMigration
{
  public function getDescription(): string
  {
    return 'Creation of TravelStep table';
  }

  public function up(Schema $schema): void
  {
    $this->addSql('CREATE TABLE travel_step (
          id INT AUTO_INCREMENT NOT NULL,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(500) NOT NULL,
          address VARCHAR(255) NOT NULL,
          latitude DOUBLE PRECISION NOT NULL,
          longitude DOUBLE PRECISION NOT NULL,
          plus VARCHAR(300) DEFAULT NULL,
          less VARCHAR(300) DEFAULT NULL,
          PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
  }

  public function down(Schema $schema): void
  {
    $this->addSql('DROP TABLE travel_step');
  }
}
