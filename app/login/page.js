"use client";

import LoginForm from "@/app/_components/Authentication/LoginForm";
import SignupForm from "../_components/Authentication/SignupForm";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex justify-center items-center p-8 relative">
      <div className="relative w-[30rem] h-[40rem] border shadow-lg shadow-green-200 rounded-xl overflow-hidden">
        {/* LOGIN FORM */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: isLogin ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full flex items-between justify-center"
        >
          <LoginForm handleLoginState={() => setIsLogin(false)} />
        </motion.div>

        {/* SIGNUP FORM */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isLogin ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full flex items-between justify-center"
        >
          <SignupForm handleLoginState={() => setIsLogin(true)} />
        </motion.div>
      </div>
    </section>
  );
}
