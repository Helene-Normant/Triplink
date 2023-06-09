<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230519123255 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Creation of Likes Table: relation ManyToMany between User and Publication entities';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE likes (userId INT NOT NULL, publicationId INT NOT NULL, INDEX IDX_49CA4E7D64B64DCC (userId), INDEX IDX_49CA4E7D796DA8A (publicationId), PRIMARY KEY(userId, publicationId)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE likes ADD CONSTRAINT FK_49CA4E7D64B64DCC FOREIGN KEY (userId) REFERENCES user (id)');
        $this->addSql('ALTER TABLE likes ADD CONSTRAINT FK_49CA4E7D796DA8A FOREIGN KEY (publicationId) REFERENCES publication (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE likes DROP FOREIGN KEY FK_49CA4E7D64B64DCC');
        $this->addSql('ALTER TABLE likes DROP FOREIGN KEY FK_49CA4E7D796DA8A');
        $this->addSql('DROP TABLE likes');
    }
}
