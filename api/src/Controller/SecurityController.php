<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class SecurityController extends AbstractController
{
    #[Route('/api/auth', name: 'auth', methods: ['POST'])]
    public function login(#[CurrentUser] $user = null): Response
    {
        if (!$user) {
            return $this->json([
                'error' => 'Invalid login request: check that the Content-Type header is "application/json".',
            ], 401);
        }

        return $this->json([
            $user,
        ]);
    }

    #[Route('/api/logout', name:'app_logout', methods: ['POST'])]
    public function logout(): JsonResponse
    {
        return new JsonResponse(['message' => 'Logged out successfully'], Response::HTTP_OK);
    }
}
