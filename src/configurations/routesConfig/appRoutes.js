let appRoutes = {
  path: "/app",
  async lazy() {
    let { Layout } = await import("../../components/layout/Layout");
    return { Component: Layout };
  },
  children: [
    {
      index: true,
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
      path: "bookmark",
      async lazy() {
        let { Bookmarks } = await import("../../pages/app/Bookmarks");
        return { Component: Bookmarks };
      },
    },
  ],
};

export default appRoutes;
