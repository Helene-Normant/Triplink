<?php

namespace App\Entity;

use App\Repository\PublicationRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;

#[ORM\Entity(repositoryClass: PublicationRepository::class)]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Post(),
        new Put(),
        new Patch(),
        new Delete(),
    ]
)]
class Publication
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(length: 500)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $country = null;

    #[ORM\Column(nullable: true)]
    private ?int $budget = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $bagTips = null;

    #[ORM\Column(length: 255)]
    private ?string $travelType = null;

    #[ORM\Column(length: 800)]
    private ?string $picture = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $travelPartner = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $modifiedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function setTextDescription(string $description): self
    {
        $this->description = nl2br($description);

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getBudget(): ?int
    {
        return $this->budget;
    }

    public function setBudget(?int $budget): self
    {
        $this->budget = $budget;

        return $this;
    }

    public function getBagTips(): ?string
    {
        return $this->bagTips;
    }

    public function setBagTips(?string $bagTips): self
    {
        $this->bagTips = $bagTips;

        return $this;
    }

    public function getTravelType(): ?string
    {
        return $this->travelType;
    }

    public function setTravelType(string $travelType): self
    {
        $this->travelType = $travelType;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getTravelPartner(): ?string
    {
        return $this->travelPartner;
    }

    public function setTravelPartner(?string $travelPartner): self
    {
        $this->travelPartner = $travelPartner;

        return $this;
    }

    public function setCreatedAt(?\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getModifiedAt(): ?\DateTimeImmutable
    {
        return $this->modifiedAt;
    }

    public function setModifiedAt(?\DateTimeImmutable $modifiedAt): self
    {
        $this->modifiedAt = $modifiedAt;

        return $this;
    }
}
