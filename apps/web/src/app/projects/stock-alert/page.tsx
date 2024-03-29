import React from 'react';
import { ExternalLink, Carousel, ImageWithCaption } from '@/components';

export default function Page() {
  return (
    <div className=" flex flex-col max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mt-16 mx-auto">
      <h1>Stock Alert</h1>
      <div className="flex flex-row gap-4">
        <div className="flex-1">
          <p>
            Stock Alert is a personal project that sends me an email every
            weekday if the closing price reaches a pre-configured threshold such
            as fixed price or percentage change.
          </p>
          <p className="font-semibold mb-0">Stack</p>
          <p>Node.js, Typescript, Jest, Google Cloud Platform</p>
        </div>
        <div className="relative w-[320px] h-[400px]">
          <ImageWithCaption
            src="/projects/stock-alert/email.jpg"
            caption="Example email with alerts"
          />
        </div>
      </div>

      <h2>Purpose and Goal</h2>
      <div className="max-w-2xl">
        <p>
          {
            "As an investor I've been applying the Swing Trading approach - buy when it's cheap and sell when it's expensive. In the short and medium-term the market is volatile, so ideally I should look at the stock prices at least once a week to not miss any opportunity."
          }
        </p>
        <p>
          This repetitive task became a burden for me as the number of stocks
          increased, so I had the idea to automate it while learning something
          new, leading me to the following requirements:
        </p>
        <ul>
          <li>it must be free to keep it running;</li>
          <li>it must be flexible to add more alerts;</li>
          <li>I need to learn new concepts;</li>
        </ul>
      </div>

      <div className="max-w-2xl self-end">
        <h2>Tech Stack</h2>
        <p>
          Cloud providers offers a generous amount of free tier products,
          usually for serverless ones. So the main logic would be performed by{' '}
          <ExternalLink href="https://cloud.google.com/functions">
            Cloud Functions
          </ExternalLink>{' '}
          running{' '}
          <ExternalLink href="https://nodejs.org/en">Node.js</ExternalLink> and{' '}
          <ExternalLink href="https://www.typescriptlang.org/">
            Typescript
          </ExternalLink>
          .
        </p>
        <p>
          In order to be make sure that the item would be processed and to be
          easy to add new type of alerts, I choose an Event Driven Approach
          using{' '}
          <ExternalLink href="https://cloud.google.com/pubsub">
            Pub/Sub
          </ExternalLink>{' '}
          as the message broker.
        </p>
        <p>
          The Stock API free tier has an rate limit such as at most 5 requests
          per second,{' '}
          <ExternalLink href="https://cloud.google.com/tasks">
            Cloud Tasks
          </ExternalLink>{' '}
          allows me to choose how much tasks will be performed per second.
        </p>
        <p>
          Finally, in order to run it every weekday, I need a{' '}
          <ExternalLink href="https://cloud.google.com/scheduler">
            Cloud Scheduler
          </ExternalLink>{' '}
          to trigger the system.
        </p>
      </div>

      <h2>Development</h2>
      <p>
        I wanted to start delivering value as soon as possible, so first I did
        the logic to access the API and logging on the console if the value was
        higher than a threshold. It worked but it required the entire
        environment setup to run it.
      </p>
      <p>
        Then I added the database, the stock price was saved and the alert
        config was pre configured, but I still had to run it manually.
      </p>
      <p>
        After setting up the infrastructure, I started receiving an email alert
        every day, but after each change I needed to deploy via command line.
      </p>
      <p>
        I left this first version running for a while, it was already fulfilling
        my needs. Some months later I had the idea to have two more alerts, one
        for missing data and another one for percentage changes.
      </p>
      <p>
        Before making any changes and seeing how this project could grow, I
        decided to add automated tests - ideally I should have added since the
        beginning - and a CI/CD on GitHub Actions to deploy every change
        automatically. Finally I added the logic and infrastructure for those
        two new alerts.
      </p>
      <p>The following images show the current architecture:</p>

      <Carousel className="w-3/4 h-96">
        <ImageWithCaption
          src="/projects/stock-alert/parse-stock.jpg"
          caption="Parse stock architecture"
        />
        <ImageWithCaption
          src="/projects/stock-alert/alert-check.jpg"
          caption="Alert check architecture"
        />
        <ImageWithCaption
          src="/projects/stock-alert/send-email.jpg"
          caption="Send email architecture"
        />
      </Carousel>

      <p>
        {`At that time, I didn't find a way to synchronize on fan-in parts such as starting checking alerts after ALL stock price fetch has been done. My initial solution was executing each part after a specific amount of time, as it worked, I kept it and didn't revisit it.`}
      </p>

      <h2>Current Status and Future</h2>
      <div className="flex gap-4">
        <div className="flex-1">
          <p>
            {
              "It's been running since 2021, I received more than 600 alert emails and I didn't have any hosting cost."
            }
          </p>
          <p>
            Looking at the current design today, I would solve the fan-in
            problem by making the function that starts the fan-out write to the
            database the number of tasks that needs to be executed and each task
            executer function would decrement it atomically until the last one
            writes in a topic to start the next part.
          </p>

          <p>
            In the future I might implement this solution and create an React UI
            to manage the alert config - today I input it directly on the
            database.
          </p>
        </div>
        <Carousel className="w-[320px] h-[320px]">
          <ImageWithCaption
            src="/projects/stock-alert/emails-1.jpg"
            caption="Emails received in 2023. I didn't open all of them, sorry me from the past 😅"
          />
          <ImageWithCaption
            src="/projects/stock-alert/emails-2.jpg"
            caption="Initial emails received in 2021"
          />
        </Carousel>
      </div>

      <div className="max-w-2xl">
        <h2>Lessons Learned</h2>
        <p>
          The main takeaway from this experience is delivering value early and
          iterate through it by running manually on my computer, moving it to
          the cloud, automating the deploy and then adding more features.
        </p>
        <p>
          One big mistake I did in previous personal projects was spending
          months to create the super generic code, losing motivation and moving
          on to do another thing without having anything usable.
        </p>
        <p>
          Honorable mention goes to the applied Event Driven Architecture that
          allowed me to easily create a new alert function.
        </p>
      </div>
    </div>
  );
}
