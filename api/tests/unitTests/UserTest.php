<?php

use App\Entity\User;
use App\Entity\Publication;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
  public function testCreateUser()
  {
    $user = new User();
    $user->setUsername('john_doe');
    $user->setEmail('john@example.com');
    $user->setPassword('password123');

    $this->assertInstanceOf(User::class, $user);
    $this->assertEquals('john_doe', $user->getUsername());
    $this->assertEquals('john@example.com', $user->getEmail());
    $this->assertEquals(['ROLE_USER'], $user->getRoles()); // Assuming default role is 'ROLE_USER'
  }



  public function testAddAndRemovePublication()
  {
    $user = new User();
    $user->setUsername('jane_doe');
    $user->setEmail('jane@example.com');
    $user->setPassword('password456');

    $publication = new Publication();
    $publication->setTitle('Sample Publication');
    $publication->setDescription('This is a test publication.');

    $user->addPublication($publication);

    $this->assertTrue($user->getPublications()->contains($publication));

    $user->removePublication($publication);

    $this->assertFalse($user->getPublications()->contains($publication));
  }

  public function testSetAndGetRoles()
  {
    $user = new User();
    $roles = ['ROLE_ADMIN', 'ROLE_USER'];

    $user->setRoles($roles);

    $this->assertEquals($roles, $user->getRoles());
  }

  public function testAddAndRemoveLikedPublication()
  {
    $user = new User();
    $publication = new Publication();

    $user->addLikedPublication($publication);

    $this->assertTrue($user->getLikedPublications()->contains($publication));

    $user->removeLikedPublication($publication);

    $this->assertFalse($user->getLikedPublications()->contains($publication));
  }

  public function testSetAndGetPassword()
  {
    $user = new User();
    $password = 'new_password';

    $user->setPassword($password);

    $this->assertEquals($password, $user->getPassword());
  }
}
