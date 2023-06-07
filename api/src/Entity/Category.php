<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;


#[ORM\Entity(repositoryClass: CategoryRepository::class)]
#[ApiResource (
    operations: [
        new Get(),
        new GetCollection(),
    ],
    normalizationContext: [
        'groups' => ['category:read'],
    ]
)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['category:read'])]
    private ?int $id;

    #[ORM\Column(length: 255)]
    #[Groups(['category:read'])]
    private ?string $categoryFr;

    #[ORM\Column(length: 255)]
    #[Groups(['category:read'])]
    private ?string $categoryEn;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategoryFr(): ?string
    {
        return $this->categoryFr;
    }

    public function setCategoryFr(string $categoryFr): self
    {
        $this->categoryFr = $categoryFr;

        return $this;
    }

    public function getCategoryEn(): ?string
    {
        return $this->categoryEn;
    }

    public function setCategoryEn(string $categoryEn): self
    {
        $this->categoryEn = $categoryEn;

        return $this;
    }
}
