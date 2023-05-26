<?php

namespace App\DataFixtures;

use App\Entity\ApiToken;
use App\Factory\ApiTokenFactory;
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
       ApiTokenFactory::createMany(30, function() {
            return [
                'ownedBy' => UserFactory::random(),
            ];
       });
    }
}
