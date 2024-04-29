let appRoutes = {
  path: "/app",
  async lazy() {
    let { Layout } = await import("../../components/layout/Layout");
    return { Component: Layout };
  },
  children: [
    {
      path: "home",
      async lazy() {
        let { Home } = await import("../../pages/app/Home");
        return { Component: Home };
      },
    },
    {
      path: "movies",
      async lazy() {
        let { Movies } = await import("../../pages/app/Movies");
        return { Component: Movies };
      },
    },
    {
      path: "series",
      async lazy() {
        let { Series } = await import("../../pages/app/Series");
        return { Component: Series };
      },
    },
    {
      path: "bookmarks",
      async lazy() {
        let { Bookmarked } = await import("../../pages/app/Bookmarked");
        return { Component: Bookmarked };
      },
    },
  ],
};

export default appRoutes;
