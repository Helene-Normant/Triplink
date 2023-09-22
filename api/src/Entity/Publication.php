<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\Collection;
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
        new Get(
            normalizationContext: [
                'groups' => ['publication:read'],
            ],
        ),
        new GetCollection(),
        new Post(security: 'is_granted("ROLE_USER")'),
        new Put(security: 'is_granted("ROLE_USER") or object.owner == user'),
        new Patch(security: 'is_granted("ROLE_USER") or object.owner == user'),
        new Delete(security: 'is_granted("ROLE_USER") or object.owner == user'),
    ],
    normalizationContext: [
        'groups' => ['publication:read'],
    ],
    denormalizationContext: [
        'groups' => ['publication:write'],
    ]
)]
class Publication
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['publication:read', 'user:read', 'travelstep:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    private ?string $title = null;

    #[ORM\Column(length: 500)]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    private ?string $description = null;

    #[ORM\ManyToOne(inversedBy: 'publications', cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    private ?Country $country = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['publication:read', 'publication:write'])]
    private ?int $budget = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['publication:read', 'publication:write'])]
    private ?string $bagTips = null;

    #[ORM\ManyToOne(inversedBy: 'publications', cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    private ?Category $travelType = null;

    #[ORM\Column(length: 800)]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    private ?string $picture = null;

    #[ORM\ManyToOne(inversedBy: 'publications', cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['publication:read', 'publication:write', 'user:read'])]
    private ?TravelerPartner $travelPartner = null;

    #[ORM\Column]
    #[Groups(['publication:read', 'publication:write'])]
    private ?\DateTimeImmutable $createdAt;

    #[ORM\Column(nullable: true)]
    #[Groups(['publication:read', 'publication:write'])]
    private ?\DateTimeImmutable $modifiedAt = null;

    #[ORM\ManyToOne(inversedBy: 'publications', cascade: ['persist'])]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['publication:read', 'publication:write'])]
    private ?User $traveler;

    #[ORM\ManyToMany(targetEntity: User::class, mappedBy:'likedPublications')]
    #[Groups(['publication:read'])]
    private Collection $userWhoLiked;

    #[ORM\OneToMany(mappedBy: 'publicationRelated', targetEntity: TravelStep::class)]
    #[Groups(['publication:read'])]
    private Collection $stepTravel;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->userWhoLiked = new ArrayCollection();
        $this->stepTravel = new ArrayCollection();
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

    public function getCountry(): ?Country
    {
        return $this->country;
    }

    public function setCountry(?Country $country): self
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

    public function getTravelType(): ?Category
    {
        return $this->travelType;
    }

    public function setTravelType(?Category $travelType): self
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

    public function getTravelPartner(): ?TravelerPartner
    {
        return $this->travelPartner;
    }

    public function setTravelPartner(?TravelerPartner $travelPartner): self
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

    public function getTraveler(): ?User
    {
        return $this->traveler;
    }

    public function setTraveler(?User $traveler): self
    {
        $this->traveler = $traveler;

        return $this;
    }

    public function getUserWhoLiked(): Collection
    {
        return $this->userWhoLiked;
    }

    public function setUserWhoLiked(Collection $userWhoLiked): self
    {
        $this->userWhoLiked = $userWhoLiked;

        return $this;
    }

    public function addUserWhoLiked(User $user):self
    {
        if(!$this->userWhoLiked->contains($user)) {
            $this->userWhoLiked[] = $user;
            $user->addLikedPublication($this);
        }

        return $this;
    }

    public function removeUserWhoLiked(User $user): self 
    {
        if($this->userWhoLiked->removeElement($user)) {
            $user->removeLikedPublication($this);
        }
        
        return $this;
    }

    /**
     * @return Collection<int, TravelStep>
     */
    public function getStepTravel(): Collection
    {
        return $this->stepTravel;
    }

    public function addStepTravel(TravelStep $stepTravel): self
    {
        if (!$this->stepTravel->contains($stepTravel)) {
            $this->stepTravel->add($stepTravel);
            $stepTravel->setPublicationRelated($this);
        }

        return $this;
    }

    public function removeStepTravel(TravelStep $stepTravel): self
    {
        if ($this->stepTravel->removeElement($stepTravel)) {
            // set the owning side to null (unless already changed)
            if ($stepTravel->getPublicationRelated() === $this) {
                $stepTravel->setPublicationRelated(null);
            }
        }

        return $this;
    }
}
