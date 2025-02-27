'use client'
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="absolute top-10 left-20 z-50">
      <button
      className='bg-white rounded-full p-2 border'
      onClick={() => router.back()} aria-label="Voltar para a página anterior">
        <ChevronDownIcon
          className="size-8 cursor-pointer transform rotate-90 text-gray-500" // Rotaciona 90 graus
          aria-hidden="true"
        />
      </button>
    </div>
  );
}