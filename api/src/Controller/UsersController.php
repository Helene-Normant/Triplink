<?php

namespace App\Controller;

use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Nelmio\ApiDocBundle\Annotation\Model;
use OpenApi\Attributes as OA;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use App\Security\UsersAuthenticator;
use Doctrine\ORM\EntityManagerInterface;
class UsersController extends AbstractController
{
    private $serializer;

    private $usersRepository; 

    public function __construct(
        SerializerInterface $serializer,
        UsersRepository $usersRepository,
    ) {
        $this->serializer = $serializer;
        $this->usersRepository = $usersRepository;
    }

    #[Route('/users', name: 'app_users', methods: ['GET'])]
    #[OA\Response(response: 200,description: 'Returns all activities', content: new Model(type: Users::class, groups: ["usersFull"]))]

    public function index(): JsonResponse
    {
        $users = $this->usersRepository->findAll();

        $serialize = $this->serializer->serialize($users, 'json', ['groups' => 'usersFull']);
        $results = $this->serializer->decode($serialize, 'json');

        return new JsonResponse($results, Response::HTTP_OK, [], true);
    }

    #[Route('/users', name: 'app_users', methods: ['POST'])]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, UserAuthenticatorInterface $userAuthenticator, UsersAuthenticator $authenticator, EntityManagerInterface $entityManager): Response
    {
        $user = new Users();
        $body = $request->getContent();
        $form = $this->serializer->deserialize($body, Users::class, 'json');
            // encode the plain password
        $user->setPassword($userPasswordHasher->hashPassword($user, $form['password']));

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
