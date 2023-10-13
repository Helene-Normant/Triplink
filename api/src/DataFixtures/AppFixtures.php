<?php

namespace App\DataFixtures;

use App\Factory\TravelStepFactory;
use App\Factory\PublicationFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
       UserFactory::createMany(10);
       PublicationFactory::createMany(25, function() { 
            return [
                'traveler' => UserFactory::random(),
            ];
       });
        TravelStepFactory::createMany(100, function() {
            return [
                'publicationRelated' => PublicationFactory::random(),
            ];
        });
    }
}
