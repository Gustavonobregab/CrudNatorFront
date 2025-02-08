'use client'

import { Provider } from 'react-redux';
import { store } from './index';

interface Props {
    children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>);
};


export default AppProvider;