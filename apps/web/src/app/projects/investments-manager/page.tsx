import React from 'react';
import { ExternalLink, Carousel, ImageWithCaption } from '@/components';
import { FooterSpacer } from '@/app/components';

export default function Page() {
  return (
    <div className="flex flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mt-16 mx-auto">
      <h1 className="self-center">Investments Manager</h1>
      <p className="self-center">
        Investments Manager is a personal project that provides an UI to help me
        take decisions and configure{' '}
        <ExternalLink href="/stock-alert">Stock Alert</ExternalLink>.
      </p>
      <p className="font-semibold mb-0">Stack</p>
      <p>
        Node.js, Typescript, Angular, MongoDB, Docker, Google Cloud Platform,
        GitHub Actions
      </p>
      <video controls width="100%">
        <source
          src="/projects/investments-manager/overview.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <h2>Purpose and Goal</h2>
      <div className="max-w-2xl">
        <p>
          Modifying and managing parameters from{' '}
          <ExternalLink href="/stock-alert">Stock Alert</ExternalLink> directly
          on database was error prone and I didn&apos;t have any place to write
          down the reason why I chose to keep track of a particular stock or the
          values set for an alert.
        </p>
        <p>
          Also I had just started working at Jitterbit using Angular, so I took
          the opportunity to solve my problem and learn more about the
          framework.
        </p>
        <p>That&apos;s being said, here&apos;s the following requirements:</p>
        <ul>
          <li>
            I must be able to configure{' '}
            <ExternalLink href="/stock-alert">Stock Alert</ExternalLink>;
          </li>
          <li>it must be free to keep it running;</li>
          <li>I need to learn new concepts;</li>
        </ul>
      </div>

      <div className="max-w-2xl self-end">
        <h2>Tech Stack</h2>
        <p>
          Cloud providers offers a generous amount of free tier products,
          usually for serverless ones. So the Frontend and Backend are served
          using{' '}
          <ExternalLink href="https://cloud.google.com/run">
            Cloud Run
          </ExternalLink>{' '}
          running{' '}
          <ExternalLink href="https://nodejs.org/en">Node.js</ExternalLink> and{' '}
          <ExternalLink href="https://angular.dev/">Angular</ExternalLink>, both
          with{' '}
          <ExternalLink href="https://www.typescriptlang.org/">
            Typescript
          </ExternalLink>
          .
        </p>
        <p>
          On every PR merged I have a{' '}
          <ExternalLink href="https://github.com/features/actions">
            GitHub Actions{' '}
          </ExternalLink>
          workflow that build a{' '}
          <ExternalLink href="https://www.docker.com/">Docker</ExternalLink>{' '}
          image and deploy on Cloud Run.
        </p>
      </div>

      <h2>Current Status and Future</h2>
      <div>
        <p>
          It&apos;s been running since 2025 and every month I use it to drive my
          decisions.
        </p>
        Features:
        <ul>
          <li>Price variation overview</li>
          <li>Annotations</li>
          <li>Alert configuration</li>
        </ul>
      </div>
      <Carousel className="w-full h-[500px]">
        <ImageWithCaption
          src="/projects/investments-manager/stock-list.png"
          caption="Stock price variation over the time"
        />
        <ImageWithCaption
          src="/projects/investments-manager/alert-config.png"
          caption="Configuring a stock alert"
        />
      </Carousel>

      <div className="max-w-2xl">
        <h2>Lessons Learned</h2>
        <p>
          Again, start delivering value early and iterate through it, it does
          not need to be perfect. We can see many sections in the left menu that
          I planned to add but didn&apos;t show enough value to be done
        </p>
      </div>
      <FooterSpacer />
    </div>
  );
}
