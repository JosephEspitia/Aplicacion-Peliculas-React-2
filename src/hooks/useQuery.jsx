import { useLocation } from "react-router-dom";

export function useQuery() {
    return new URLSearchParams(useLocation().search);
  } /* esto es un hook propio */