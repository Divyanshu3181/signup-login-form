export const saveEmailToStorage = (email: string): void => {
    localStorage.setItem('rememberedEmail', email);
  };
  
  export const getEmailFromStorage = (): string => {
    return localStorage.getItem('rememberedEmail') || '';
  };