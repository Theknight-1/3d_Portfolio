import { Component } from "react";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <p className="text-white text-lg">
                        Failed to load 3D model. Please try refreshing.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;