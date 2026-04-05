import {
    BaseModalProps,
} from '@/types/modals';
import EditUserModalForm from '@/components/modals/forms/edit-user-modal-form';
import { User } from '@/types';
import BaseModal from '@/components/modals/base-modal';

interface EditUserModalProps<T> extends BaseModalProps {
    data: T
}

const EditUserModal = ({ data, showModal, setShowModal }: EditUserModalProps<User>) => {
    return (
        <BaseModal
            title="Edit User"
            showModal={showModal}
            setShowModal={setShowModal}
        >
            <EditUserModalForm
                data={data}
            />
        </BaseModal>


    );
};

export default EditUserModal;
