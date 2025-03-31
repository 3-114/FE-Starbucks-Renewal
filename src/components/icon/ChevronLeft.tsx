'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft as LucideChevronLeft } from 'lucide-react';

export default function ChevronLeft(){
    const router = useRouter();
    
    return (
        <LucideChevronLeft size={24} onClick={() => router.back()} />
    )
}
