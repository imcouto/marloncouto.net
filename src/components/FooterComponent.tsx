// TODO: add more links, social media, etc
export function FooterComponent({ devName }: { devName: string }) {
  return (
    <footer className='bg-secondary py-6'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; 2024 {devName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
