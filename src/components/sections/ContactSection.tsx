import ContactForm from '@/components/ContactForm.tsx';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';

// TODO: contact form is a modal and is multi step
export default function ContactSection() {
  return (
    <section
      id='contact'
      className='py-20'
    >
      <h2 className='text-3xl font-bold mb-8'>Entre em Contato</h2>
      <Card>
        <CardHeader>
          <CardTitle>Envie uma mensagem</CardTitle>
          <CardDescription>
            Ficarei feliz em conversar sobre oportunidades de trabalho ou
            colaborações.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
}
