<?php

namespace App\Repository;

use App\Entity\LocationDomain;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LocationDomain>
 *
 * @method LocationDomain|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocationDomain|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocationDomain[]    findAll()
 * @method LocationDomain[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LocationDomainRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationDomain::class);
    }

//    /**
//     * @return LocationDomain[] Returns an array of LocationDomain objects
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

//    public function findOneBySomeField($value): ?LocationDomain
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
