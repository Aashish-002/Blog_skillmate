import Image from 'next/image';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

async function NavBar() {
  const session = await getServerSession(authOptions);
  console.log('server', session?.user.role);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full px-5 md:px-20 border py-1">
      {/* LOGO */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <Image src="/images/logo.svg" className="mt-2" alt="logo" width={120} height={120} />
      </div>

      {/* Links */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-lg md:text-xl mt-4 md:mt-0 items-center md:items-end w-full md:w-auto justify-center md:justify-end">
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  );
}

export default NavBar;
