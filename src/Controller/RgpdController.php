<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RgpdController extends AbstractController
{
    #[Route('/confidentialite', name: 'app_confidentialite')]
    public function index(): Response
    {
        return $this->render('rgpd/confidentialite.html.twig', [
            'controller_name' => 'RgpdController',
        ]);
    }

    #[Route('/legal-notice', name: 'app_legal_notice')]
    public function legal_notice(): Response
    {
        return $this->render('rgpd/legal-notice.html.twig', [
            'controller_name' => 'RgpdController',
        ]);
    }
}
