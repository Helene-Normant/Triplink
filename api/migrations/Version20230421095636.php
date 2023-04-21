<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230421095636 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE publication ADD traveler_id INT NOT NULL');
        $this->addSql('ALTER TABLE publication ADD CONSTRAINT FK_AF3C677959BBE8A3 FOREIGN KEY (traveler_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_AF3C677959BBE8A3 ON publication (traveler_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE publication DROP FOREIGN KEY FK_AF3C677959BBE8A3');
        $this->addSql('DROP INDEX IDX_AF3C677959BBE8A3 ON publication');
        $this->addSql('ALTER TABLE publication DROP traveler_id');
    }
}
