import { GlobalEnum } from "./enums";

export const setSecretKey = (key: string, value: {} | string) => {
  let secrets = localStorage.getItem(GlobalEnum.SECRETS);
  if (secrets) {
    const secrets_obj = JSON.parse(secrets);
    localStorage.setItem(
      GlobalEnum.SECRETS,
      JSON.stringify({ ...secrets_obj, [key]: value })
    );
  } else {
    localStorage.setItem(GlobalEnum.SECRETS, JSON.stringify({ [key]: value }));
  }
};

export const getKeySecret = (key: any) => {
  const secrets = localStorage.getItem(GlobalEnum.SECRETS);
  if (secrets) {
    const secrets_obj = JSON.parse(secrets);
    return secrets_obj[key];
  }
  return null;
};

export const delKeySecret = (key: any) => {
  const secrets = localStorage.getItem(GlobalEnum.SECRETS);
  if (secrets) {
    const secrets_obj = JSON.parse(secrets);
    delete secrets_obj[key];
    localStorage.setItem(
      GlobalEnum.SECRETS,
      JSON.stringify({ ...secrets_obj })
    );
  }
  return null;
};
