<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\LocationServer;
use App\Entity\LocationDatabase;
use App\Entity\LocationDomain;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class AppFixtures extends Fixture
{

    private $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }


    public function load(ObjectManager $manager): void
    {
            $user = new User();
            $user->setEmail('user@be-dev.org');
            $user->setRoles(['ROLE_USER']);
            $user->setPassword($this->userPasswordHasher->hashPassword($user, "user@be-dev.org"));
            $user->setLastName('User lastname');
            $user->setFirstName('User firstname');
            $user->setAdress('adress');
            $user->setPhone(0160252525);
            $user->setCurrentServices('services');

            $user_admin = new User();
            $user_admin->setEmail('admin@be-dev.org');
            $user_admin->setRoles(['ROLE_ADMIN']);
            $user_admin->setPassword($this->userPasswordHasher->hashPassword($user_admin, "admin@be-dev.org"));
            $user_admin->setLastName('User lastname');
            $user_admin->setFirstName('User firstname');
            $user_admin->setAdress('adress');
            $user_admin->setPhone(0160252525);
            $user_admin->setCurrentServices('services');

            $manager->persist($user);
            $manager->persist($user_admin);

            $stockage = ['10', '20', '30', '50', '100', '250', '500', '1000'];
            $domains = ['https://google.fr', 'https://facebook.fr', 'https://instagram.fr', 'https://steam.fr', 'https://apple.fr'];
            $length = 10;
            $length_ip = 2;   

            for ($i = 0; $i < 50; $i++) 
            {
                $result_stockage = $stockage[array_rand($stockage, 1)];
                $random_all = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 1, $length);
                $random_integer = substr(str_shuffle('0123456789'), 1, $length);
                $random_ip = substr(str_shuffle('0123456789'), 1, $length_ip);


                $location_database = new LocationDatabase();
                $location_database->setUsernameDatabase($random_all. $random_integer );
                $location_database->setPasswordDatabase($random_integer. $random_all);
                $location_database->setHostDatabase('be-dev.org');
                $location_database->setPortDatabase('3306');
                $location_database->setNameDatabase("be-dev-database-$random_integer");
                $location_database->setStockageDatabase($result_stockage);

            
                $location_server = new LocationServer();
                $location_server->setUsernameServer('root');
                $location_server->setPasswordServer($random_all.$random_ip.$random_integer);
                $location_server->setHostServer("87.106.121.$random_ip");
                $location_server->setPortServer('22');

                $manager->persist($location_server);
                $manager->persist($location_database);
            }

            for ($i = 0; $i < 15; $i++) 
            {
                $result_domain = $domains[array_rand($domains, 1)];

                $location_domain = new LocationDomain();
                $location_domain->setNameDomain($result_domain);
                
                $manager->persist($location_domain);
            }

    $manager->flush();

  }
}