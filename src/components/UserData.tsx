import Button from './Button';
import UserDataActions from './UserDataActions';

type Props = {
  name: string;
  email: string;
  age: number;
  socialMedia: {
    instagram: string;
    threads: string;
    youtube: string;
  };
  isPremiumUser: boolean;
  updateUser: () => void;
};

export default function UserData({
  name,
  age,
  email,
  socialMedia,
  isPremiumUser,
  updateUser,
}: Props) {
  return (
    <>
      <h1>Informações Gerais</h1>

      <div>Nome: {name}</div>
      <div>Email: {email}</div>
      <div>Idade: {age}</div>
      <div>Premium: {isPremiumUser ? 'Sim' : 'Não'}</div>

      <h2>Redes Sociais</h2>

      <div>Instagram: {socialMedia.instagram}</div>
      <div>Threads: {socialMedia.threads}</div>
      <div>YouTube: {socialMedia.youtube}</div>

      <UserDataActions
        updateUser={updateUser}
        isPremiumUser={isPremiumUser}
        actions={[<Button>Editar</Button>, <Button>Deletar</Button>]}
      />
    </>
  );
}
