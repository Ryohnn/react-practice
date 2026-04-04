import { createContext, ReactNode, use, useState } from 'react';
import { InertiaSharedProps } from '@/types';
import { usePage } from '@inertiajs/react';

const UserPreferencesContext = createContext<UserPreferencesValue|undefined>(undefined);

interface UserPreferencesValue {
    updateLanguage: (language: string) => void,
    selectedLanguage: string | undefined,
}

export function UserPreferencesProvider({ children }: { children: ReactNode }) {
    const { auth } = usePage<InertiaSharedProps>().props;
    const user = auth.user;

    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem(user.name + '_language') ?? undefined,
    );

    const updateLanguage = (language: string) => {
        localStorage.setItem(user.name + '_language', language);
        setSelectedLanguage(language);
    }

    const value = {
        updateLanguage: updateLanguage,
        selectedLanguage: selectedLanguage,
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

