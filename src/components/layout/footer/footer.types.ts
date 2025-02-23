

export interface LinkItem {
    href: string;
    label: string;
}

export interface NewsletterFormProps {
    placeholder?: string;
    buttonText?: string;
    onSubscribe?: (email: string) => void;
}

export interface FormState {
    email: string;
    isSubmitting: boolean;
    error?: string;
}