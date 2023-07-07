import { useEffect, useState } from 'react';
import UserData from './components/UserData';
import { faker } from '@faker-js/faker';
import './App.css';

type User = {
  name: string;
  email: string;
  age: number;
  socialMedia: {
    instagram: string;
    threads: string;
    youtube: string;
  };
  isPremiumUser: boolean;
};

function getRandomUserData() {
  return {
    name: faker.person.fullName(),
    age: faker.number.int({ max: 99 }),
    email: faker.internet.email(),
    socialMedia: {
      instagram: '@guscsales',
      threads: '@guscsales',
      youtube: 'Gus Quem Fala',
    },
    isPremiumUser: faker.datatype.boolean(),
  };
}

function App() {
  const [user, setUser] = useState<User>(getRandomUserData());

  function updateUser() {
    setUser(getRandomUserData());
  }

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div className="card">
      <UserData {...user} updateUser={updateUser} />
    </div>
  );
}

export default App;
