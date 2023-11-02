<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Serializer\UserSerializer;
use Symfony\Component\HttpFoundation\JsonResponse;

class ServicesController extends AbstractController
{
    #[Route('/services', name: 'app_services')]
    public function index(): Response
    {
        return $this->render('services/index.html.twig', [
            'controller_name' => 'ServicesController',
        ]);
    }
    public function serializeUser(UserSerializer $userSerializer)
    {
        $user = $this->getUser(); // Récupérez l'utilisateur actuellement connecté

        $serializedUser = $userSerializer->serializeUser($user);

        return new JsonResponse(['user' => json_decode($serializedUser, true)]);
    }
}
