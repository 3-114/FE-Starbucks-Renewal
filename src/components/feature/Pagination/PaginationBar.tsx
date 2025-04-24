'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

interface PaginationBarProps {
  totalPages: number;
}

export default function PaginationBar({ totalPages }: PaginationBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  const lastPage = totalPages;

  // 가운데 페이지 범위 계산
  const middlePages = [
    ...new Set(
      [currentPage - 1, currentPage, currentPage + 1].filter(
        (n) => n > 1 && n < lastPage
      )
    ),
  ];

  return (
    <Pagination>
      <PaginationContent>
        {/* 이전 페이지 */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) goToPage(currentPage - 1);
            }}
          />
        </PaginationItem>

        {/* 첫 페이지 */}
        <PaginationItem>
          <PaginationLink
            href="#"
            className={cn(
              'px-3 py-1.5 text-sm border border-transparent hover:border-gray-300 rounded-md transition',
              currentPage === 1 && 'border-gray-400 bg-gray-100 font-semibold'
            )}
            onClick={(e) => {
              e.preventDefault();
              goToPage(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>

        {/* ... 앞쪽 생략 */}
        {middlePages.length > 0 && middlePages[0] > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* 중간 페이지 */}
        {middlePages.map((pageNum) => (
          <PaginationItem key={pageNum}>
            <PaginationLink
              href="#"
              className={cn(
                'px-3 py-1.5 text-sm border border-transparent hover:border-gray-300 rounded-md transition',
                pageNum === currentPage &&
                  'border-gray-400 bg-gray-100 font-semibold'
              )}
              onClick={(e) => {
                e.preventDefault();
                goToPage(pageNum);
              }}
            >
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* ... 뒤쪽 생략 */}
        {middlePages.length > 0 &&
          middlePages[middlePages.length - 1] < lastPage - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

        {/* 마지막 페이지 */}
        {lastPage > 1 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              className={cn(
                'px-3 py-1.5 text-sm border border-transparent hover:border-gray-300 rounded-md transition',
                currentPage === lastPage &&
                  'border-gray-400 bg-gray-100 font-semibold'
              )}
              onClick={(e) => {
                e.preventDefault();
                goToPage(lastPage);
              }}
            >
              {lastPage}
            </PaginationLink>
          </PaginationItem>
        )}

        {/* 다음 페이지 */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < lastPage) goToPage(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
