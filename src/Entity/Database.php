<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DatabaseRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DatabaseRepository::class)]
#[ORM\Table(name: '`database`')]
#[ApiResource]
class Database
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $username = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $password = null;

    #[ORM\Column(nullable: true)]
    private ?int $default_port = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $server_choice = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $language = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $database_name = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(?string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getDefaultPort(): ?int
    {
        return $this->default_port;
    }

    public function setDefaultPort(?int $default_port): static
    {
        $this->default_port = $default_port;

        return $this;
    }

    public function getServerChoice(): ?string
    {
        return $this->server_choice;
    }

    public function setServerChoice(?string $server_choice): static
    {
        $this->server_choice = $server_choice;

        return $this;
    }

    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(?string $language): static
    {
        $this->language = $language;

        return $this;
    }

    public function getDatabaseName(): ?string
    {
        return $this->database_name;
    }

    public function setDatabaseName(?string $database_name): static
    {
        $this->database_name = $database_name;

        return $this;
    }
}
