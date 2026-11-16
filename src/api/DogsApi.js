import { useQuery } from '@tanstack/react-query';
import { $api } from './api';

const getDogs = async () => {
    const response = await $api.get('/images/search?limit=12');
    return response.data;
};

export const useDogs = () => {
    return useQuery({
        queryKey: ['images'],
        queryFn: getDogs,
    });
};