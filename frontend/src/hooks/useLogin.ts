// Import the required modules
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/users/login',
      credentials
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// Create the mutation function using react-query's useMutation
const useLoginMutation = () => {
  return useMutation((credentials: { email: string; password: string }) =>
    login(credentials)
  );
};

export default useLoginMutation;
