<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231006123234 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category DROP publication_category_id');
        $this->addSql('ALTER TABLE publication ADD country_id INT NOT NULL, ADD travel_type_id INT NOT NULL, DROP country, DROP travel_type');
        $this->addSql('ALTER TABLE publication ADD CONSTRAINT FK_AF3C6779F92F3E70 FOREIGN KEY (country_id) REFERENCES country (id)');
        $this->addSql('ALTER TABLE publication ADD CONSTRAINT FK_AF3C677940F3B82 FOREIGN KEY (travel_type_id) REFERENCES category (id)');
        $this->addSql('CREATE INDEX IDX_AF3C6779F92F3E70 ON publication (country_id)');
        $this->addSql('CREATE INDEX IDX_AF3C677940F3B82 ON publication (travel_type_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category ADD publication_category_id INT NOT NULL');
        $this->addSql('ALTER TABLE publication DROP FOREIGN KEY FK_AF3C6779F92F3E70');
        $this->addSql('ALTER TABLE publication DROP FOREIGN KEY FK_AF3C677940F3B82');
        $this->addSql('DROP INDEX IDX_AF3C6779F92F3E70 ON publication');
        $this->addSql('DROP INDEX IDX_AF3C677940F3B82 ON publication');
        $this->addSql('ALTER TABLE publication ADD country VARCHAR(255) NOT NULL, ADD travel_type VARCHAR(255) NOT NULL, DROP country_id, DROP travel_type_id');
    }
}
