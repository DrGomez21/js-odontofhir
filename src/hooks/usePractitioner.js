import { useQuery } from "@tanstack/react-query";
import { getPractitionerByIdAction, getPractitionerByCIAction } from "../api/practitioner/get-practitioner";

export const useGetPractitionerById = (practitionerId) => {
  return useQuery=({
    queryKey: ['practitioner', practitionerId],
    queryFn: () => getPractitionerByIdAction(practitionerId),
  })
}

export const useGetPractitionerByCI = (ci) => {
  return useQuery({
    queryKey: ['practitioner', ci],
    queryFn: () => getPractitionerByCIAction(ci),
  });
};