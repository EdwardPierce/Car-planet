import AuthService from "@/layers/auth/service/AuthService";
import { setAuth } from "@/layers/auth/store/authSlice";
import { useEffect } from "react";
import { useAppDispath } from "./redux";
import { useQuery } from "react-query";

export const useCheckAuth = () => {
  const dispatch = useAppDispath();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const checkAuth = async () => {
        const response = await AuthService.checkAuth();

        dispatch(setAuth(response.data.user));
      };

      checkAuth();
    }
  }, [dispatch]);
};
