import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class RootErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error?.message || 'An unexpected error occurred' };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Anjrich App caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF9F7] flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 max-w-md w-full">
            <div className="w-16 h-16 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
              !
            </div>
            <h1 className="text-xl font-bold text-[#111827] mb-2 font-['Space_Grotesk']">
              Anjrich The Toy Store
            </h1>
            <p className="text-sm text-neutral-600 mb-6">
              Something went wrong while loading the page. Please refresh to try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full bg-[#1F3A8A] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#1E3A8A]/90 transition-colors shadow-sm cursor-pointer"
            >
              Refresh Page
            </button>
            <div className="mt-4 pt-4 border-t border-neutral-100 text-xs text-neutral-400">
              Ambernath West, Maharashtra | Tel: +91 98231 24567
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </React.StrictMode>
  );
}
