"use client"
 import React, { Component, ErrorInfo } from "react";
 import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;  
  refetch?: () => Promise<any>;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });
    console.error("Erreur capturée dans ErrorBoundary:", error, errorInfo);
  }

  handleRetry = async () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.refetch) {
      await this.props.refetch();  
    }
  }

  render() {
     if (this.state.hasError) {
      return (
        <ErrorSection>
          <h2>Une erreur est survenue dans un composant.</h2>
          <p>{this.state.error?.message}</p>
          {this.props.fallback || <p>Veuillez réessayer plus tard.</p>}
          <button onClick={this.handleRetry}>Réessayer</button>
        </ErrorSection>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

 const ErrorSection = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-inline:auto;
  width: min(90%, 970px);
  margin-block-start:1.5rem;
  gap:15px;
`;
