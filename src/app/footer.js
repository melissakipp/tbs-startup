export default function Footer() {
  return (
    <footer className='footer'>
      &copy; {(new Date().getFullYear())}
    </footer>
  );
}