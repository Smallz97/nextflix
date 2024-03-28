const protectedroutes = [
  {
    path: "/",
    async lazy() {
      let { Home } = await import("../../pages/app/HomePage");
      return { Component: Home };
    },
  },
];

export default protectedroutes;
