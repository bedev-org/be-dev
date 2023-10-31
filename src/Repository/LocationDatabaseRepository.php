<?php

namespace App\Repository;

use App\Entity\LocationDatabase;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LocationDatabase>
 *
 * @method LocationDatabase|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocationDatabase|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocationDatabase[]    findAll()
 * @method LocationDatabase[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LocationDatabaseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationDatabase::class);
    }

//    /**
//     * @return LocationDatabase[] Returns an array of LocationDatabase objects
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

//    public function findOneBySomeField($value): ?LocationDatabase
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
