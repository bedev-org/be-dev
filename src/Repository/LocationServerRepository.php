<?php

namespace App\Repository;

use App\Entity\LocationServer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LocationServer>
 *
 * @method LocationServer|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocationServer|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocationServer[]    findAll()
 * @method LocationServer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LocationServerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationServer::class);
    }

//    /**
//     * @return LocationServer[] Returns an array of LocationServer objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('l.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?LocationServer
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
