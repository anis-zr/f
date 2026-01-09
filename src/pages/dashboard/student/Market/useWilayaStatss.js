// src/utils/hooks/useWilayaStats.js
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/provider/axios';

export function useWilayaStatss(wilaya) {
  return useQuery(
    ['statss', wilaya],
    async () => {
      const { data } = await axiosInstance.get(`/statss/wilaya/${wilaya}`);
      // نتوقع شكل data = [{ product, quantite, propose }, …]
      return data;
    },
    {
      refetchInterval: 5000,    // polling كل 5 ثواني
      enabled: !!wilaya,
    }
  );
}


