import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useUserPreferences } from '@/providers/user-preferences-provider';
import { useState } from 'react';

interface selectOptions {
    value: string,
    label: string,
}

const options: selectOptions[] = [
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ie', label: 'Ireland' },
];

export default function CountrySelector() {
    const { updateCountry, selectedCountry } = useUserPreferences();

    return (
        <Select
            value={selectedCountry}
            onValueChange={(country) => updateCountry(country)}
        >
            <SelectTrigger>
                <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
