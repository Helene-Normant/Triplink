<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230811093704 extends AbstractMigration
{
  public function getDescription(): string
  {
    return 'Creation of ManyToOne relation between TravelStep and Publication tables';
  }

  public function up(Schema $schema): void
  {
    $this->addSql('ALTER TABLE travel_step ADD publication_related_id INT NOT NULL');
    $this->addSql('ALTER TABLE travel_step ADD CONSTRAINT FK_88E11D912F1585E0 FOREIGN KEY (publication_related_id) REFERENCES publication (id)');
    $this->addSql('CREATE INDEX IDX_88E11D912F1585E0 ON travel_step (publication_related_id)');
  }

  public function down(Schema $schema): void
  {
    $this->addSql('ALTER TABLE travel_step DROP FOREIGN KEY FK_88E11D912F1585E0');
    $this->addSql('DROP INDEX IDX_88E11D912F1585E0 ON travel_step');
    $this->addSql('ALTER TABLE travel_step DROP publication_related_id');
  }
}
