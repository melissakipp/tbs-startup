import styles from './about.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <article>
        <h1>About</h1>
        <p>Welcome to our web application prototype! Our mission is to empower social media users to combat misinformation and disinformation encountered online, across all social media platforms. Our goal is to promote democracy through free speech and to provide a reliable source of truthful information to combat the negative global impact of disinformation.</p>
        <p>With our tool, you can create and view "truthbombs," which are visual representations of data sourced from reputable research groups, academic institutions, public policy organizations, public health agencies, nonprofits, government agencies, and more. These truthbombs are designed to counter targeted disinformation that is widely spread on social media.</p>
        <p>If you encounter disinformation online and need a truthbomb argument to counter it, simply message our tbs team with your request. Our team will do their best to provide you with the information you need to fight misinformation.</p>
        <p>As an administrator, you can add new truthbombs to our system to help keep our community informed and equipped to fight disinformation. Join us in our mission to promote truth, transparency, and democracy online.</p>
      </article>
    </main>
  )
}
