import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import withGA from 'next-ga';

import customTheme from '../styles/theme';

class CustomApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={customTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }
}

export default withGA('UA-151395603-1', Router)(CustomApp);
