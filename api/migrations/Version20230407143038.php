<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230407143038 extends AbstractMigration
{
  public function getDescription(): string
  {
    return 'Create table User';
  }

  public function up(Schema $schema): void
  {
    $this->addSql('CREATE TABLE user (
          id INT AUTO_INCREMENT NOT NULL,
          email VARCHAR(180) NOT NULL,
          roles JSON NOT NULL,
          password VARCHAR(255) NOT NULL,
          username VARCHAR(255) NOT NULL,
          first_name VARCHAR(255) DEFAULT NULL,
          last_name VARCHAR(255) DEFAULT NULL,
          picture VARCHAR(500) DEFAULT NULL,
          description VARCHAR(255) DEFAULT NULL,
          birthday DATE DEFAULT NULL,
          created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\',
          UNIQUE INDEX UNIQ_8D93D649E7927C74 (email),
          UNIQUE INDEX UNIQ_8D93D649F85E0677 (username),
          PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
  }

  public function down(Schema $schema): void
  {
    $this->addSql('DROP TABLE user');
  }
}
