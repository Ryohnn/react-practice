import BaseModal, {
    BaseModalProps,
} from '@/components/modals/base-modal';

const EditUserModal = ({ showModal, setShowModal }: BaseModalProps) => {
    return (
        <BaseModal
            title="Edit User"
            showModal={showModal}
            setShowModal={setShowModal}
        />
    );
};

export default EditUserModal;
