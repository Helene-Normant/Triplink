<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GetUserByEmailController extends AbstractController 
{
    public function __construct(private readonly UserRepository $userRepository )
    {
    }

    #[Route(
        name: 'user_by_email',
        path: '/user/email',
        methods: ['GET'],
    )]
    public function foundUserByEmail(Request $request ): User
    {
        dump($request);
        $email = $request->query->get('email');

        
        $user = $this->userRepository->findOneBy(['email' => $email]);

        if (!$user) {
            throw $this->createNotFoundException('User not found');
        }

        return $user;
    }
}


