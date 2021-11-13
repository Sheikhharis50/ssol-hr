/**
 * @param str: string
 * @returns: string
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Use to convert FormData to Key/Value Pairs
 * @param formData: FormData
 * @returns: Dictionary
 */
export const formDataToDict = (formData: FormData) => {
  let payload: any = {};
  formData.forEach((value: any, key: any) => {
    payload[key] = value;
  });
  return payload;
};

/**
 * check if Object is empty
 * @param obj: Dictionary
 * @returns: boolean
 */
export function isEmptyObj(obj: any) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

/**
 * @param value: string
 * @returns: string
 */
export function escapeRegExp(value: string): string {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
