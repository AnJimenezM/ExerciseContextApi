import React, { useEffect } from 'react'
import styles from  './../styles/error.module.css'
export const ErrorPage = () => {
  useEffect(()=>{
    //Guardar estilo original del body
    const originalBodyClassName = document.body.className;

    //Aplicar la clase del body de pagina de error
    document.body.className = `${styles.errorPageBody}`;

    //Limpiar el estilo del boy al desmontar  el componente
    return () =>{
      document.body.className = originalBodyClassName;
    }
  },[]); // Arreglo de dependencias vacio, significa que solo se ejecutara una vez.
  return (
    
    <div className={styles.customBodyClass}>
        <section id="not-found">
            <div className={styles.circles}>
                <p>404</p>
                <p>
                <small>Pagina no encontrada!</small>
                </p>  
            <span className={`${styles.circle} ${styles.big}`}></span>
            <span className={`${styles.circle} ${styles.med}`}></span>
            <span className={`${styles.circle} ${styles.small}`}></span>
            </div>
        </section>
    </div>

  )
}
