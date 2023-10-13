<?php
use App\Entity\Publication;
use App\Entity\Country;
use App\Entity\Category;
use App\Entity\TravelerPartner;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class PublicationTest extends TestCase
{
    public function testCreatePublication()
    {
        $publication = new Publication();
        $publication->setTitle('Sample Publication');
        $publication->setDescription('This is a test publication');

        // You should set related objects using their setter methods
        $country = new Country(); // Replace 'Country' with your actual entity class
        $publication->setCountry($country);

        $publication->setBudget(1000); // Sample budget
        $publication->setBagTips('Sample Bag Tips');

        $travelType = new Category(); // Replace 'Category' with your actual entity class
        $publication->setTravelType($travelType);

        $publication->setPicture('sample.jpg');

        $travelPartner = new TravelerPartner(); // Replace 'TravelerPartner' with your actual entity class
        $publication->setTravelPartner($travelPartner);

        $createdAt = new \DateTimeImmutable();
        $publication->setCreatedAt($createdAt);

        $modifiedAt = new \DateTimeImmutable();
        $publication->setModifiedAt($modifiedAt);

        // Create a sample User
        $user = new User();
        $user->setUsername('john_doe');
        $user->setEmail('john@example.com');

        // You should hash the password as per your Symfony configuration
        $password = password_hash('password123', PASSWORD_BCRYPT);
        $user->setPassword($password);

        $publication->setTraveler($user);

        $this->assertInstanceOf(Publication::class, $publication);
        $this->assertEquals('Sample Publication', $publication->getTitle());
        $this->assertEquals('This is a test publication', $publication->getDescription());
        $this->assertInstanceOf(Country::class, $publication->getCountry());
        $this->assertEquals(1000, $publication->getBudget());
        $this->assertEquals('Sample Bag Tips', $publication->getBagTips());
        $this->assertInstanceOf(Category::class, $publication->getTravelType());
        $this->assertEquals('sample.jpg', $publication->getPicture());
        $this->assertInstanceOf(TravelerPartner::class, $publication->getTravelPartner());
        $this->assertEquals($createdAt, $publication->getCreatedAt());
        $this->assertEquals($modifiedAt, $publication->getModifiedAt());
        $this->assertInstanceOf(User::class, $publication->getTraveler());
    }

    public function testAddAndRemoveUserWhoLiked()
    {
        $publication = new Publication();

        $user1 = new User();
        $user1->setUsername('user1');

        $user2 = new User();
        $user2->setUsername('user2');

        // Add users who liked the publication
        $publication->addUserWhoLiked($user1);
        $publication->addUserWhoLiked($user2);

        $this->assertTrue($publication->getUserWhoLiked()->contains($user1));
        $this->assertTrue($publication->getUserWhoLiked()->contains($user2));

        // Remove a user who liked the publication
        $publication->removeUserWhoLiked($user1);

        $this->assertFalse($publication->getUserWhoLiked()->contains($user1));
        $this->assertTrue($publication->getUserWhoLiked()->contains($user2));
    }
}
