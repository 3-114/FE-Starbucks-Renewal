'use client';
import React from 'react';
import Image from 'next/image';

export default function ProductDescription({
  imageList,
}: Readonly<{ imageList: string[] }>) {
  return (
    <section className="pt-10">
      <h2 className="text-lg font-bold px-6 pb-4">상품 정보</h2>
      <div className="space-y-6">
        {imageList.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`상품 이미지 ${index + 1}`}
            width={600}
            height={600}
            className="mx-auto w-full md:w-3xl"
          />
        ))}
      </div>
    </section>
  );
}
