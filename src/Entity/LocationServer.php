<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\LocationServerRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LocationServerRepository::class)]
#[ApiResource]
class LocationServer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $username_server = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $password_server = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $host_server = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $port_server = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getUsernameServer(): ?string
    {
        return $this->username_server;
    }

    public function setUsernameServer(?string $username_server): static
    {
        $this->username_server = $username_server;

        return $this;
    }

    public function getPasswordServer(): ?string
    {
        return $this->password_server;
    }

    public function setPasswordServer(?string $password_server): static
    {
        $this->password_server = $password_server;

        return $this;
    }

    public function getHostServer(): ?string
    {
        return $this->host_server;
    }

    public function setHostServer(?string $host_server): static
    {
        $this->host_server = $host_server;

        return $this;
    }

    public function getPortServer(): ?string
    {
        return $this->port_server;
    }

    public function setPortServer(?string $port_server): static
    {
        $this->port_server = $port_server;

        return $this;
    }
}
