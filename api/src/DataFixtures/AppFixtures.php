<?php

namespace App\DataFixtures;

use App\Factory\PublicationFactory;
use App\Factory\UserFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
       UserFactory::createMany(10);
       PublicationFactory::createMany(30, function() { 
            return [
                'traveler' => UserFactory::random(),
            ];
       });
    }
}
