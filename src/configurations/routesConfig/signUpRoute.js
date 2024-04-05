let signUpRoute = {
  path: "/sign-up",
  async lazy() {
    let { SignUp } = await import("../../pages/auth/SignUp");
    return { Component: SignUp };
  },
};

export default signUpRoute;
