<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231031101439 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cart (id INT AUTO_INCREMENT NOT NULL, basket LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', created_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', user_name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE location_database (id INT AUTO_INCREMENT NOT NULL, username_database VARCHAR(255) DEFAULT NULL, password_database VARCHAR(255) DEFAULT NULL, host_database VARCHAR(255) DEFAULT NULL, port_database VARCHAR(255) DEFAULT NULL, name_database VARCHAR(255) DEFAULT NULL, stockage_database VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE location_domain (id INT AUTO_INCREMENT NOT NULL, name_domain VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE location_server (id INT AUTO_INCREMENT NOT NULL, username_server VARCHAR(255) DEFAULT NULL, password_server VARCHAR(255) DEFAULT NULL, host_server VARCHAR(255) DEFAULT NULL, port_server VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE cart');
        $this->addSql('DROP TABLE location_database');
        $this->addSql('DROP TABLE location_domain');
        $this->addSql('DROP TABLE location_server');

    }
}
