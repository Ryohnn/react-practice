import { Atom } from 'lucide-react';
import { ComponentProps } from 'react';

export default function AppLogoIcon(props: ComponentProps<typeof Atom>) {
    return <Atom {...props} />;
}