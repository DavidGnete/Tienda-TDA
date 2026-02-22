import { titleFont } from '@/services/TextFont';
import { LoginForm } from './ui/LoginForm';
import Link from 'next/link';



export default function () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-32 sm:pt-52">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>
    <LoginForm />
    </div>
  );
}