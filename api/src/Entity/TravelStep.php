<?php

namespace App\Entity;

use App\Repository\TravelStepRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;

#[ORM\Entity(repositoryClass: TravelStepRepository::class)]
#[ApiResource(
    operations: [
        new Get(
            normalizationContext: [
            'groups' => ['travelstep:read'],
        ],
    ),
        new GetCollection(),
        new Post(),
        new Put(),
        new Patch(),
        new Delete(),
    ]
    ,
    normalizationContext: [
        'groups' => ['travelstep:read'],
    ],
    denormalizationContext: [
        'groups' => ['travelstep:write'],
    ]
)]
class TravelStep
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['travelstep:read', 'publication:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['travelstep:read', 'travelstep:write', 'publication:read'])]
    private ?string $title = null;

    #[ORM\Column(length: 500)]
    #[Groups(['travelstep:read', 'travelstep:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['travelstep:read', 'travelstep:write'])]
    private ?string $address = null;

    #[ORM\Column]
    #[Groups(['travelstep:read', 'travelstep:write'])]
    private ?float $latitude = null;

    #[ORM\Column]
    #[Groups(['travelstep:write'])]
    private ?float $longitude = null;

    #[ORM\Column(length: 300, nullable: true)]
    #[Groups(['travelstep:read', 'travelstep:write'])]
    private ?string $plus = null;

    #[ORM\Column(length: 300, nullable: true)]
    #[Groups(['travelstep:read', 'travelstep:write'])]
    private ?string $less = null;

    #[ORM\ManyToOne(inversedBy: 'stepTravel')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['travelstep:read'])]
    private ?Publication $publicationRelated = null;

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

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getLatitude(): ?float
    {
        return $this->latitude;
    }

    public function setLatitude(float $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?float
    {
        return $this->longitude;
    }

    public function setLongitude(float $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getPlus(): ?string
    {
        return $this->plus;
    }

    public function setPlus(?string $plus): self
    {
        $this->plus = $plus;

        return $this;
    }

    public function getLess(): ?string
    {
        return $this->less;
    }

    public function setLess(?string $less): self
    {
        $this->less = $less;

        return $this;
    }

    public function getPublicationRelated(): ?Publication
    {
        return $this->publicationRelated;
    }

    public function setPublicationRelated(?Publication $publicationRelated): self
    {
        $this->publicationRelated = $publicationRelated;

        return $this;
    }
}
