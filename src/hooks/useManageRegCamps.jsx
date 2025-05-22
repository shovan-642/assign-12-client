
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useManageRegCamps = () => {
        const axiosSecure = useAxiosSecure()


    const {data: camps = [], isPending: loading, refetch} = useQuery({
        queryKey: ["camps",],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/registered-camp`);
            return res.data
        }
    })

    return [camps, loading, refetch]
};

export default useManageRegCamps;