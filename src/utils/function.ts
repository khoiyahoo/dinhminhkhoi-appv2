export const getPathName = (pathname: string) => {
  if (pathname.endsWith("/") && !pathname.startsWith("/")) {
    return pathname;
  }
  return `${pathname}/`;
};
