// NOTE: https://github.com/JedWatson/classnames/issues/152
const _classNames = require("classnames");
interface ClassArray extends Array<ClassValue> {} // tslint:disable-line no-empty-interface
interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}
type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;
export function classNames(...classes: ClassValue[]): string {
  return _classNames(...classes);
}
