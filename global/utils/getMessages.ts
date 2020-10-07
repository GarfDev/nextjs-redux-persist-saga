const getMessages = async (locale: string) => {
  try {
    return require(`locales/${locale}/translations.json`);
  } catch (error) {
    console.error(error);
    return require(`locales/en/translations.json`);
  }
};

export default getMessages;
