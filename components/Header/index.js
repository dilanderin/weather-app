import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <Image
        className="object-cover rounded-lg border border-gray-100 shadow-sm"
        src="/images/logo.png"
        alt="Weather App Logo"
        width={100}
        height={100}
      />

      <h1 className="ml-3">Weather App</h1>
    </header>
  );
};
