import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BaseFormProps } from '@/types/forms';
import { User } from '@/types';
import { Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import UserController from '@/actions/App/Http/Controllers/UserController';

export default function EditUserModalForm(props: BaseFormProps<User>) {
    const { data, onSuccess } = props;

    return (
        <Form
            {...UserController.updateUser.form()}
            onSuccess={onSuccess}
            options={{
                preserveScroll: true,
            }}
            className="space-y-6"
        >
            <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={data.name}
                    className="mb-3"
                />

                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    defaultValue={data.email}
                />

                <Button type="submit" className="mt-4">
                    Save Changes
                </Button>
            </div>
        </Form>
    );
}
