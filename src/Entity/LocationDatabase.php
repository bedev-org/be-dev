<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\LocationDatabaseRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LocationDatabaseRepository::class)]
#[ApiResource]
class LocationDatabase
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $username_database = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $password_database = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $host_database = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $port_database = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name_database = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $stockage_database = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getUsernameDatabase(): ?string
    {
        return $this->username_database;
    }

    public function setUsernameDatabase(?string $username_database): static
    {
        $this->username_database = $username_database;

        return $this;
    }

    public function getPasswordDatabase(): ?string
    {
        return $this->password_database;
    }

    public function setPasswordDatabase(?string $password_database): static
    {
        $this->password_database = $password_database;

        return $this;
    }

    public function getHostDatabase(): ?string
    {
        return $this->host_database;
    }

    public function setHostDatabase(?string $host_database): static
    {
        $this->host_database = $host_database;

        return $this;
    }

    public function getPortDatabase(): ?string
    {
        return $this->port_database;
    }

    public function setPortDatabase(?string $port_database): static
    {
        $this->port_database = $port_database;

        return $this;
    }

    public function getNameDatabase(): ?string
    {
        return $this->name_database;
    }

    public function setNameDatabase(?string $name_database): static
    {
        $this->name_database = $name_database;

        return $this;
    }

    public function getStockageDatabase(): ?string
    {
        return $this->stockage_database;
    }

    public function setStockageDatabase(?string $stockage_database): static
    {
        $this->stockage_database = $stockage_database;

        return $this;
    }
}
