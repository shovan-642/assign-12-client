
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePopularCamps = () => {


    const axiosPublic = useAxiosPublic()

    const {data: popularCamps = [], isPending: loading, refetch} = useQuery({
        queryKey: ["camps"],
        queryFn: async()=>{
            const res = await axiosPublic.get('/highestCamp');
            return res.data
        }
    })
    return [popularCamps, loading, refetch]

};

export default usePopularCamps;