export const apiURL = () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return "http://localhost:3222";
  }
  return "https://evening-hollows-03778.herokuapp.com";
};
