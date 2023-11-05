<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20231006123655 extends AbstractMigration
{
  public function getDescription(): string
  {
    return '';
  }

  public function up(Schema $schema): void
  {
    $this->addSql('ALTER TABLE publication ADD travel_partner_id INT NOT NULL, DROP travel_partner');
    $this->addSql('ALTER TABLE publication ADD CONSTRAINT FK_AF3C6779CA26192D FOREIGN KEY (travel_partner_id) REFERENCES traveler_partner (id)');
    $this->addSql('CREATE INDEX IDX_AF3C6779CA26192D ON publication (travel_partner_id)');
  }

  public function down(Schema $schema): void
  {
    $this->addSql('ALTER TABLE publication DROP FOREIGN KEY FK_AF3C6779CA26192D');
    $this->addSql('DROP INDEX IDX_AF3C6779CA26192D ON publication');
    $this->addSql('ALTER TABLE publication ADD travel_partner VARCHAR(255) DEFAULT NULL, DROP travel_partner_id');
  }
}
