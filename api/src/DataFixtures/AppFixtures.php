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
       PublicationFactory::createMany(30);
       UserFactory::createMany(10);
    }
}
