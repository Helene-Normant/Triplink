<?php

namespace App\Factory;

use App\Entity\Publication;
Use App\Entity\Country;
use App\Entity\Category;
use App\Entity\TravelerPartner;
use App\Repository\PostRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @extends ModelFactory<Publication>
 *
 * @method        Publication|Proxy create(array|callable $attributes = [])
 * @method static Publication|Proxy createOne(array $attributes = [])
 * @method static Publication|Proxy find(object|array|mixed $criteria)
 * @method static Publication|Proxy findOrCreate(array $attributes)
 * @method static Publication|Proxy first(string $sortedField = 'id')
 * @method static Publication|Proxy last(string $sortedField = 'id')
 * @method static Publication|Proxy random(array $attributes = [])
 * @method static Publication|Proxy randomOrCreate(array $attributes = [])
 * @method static PostRepository|RepositoryProxy repository()
 * @method static Publication[]|Proxy[] all()
 * @method static Publication[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Publication[]|Proxy[] createSequence(iterable|callable $sequence)
 * @method static Publication[]|Proxy[] findBy(array $attributes)
 * @method static Publication[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static Publication[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class PublicationFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        parent::__construct();
        $this->entityManager = $entityManager;
    }


    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        $randomCountry = $this->entityManager->getRepository(Country::class)->find(self::faker()->numberBetween(1, 241));
        $randomCategory = $this->entityManager->getRepository(Category::class)->find(self::faker()->numberBetween(1, 9));
        $randomTravelerPartner = $this->entityManager->getRepository(TravelerPartner::class)->find(self::faker()->numberBetween(1, 4));
        $listPictures = [
                "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1410&q=80,https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80,https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
                "https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80,https://images.unsplash.com/photo-1476157808914-828d68f0f401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1286&q=80,https://images.unsplash.com/photo-1527605158555-853f200063e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1342&q=80",
                "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80,https://images.unsplash.com/photo-1510662145379-13537db782dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1339&q=80,https://images.unsplash.com/photo-1527998257557-0c18b22fa4cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
                "https://images.unsplash.com/photo-1521668576204-57ae3afee860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80,https://images.unsplash.com/photo-1517926967795-31943e805dae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80,https://images.unsplash.com/photo-1531938716357-224c16b5ace3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
                "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80,https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80,https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80,https://images.unsplash.com/photo-1518855706573-84de4022b69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80,https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
                "https://images.unsplash.com/photo-1538681105587-85640961bf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80,https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80,https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                "https://images.unsplash.com/photo-1534430224470-f52e596ced9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80,https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80,https://images.unsplash.com/photo-1583855282680-6dbdc69b0932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
                "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80,https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80,https://images.unsplash.com/photo-1499063078284-f78f7d89616a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
                "https://images.unsplash.com/photo-1521579880562-101f47676ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1345&q=80,https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80,https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
            ];
        
        return [
            'country' => $randomCountry,
            'createdAt' => \DateTimeImmutable::createFromMutable(self::faker()->dateTime()),
            'description' => self::faker()->paragraph(1),
            'picture' => self::faker()->randomElement($listPictures),
            'title' => self::faker()->sentence(2),
            'travelType' => $randomCategory,
            'traveler' => UserFactory::new(),
            'budget' => self::faker()->numberBetween(1, 3),
            'bagTips' => self::faker()->sentence(),
            'travelPartner' => $randomTravelerPartner,
            'modifiedAt' => \DateTimeImmutable::createFromMutable(self::faker()->dateTimeThisMonth()),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(Publication $publication): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Publication::class;
    }
}
