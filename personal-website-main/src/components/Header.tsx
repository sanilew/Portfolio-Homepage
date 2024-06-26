'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faMedium,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ScrollProgressBar from './ScrollProgressBar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import routes from '@/routes';

function Header() {
  const pathname = usePathname();

  const titles: Record<string, string> = {
    [routes.projects.catho.pathname]: routes.projects.catho.title,
    [routes.projects.ebanx.pathname]: routes.projects.ebanx.title,
  };

  const title = titles[pathname];

  return (
    <div className="fixed left-0 top-0 z-20 w-full">
      <div className="flex w-full flex-col flex-wrap items-center justify-between gap-4 border-b border-b-gray-700 bg-gray-950 px-6 py-4 xs:h-16 xs:flex-row xs:gap-0 xl:px-12">
        <div>
          <Link
            href="/"
            className="text-base font-bold text-white hover:text-teal-400"
          >
            Anil Upadhyay
          </Link>
          {title && (
            <span className="hidden text-base text-white  lg:inline">
              {' '}
              / {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 xs:ml-6">
          <a
            href="https://www.linkedin.com/in/anil-upadhyay-7b24502bb/"
            target="_blank"
            className="block text-white hover:text-teal-400"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
          </a>

          <a
            href="https://github.com/sanilew"
            target="_blank"
            className="block text-white hover:text-teal-400"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </a>
        </div>
      </div>
      {pathname.includes('project') && <ScrollProgressBar />}
    </div>
  );
}

export default Header;
