<?php

namespace App\Factory;

use App\Entity\TravelStep;
use App\Repository\PostRepository;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;
use Zenstruck\Foundry\RepositoryProxy;

/**
 * @extends ModelFactory<TravelStep>
 *
 * @method        TravelStep|Proxy create(array|callable $attributes = [])
 * @method static TravelStep|Proxy createOne(array $attributes = [])
 * @method static TravelStep|Proxy find(object|array|mixed $criteria)
 * @method static TravelStep|Proxy findOrCreate(array $attributes)
 * @method static TravelStep|Proxy first(string $sortedField = 'id')
 * @method static TravelStep|Proxy last(string $sortedField = 'id')
 * @method static TravelStep|Proxy random(array $attributes = [])
 * @method static TravelStep|Proxy randomOrCreate(array $attributes = [])
 * @method static PostRepository|RepositoryProxy repository()
 * @method static TravelStep[]|Proxy[] all()
 * @method static TravelStep[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static TravelStep[]|Proxy[] createSequence(iterable|callable $sequence)
 * @method static TravelStep[]|Proxy[] findBy(array $attributes)
 * @method static TravelStep[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static TravelStep[]|Proxy[] randomSet(int $number, array $attributes = [])
 */
final class TravelStepFactory extends ModelFactory
{
    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services
     *
     * @todo inject services if required
     */
    public function __construct()
    {
        parent::__construct();
    }


    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories
     *
     * @todo add your default values here
     */
    protected function getDefaults(): array
    {
        return [
            'title' => self::faker()->sentence(2),
            'description' => self::faker()->paragraph(1),
            'address' => self::faker()->address,
            'latitude' => self::faker()->latitude,
            'longitude' => self::faker()->longitude,
            'plus' => self::faker()->text(20),
            'less' => self::faker()->text(20),
            'publicationRelated' => PublicationFactory::new(),
        ];
    }

    /**
     * @see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
     */
    protected function initialize(): self
    {
        return $this
            // ->afterInstantiate(function(TravelStep $steptravel): void {})
        ;
    }

    protected static function getClass(): string
    {
        return TravelStep::class;
    }
}
