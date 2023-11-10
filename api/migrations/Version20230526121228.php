<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;
use Doctrine\DBAL\Connection;

final class Version20230526121228 extends AbstractMigration
{

  protected $connection;

  public function __construct(Connection $connection)
  {
    $this->connection = $connection;
  }

  public function getDescription(): string
  {
    return 'Add data to Table country';
  }

  public function up(Schema $schema): void
  {
    $sqlFilePath = __DIR__ . '/../src/Data/country_202305261138.sql';
    $sql = file_get_contents($sqlFilePath);

    // Execute the SQL query
    $this->connection->executeQuery($sql);
  }

  public function down(Schema $schema): void
  {
    // Truncate (empty) the table instead of dropping it     
    $this->connection->executeQuery('TRUNCATE TABLE country');
  }
}
