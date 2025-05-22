
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRegCamp = () => {
    const axiosSecure = useAxiosSecure()
    const {user}=useAuth()

    const {data: camps = [], isPending: loading, refetch} = useQuery({
        queryKey: ["camps", user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/registered-camp/${user.email}`);
            return res.data
        }
    })

    return [camps, loading, refetch]
};

export default useRegCamp;