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
import { Label } from '@/components/ui/label';

interface selectOptions {
    value: string,
    label: string,
}

const options: selectOptions[] = [
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ie', label: 'Ireland' },
];

interface LanguageSelectorProps {
    useLabel?: boolean,
}

export default function LanguageSelector({ useLabel = true }: LanguageSelectorProps) {
    const { updateLanguage, selectedLanguage } = useUserPreferences();

    return (
        <div className="grid gap-2">
            {useLabel && <Label htmlFor="language-selector">Language</Label>}
            <Select
                value={selectedLanguage}
                onValueChange={(language) => updateLanguage(language)}
            >
                <SelectTrigger id="language-selector">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Languages</SelectLabel>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}
