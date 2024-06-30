import React from 'react';
import { Logo } from '@/components';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-gray-800 mt-10">
      <div className="flex items-center justify-around container py-5 mx-auto">
        <div className="flex flex-col items-start">
          <p className="text-indigo-300 font-semibold">Elton Okawa</p>
          <p className="text-white">Full Stack Developer</p>
        </div>
        <div className="flex gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-accent"
          >
            <LinkedInLogoIcon width={24} height={24} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-accent"
          >
            <GitHubLogoIcon width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
