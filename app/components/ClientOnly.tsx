'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [hasMounter, setHasMounter] = useState(false);

    useEffect(() => {
        setHasMounter(true);
    }, []);

    if (!hasMounter) {
        return null;
    }

    return <>{children}</>;
};

export default ClientOnly;
