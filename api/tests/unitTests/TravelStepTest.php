<?php

use App\Entity\TravelStep;
use App\Entity\Publication;
use PHPUnit\Framework\TestCase;

class TravelStepTest extends TestCase
{
    public function testCreateTravelStep()
    {
        $travelStep = new TravelStep();
        $travelStep->setTitle('Step Title');
        $travelStep->setDescription('Step Description');
        $travelStep->setAddress('Step Address');
        $travelStep->setLatitude(12.345);
        $travelStep->setLongitude(67.890);
        $travelStep->setPlus('Pro Info');
        $travelStep->setLess('Con Info');

        $this->assertInstanceOf(TravelStep::class, $travelStep);
        $this->assertEquals('Step Title', $travelStep->getTitle());
        $this->assertEquals('Step Description', $travelStep->getDescription());
        $this->assertEquals('Step Address', $travelStep->getAddress());
        $this->assertEquals(12.345, $travelStep->getLatitude());
        $this->assertEquals(67.890, $travelStep->getLongitude());
        $this->assertEquals('Pro Info', $travelStep->getPlus());
        $this->assertEquals('Con Info', $travelStep->getLess());
    }

    public function testAssociationWithPublication()
    {
        $publication = new Publication();
        $publication->setTitle('Publication Title');

        $travelStep = new TravelStep();
        $travelStep->setTitle('Step Title');
        $travelStep->setPublicationRelated($publication);

        $this->assertInstanceOf(TravelStep::class, $travelStep);
        $this->assertInstanceOf(Publication::class, $travelStep->getPublicationRelated());
        $this->assertEquals('Publication Title', $travelStep->getPublicationRelated()->getTitle());
    }

    public function testUpdateTravelStep()
    {
        $travelStep = new TravelStep();
        $travelStep->setTitle('Initial Title');
        $travelStep->setDescription('Initial Description');

        $travelStep->setTitle('Updated Title');
        $travelStep->setDescription('Updated Description');

        $this->assertEquals('Updated Title', $travelStep->getTitle());
        $this->assertEquals('Updated Description', $travelStep->getDescription());
    }

    public function testRemoveTravelStep()
    {
        $travelStep = new TravelStep();
        $travelStep->setTitle('Step Title');

        $travelStep->setPublicationRelated(null);

        $this->assertNull($travelStep->getPublicationRelated());
    }

    public function testInvalidTravelStep()
    {
        $this->expectException(\TypeError::class);

        $travelStep = new TravelStep();
        $travelStep->setTitle(null);
    }
}