import React from 'react';
import './style.css';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';
export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroname="bat man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="joker" />
      </ErrorBoundary>
    </div>
  );
}
