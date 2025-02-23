'use client';

import { FC, FormEvent, ChangeEvent, useState } from 'react';
import { FormState, NewsletterFormProps } from './footer.types';


export const NewsletterForm: FC<NewsletterFormProps> = ({
  placeholder = "Your email",
  buttonText = "Subscribe",
  onSubscribe
}) => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    isSubmitting: false
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true, error: undefined }));

    try {
      onSubscribe?.(formState.email);
      setFormState(prev => ({ ...prev, email: '' }));
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'Something went wrong' 
      }));
    } finally {
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setFormState(prev => ({ ...prev, email: value }));
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="newsletter-form"
      aria-label="Newsletter subscription form"
    >
      <p className="newsletter-form__description">
        Get blog articles and offers via email
      </p>
      <div className="newsletter-form__group">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleEmailChange}
          placeholder={placeholder}
          className="newsletter-form__input"
          required
          aria-required="true"
          disabled={formState.isSubmitting}
        />
      </div>
      {formState.error && (
        <p className="newsletter-form__error" role="alert">
          {formState.error}
        </p>
      )}
      <button 
        type="submit" 
        className="newsletter-form__button"
        aria-label="Subscribe to newsletter"
        disabled={formState.isSubmitting}
      >
        {formState.isSubmitting ? 'Subscribing...' : buttonText}
      </button>
    </form>
  );
};