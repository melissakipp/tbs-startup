import { Inter } from '@next/font/google';
import Link from 'next/link';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <main className={styles.main}> 
      <article className={styles.cta__box}>
        <div className={styles.cta__text}>
          <section>
            <h2>Fighting false information, <br />one truth at a time.</h2>
            <p>Join the movement and be the first to know about our latest developments, and updates!</p>
            <p>Sign up for our newsletter now and stay informed about the fight against disinformation.</p>
          </section>
          <section className={styles.formContainer}>                
            {/* <form className={styles.form}>
              <fieldset className={styles.form__fieldset}>
                <label className="screen-reader-text" htmlFor="email">Enter Email</label>
                <input 
                  className={styles.form__input} 
                  type="email" 
                  id="email" 
                  placeholder='Email Address'
                />
              </fieldset>
            </form> */}
            <div className={styles.signUp}>
              <Link className={styles.signUpLink} href="/newsletterSignUp.html">Sign Up</Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  </>
  );
}
