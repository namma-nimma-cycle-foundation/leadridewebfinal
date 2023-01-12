import React from 'react';
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from './HomepageComponents';

export default function GuidesSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="Big Picture"
        description="What is Lead Ride ? What is the identity of Lead Ride ? "
        to="/guides/big-picture"
      />
      <Card
        title="Lead Ride Anatomy"
        description="How is lead ride structured ? "
        to="/guides/anatomy"
      />
      <Card
        title="Lead Ride - How does it function ?"
        description="How does Lead Ride Function ? "
        to="/guides/function"
      />

      <Card
        title="Lead Ride - Design Space"
        description="Design Elements of Lead Ride ."
        to="/guides/design"
      />
      <Card
        title="What we intend to deliver ?"
        description="Lead ride will be rendering many creative stuff - what are they ?"
        to="/guides/deliver"
      />
      <Card
        title="Lead Ride Outcomes and Impact"
        description="What is the potential impact of Lead Ride ?."
        to="/guides/outcomes"
      />
     
    </Section>
  );
}
