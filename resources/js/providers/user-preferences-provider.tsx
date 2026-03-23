import { createContext, ReactNode, use, useState } from 'react';
import { InertiaSharedProps } from '@/types';
import { usePage } from '@inertiajs/react';

const UserPreferencesContext = createContext<UserPreferencesValue|undefined>(undefined);

interface UserPreferencesValue {
    updateCountry: (country: string) => void,
    selectedCountry: string | undefined,
}

export function UserPreferencesProvider({ children }: { children: ReactNode }) {
    const { auth } = usePage<InertiaSharedProps>().props;
    const user = auth.user;

    const [selectedCountry, setSelectedCountry] = useState(
        localStorage.getItem(user.name + '_country') ?? undefined,
    );

    const updateCountry = (country: string) => {
        localStorage.setItem(user.name + '_country', country);
        setSelectedCountry(country)
    }

    const value = {
        updateCountry: updateCountry,
        selectedCountry: selectedCountry,
    };

    return (
        <UserPreferencesContext.Provider value={value}>
            {children}
        </UserPreferencesContext.Provider>
    );
}

export function useUserPreferences(): UserPreferencesValue {
    const context = use(UserPreferencesContext);
    if (!context)
        throw new Error(
            'useUserPreferences must be used within a UserPreferencesProvider',
        );
    return context;
}

