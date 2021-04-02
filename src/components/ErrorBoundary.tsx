import React, {ReactNode} from "react";
import styled from "@emotion/styled";
import {Typography} from "antd";

type ErrorBoundaryState = {hasError: boolean; error: Error | null};
type ErrorBoundaryProps = {
  children: ReactNode;
};

const defaultState: ErrorBoundaryState = {hasError: false, error: null};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state = defaultState;

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {hasError: true, error};
  }

  render() {
    return this.state.hasError ? (
      <Wrapper>
        <Typography.Title>:(</Typography.Title>

        <Typography.Title level={3}>
          {this.state.error?.message || ""}
        </Typography.Title>
        <Typography.Text>Please try again later.</Typography.Text>
      </Wrapper>
    ) : (
      this.props.children
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100vh;
`;

export default ErrorBoundary;
