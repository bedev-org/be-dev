<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Cart;
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

        for ($i = 0; $i < 50; $i++) 
        {

            $LocationDomain = new LocationDomain();
            $LocationDomain->setNameDomain('be-dev '.$i);
            $manager->persist($LocationDomain);

            $LocationDatabase = new LocationDatabase();
            $LocationDatabase->setUsernameDatabase('be-dev UsernameDatabase '.$i);
            $LocationDatabase->setPasswordDatabase('be-dev PasswordDatabase '.$i);
            $LocationDatabase->setHostDatabase('be-dev HostDatabase '.$i);
            $LocationDatabase->setPortDatabase('be-dev PortDatabase '.$i);
            $LocationDatabase->setNameDatabase('be-dev NameDatabase '.$i);
            $LocationDatabase->setStockageDatabase('be-dev stockageDatabase '.$i);
            $manager->persist($LocationDatabase);

            $LocationServer = new LocationServer();
            $LocationServer->setUsernameServer('be-dev UsernameServer '.$i);
            $LocationServer->setPasswordServer('be-dev PasswordServer '.$i);
            $LocationServer->setHostServer('be-dev HostServer '.$i);
            $LocationServer->setPortServer('be-dev PortServer '.$i);
            $manager->persist($LocationServer);

            $Cart = new Cart();
            $Cart->setBasket(['be-dev UsernameServer '.$i]);
            $Cart->setCreatedAt(new \DateTimeImmutable()); 
            $Cart->setUserName('be-dev UserName '.$i);
            $manager->persist($Cart);
     }

    $manager->flush();

  }
}