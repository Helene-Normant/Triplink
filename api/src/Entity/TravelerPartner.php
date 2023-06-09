<?php

namespace App\Entity;

use App\Repository\TravelerPartnerRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TravelerPartnerRepository::class)]
#[ApiResource (
    operations: [
        new Get(),
        new GetCollection(),
    ],
    normalizationContext: [
        'groups' => ['travelPartner:read'],
    ]
)]
class TravelerPartner
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['travelPartner:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['travelPartner:read'])]
    private ?string $partnerFR = null;

    #[ORM\Column(length: 255)]
    #[Groups(['travelPartner:read'])]
    private ?string $partnerEN = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPartnerFR(): ?string
    {
        return $this->partnerFR;
    }

    public function setPartnerFR(string $partnerFR): self
    {
        $this->partnerFR = $partnerFR;

        return $this;
    }

    public function getPartnerEN(): ?string
    {
        return $this->partnerEN;
    }

    public function setPartnerEN(string $partnerEN): self
    {
        $this->partnerEN = $partnerEN;

        return $this;
    }
}
