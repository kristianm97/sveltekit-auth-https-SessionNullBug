import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async (event) => {
  //Session always prints null, even after login
  const session = await event.locals.auth();
  console.log("session", session);
  return {
    session: await event.locals.auth(),
  }
}
