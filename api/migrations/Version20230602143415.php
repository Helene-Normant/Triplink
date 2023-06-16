<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230602143415 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add Category and TravelerPartner Table';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, category_fr VARCHAR(255) NOT NULL, category_en VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE traveler_partner (id INT AUTO_INCREMENT NOT NULL, partner_fr VARCHAR(255) NOT NULL, partner_en VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('INSERT INTO category (category_fr, category_en) VALUES 
                        ("Touristique","Tourist"),
                        ("Road Trip","Road Trip"),
                        ("Aventure","Adventure"),
                        ("Nature","Nature"),
                        ("Culturel","Cultural"),
                        ("Culinaire","Culinary"),
                        ("Détente","Chill"),
                        ("Voyages d\'affaires","Business trip"),
                        ("Humanitaire","Humanitarian")');
        $this->addSql('INSERT INTO traveler_partner (partner_fr, partner_en) VALUES 
                         ("En famille","Family Trip"),
                         ("En solo","Solo travel"),
                         ("Entre amis","With friends"),
                         ("En groupe","Group Travel")');

    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE traveler_partner');
    }
}
