import { useEffect } from 'react';
import { useAtom } from 'jotai';
import axios from 'axios';
import { userAtom } from '../atoms/auth';

const AccountPage = () => {
  const [user, setUser] = useAtom<{ name: string; email: string } | null>(userAtom) as [user: { name: string; email: string } | null, setUser: React.Dispatch<React.SetStateAction<{ name: string; email: string } | null>>];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_BASE_URL}/user`, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [setUser]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Account Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default AccountPage;
