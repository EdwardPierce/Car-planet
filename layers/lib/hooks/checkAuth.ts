import AuthService from "@/layers/auth/service/AuthService";
import { setAuth } from "@/layers/auth/store/authSlice";
import { useEffect } from "react";
import { useAppDispath } from "./redux";

export const useCheckAuth = () => {
  const dispatch = useAppDispath();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const checkAuth = async () => {
        const response = await AuthService.checkAuth();

        dispatch(setAuth(response.user));
      };

      checkAuth();
    }
  }, [dispatch]);
};
