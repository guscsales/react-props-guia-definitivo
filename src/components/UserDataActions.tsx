import Button from './Button';

type Props = {
  isPremiumUser: boolean;
  actions: React.ReactNode[];
  updateUser: () => void;
};

export default function UserDataActions({
  isPremiumUser,
  actions,
  updateUser,
}: Props) {
  return (
    <div style={{ display: 'grid', gap: '0.5rem', marginTop: '1rem' }}>
      <Button onClick={updateUser}>Atualizar</Button>
      {isPremiumUser && actions.map((action) => action)}
    </div>
  );
}
