import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addHallazgo } from "../api/hallazgos/add-hallazgo.action";

export const useHallazgo = () => {
  const queryClient = useQueryClient();

  // Querys
  const hallazgos = useQuery({
    queryKey: ["hallazgos"],
    queryFn: addHallazgo,
    staleTime: 1000 * 60 * 60 * 72,
  });

  // Mutations
  const {mutate: addHallazgoMutation } = useMutation({
    mutationFn: addHallazgo,
    onSuccess: (newHallazgo) => {
      // Invalidamos la caché para que se vuelva a cargar la lista de hallazgos.
      queryClient.invalidateQueries(["hallazgos"]);
      // Actualizamos la caché con el nuevo hallazgo.
      queryClient.setQueryData(["hallazgos"], (oldData) => {
        // Si oldData es null, significa que no hay datos en caché, así que simplemente devolvemos el nuevo hallazgo.
        if (oldData == null) return [newHallazgo];
        return [...oldData, newHallazgo];
      });
    }
  })

  return {
    hallazgos,
    addHallazgoMutation,
  }
}