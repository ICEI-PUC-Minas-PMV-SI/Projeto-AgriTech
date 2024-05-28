"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginIcon } from "../components/icons/Icons";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { user } = useUser();
  const navigate = useRouter();

  useEffect(() => {
    if (user) navigate.push("/");
  }, [user]);

  return (
    <div className={styles.container}>
      <img src="/images/logo.jpg" alt="Logo" className={styles.header} />
      <div className={styles.content}>
        <h1>COOPRAFAD</h1>
        <p>
          HÁ MAIS DE 10 ANOS TRABALHANDO COM A AGRICULTURA FAMILIAR PARA
          GARANTIR ALIMENTOS SAUDÁVEIS
        </p>
        <p>
          <span>
            {" "}
            <b>DO CAMPO DIRETO PARA A MESA DOS NOSSOS CLIENTES!</b>
          </span>
        </p>
        <p>
          Nossa abordagem inovadora promove práticas sustentáveis e garantimos a
          qualidade dos nossos produtos, sendo reconhecidos na agricultura
          familiar devido ao nosso apoio aos produtores locais.
        </p>
      </div>
      <div className={styles.footer}>
        {" "}
        📞 <b>CONTATO (37) 3071-1876</b>
      </div>
    </div>
  );
}
