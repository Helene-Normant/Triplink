<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\RegistrationFormType;
use App\Security\UsersAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Serializer\SerializerInterface;


class RegistrationController extends AbstractController
{   
    private $serializer;

    public function __construct(
        SerializerInterface $serializer,
    ) {
        $this->serializer = $serializer;
    }

    #[Route('/register', name: 'app_users', methods: ['POST'])]
    public function register(Request $request, UserPasswordHasherInterface $passwordHasher, UserAuthenticatorInterface $userAuthenticator, UsersAuthenticator $authenticator, EntityManagerInterface $entityManager): Response
    {
        $user = new Users();
        $body = $request->getContent();
        $form = $this->serializer->deserialize($body, Users::class, 'json');


            // encode the plain password
        $user->setPassword(
                $passwordHasher->hashPassword(
                $user,
                $form->get('plainPassword')->getData()
                )
        );

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            return $userAuthenticator->authenticateUser(
                $user,
                $authenticator,
                $request
            );

        return new JsonResponse('', Response::HTTP_OK);
    }
}
