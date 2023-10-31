<?php

namespace App\Repository;

use App\Entity\WebServer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<WebServer>
 *
 * @method WebServer|null find($id, $lockMode = null, $lockVersion = null)
 * @method WebServer|null findOneBy(array $criteria, array $orderBy = null)
 * @method WebServer[]    findAll()
 * @method WebServer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WebServerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WebServer::class);
    }

//    /**
//     * @return WebServer[] Returns an array of WebServer objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('w')
//            ->andWhere('w.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('w.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?WebServer
//    {
//        return $this->createQueryBuilder('w')
//            ->andWhere('w.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
