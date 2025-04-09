import AddressCarousel from '@/components/shared/AddressCarousel';
import CartContainer from '@/components/container/CartContainer';

const dummyAddresses = [
  {
    id: '1',
    name: '집',
    zipcode: 12345,
    addressLine: '서울시 강남구 어딘가에 살고 있는 나',
    isDefault: true,
  },
  {
    id: '2',
    name: '회사',
    zipcode: 77777,
    addressLine: '부산시 사하구 어딘가에 살고 있는 나',
  },
];

export default function CartPage() {
  return (
    <main>
      <AddressCarousel addresses={dummyAddresses} />
      <CartContainer />
    </main>
  );
}
