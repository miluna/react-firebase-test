import React, {ReactNode} from 'react';

interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => (
    <div className="container">
        {children}
    </div>
);

export default Container;
