<?php 
use App\Entity\Publication;
use App\Entity\User;
use PHPUnit\Framework\TestCase;

class PublicationTest extends TestCase
{
    public function testCreatePublication()
    {
        $publication = new Publication();
        $publication->setTitle('Sample Publication');
        $publication->setDescription('This is a test publication');
        $publication->setCountry('Sample Country');
        $publication->setBudget(1000); // Sample budget
        $publication->setBagTips('Sample Bag Tips');
        $publication->setTravelType('Sample Travel Type');
        $publication->setPicture('sample.jpg');
        $publication->setTravelPartner('Sample Travel Partner');
        $createdAt = new \DateTimeImmutable();
        $publication->setCreatedAt($createdAt);
        $modifiedAt = new \DateTimeImmutable();
        $publication->setModifiedAt($modifiedAt);

        // Create a sample User
        $user = new User();
        $user->setUsername('john_doe');
        $user->setEmail('john@example.com');
        $user->setPassword('password123');

        $publication->setTraveler($user);

        $this->assertInstanceOf(Publication::class, $publication);
        $this->assertEquals('Sample Publication', $publication->getTitle());
        $this->assertEquals('This is a test publication', $publication->getDescription());
        $this->assertEquals('Sample Country', $publication->getCountry());
        $this->assertEquals(1000, $publication->getBudget());
        $this->assertEquals('Sample Bag Tips', $publication->getBagTips());
        $this->assertEquals('Sample Travel Type', $publication->getTravelType());
        $this->assertEquals('sample.jpg', $publication->getPicture());
        $this->assertEquals('Sample Travel Partner', $publication->getTravelPartner());
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
