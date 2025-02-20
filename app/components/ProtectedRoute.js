"use client"

import { useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "../context/AuthContext";
import Loading from "./loading";
const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    if (user === null) {
        return <Loading />
    }

    if (!user) {
        router.push("/register");
        return null;
    }

    return children;
};

export default ProtectedRoute;