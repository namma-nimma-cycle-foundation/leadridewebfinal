import React from 'react';
import Link from '@docusaurus/Link';

/**
 * @typedef {{ question: string | import('react').ReactNode,answer: string | import('react').ReactNode, tags?: string[]}} FAQ
 */

/**
 * All FAQs here
 *
 * - You can use a string/jsx for both question and answer props.
 * - A question/answer can have multiple tags.
 * @type {FAQ[]}
 */
const FAQs = [
  {
    question: 'What does Lead Ride do?',
    answer: (
      <>
        <p>
        Lead Ride offers an opportunity to cycle together and engage in solution for integrating
          walking and cycling  into your daily life . 
          Apart from that we help cities build and connect to existing ecosystems.
          We have different flavours for different sectors - namely - education, industry, city and community.
         <p> Summary - we will eventually get everyone on cycle TOGETHER - PERIOD.</p>
        </p>

        <p>Lead Ride  includes:</p>
        <p>
          <b>Lead Ride City</b>: These SDKs enable you to create high-quality custom
          video and voice calls with real-time communication. Core SDKs are
          completely customizable and simple to integrate.
        </p>
        <p>
          <b>Lead Ride University</b>: Using Dyte&quot;s prebuilt design library of UI
          components, you can integrate video and voice calls into your app or
          website in minutes.
        </p>
        <p>
          <b>Lead Ride University</b>: Using Dyte&quot;s prebuilt design library of UI
          components, you can integrate video and voice calls into your app or
          website in minutes.
        </p>

        <p>The following services  are currently supported:</p>

        <ul>
          <li>
            Lead Ride Tours  

          </li>
          <li>
          Lead Ride B-Well Clubs  
          </li>
          <li>Bike Week </li>
        </ul>
        <p>
          For more information, see <Link href="/">Lead Ride Services</Link>.
        </p>
      </>
    ),
    tags: ['City'],
  },
  {
    question: 'What businesses can use Lead Ride ?',
    answer:
      'Lead Ride can add value to a wide range of industries, including  product companes, education, fashion and others.',
    tags: ['City'],
  },
  {
    question: 'What is a the first step ?',
    answer: (
      <>
        <p>
          To get started with Lead Ride , you must first register on the website. 
        </p>
        <ul>
          <li>
            Dashboard: A view of number of cyclists, actors, and organization road map for lead ride,
            etc.
          </li>
         
          <li>
            <b>Logs and Sample Apps</b>: You can view logs and sample apps in
            developer portal.
          </li>
        </ul>
        <p>
          You can also create a webhook, roles, presets, and so on using the
          developer portal.
        </p>
      </>
    ),
    tags: ['City'],
  }
];

export default FAQs;
