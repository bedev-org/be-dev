<?php

namespace App\Repository;

use App\Entity\LocationDomaine;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LocationDomaine>
 *
 * @method LocationDomaine|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocationDomaine|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocationDomaine[]    findAll()
 * @method LocationDomaine[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LocationDomaineRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationDomaine::class);
    }

//    /**
//     * @return LocationDomaine[] Returns an array of LocationDomaine objects
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

//    public function findOneBySomeField($value): ?LocationDomaine
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
