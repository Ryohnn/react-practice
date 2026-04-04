import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BaseFormProps } from '@/types/forms';
import { User } from '@/types';
import { Form } from '@inertiajs/react';

export default function EditUserModalForm(props: BaseFormProps<User>) {
    const { data } = props;

    return (
        <Form>
            <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    type="text"
                    value={data.name}
                    // onChange={(e) => setUsername(e.target.value)}
                />
            </div>
        </Form>
    );
}
