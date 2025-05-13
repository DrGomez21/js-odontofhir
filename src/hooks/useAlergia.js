import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAlergia } from "../api/alergias/add-alergia.action";

export const useAlergia = () => {

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: addAlergia,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['alergias'] })
      queryClient.setQueryData(['alergias'], (oldData) => {
        if (!oldData) return [data]
        return [...oldData, data]
      })
    },
  })

  return {
    mutate
  }
}
