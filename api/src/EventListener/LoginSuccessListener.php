<?php

namespace App\EventListener;

use App\Entity\User;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class LoginSuccessListener
{

    public function onLoginSuccess(AuthenticationSuccessEvent $event): void
    {
        $user = $event->getUser();
        $payload = $event->getData();
        
        if (!$user instanceof User) {
            return;
        }
        // Add information to user payload
        $payload['userID'] = $user->getId();
        
        dump($payload);
        $event->setData($payload);
    }
}