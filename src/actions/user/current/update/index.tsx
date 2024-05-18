// "use server";
// import { ActionError, action } from "@/lib/safe-action";
// import db from "@/lib/db";
// import updateCurrentUserSchema from "./schema";
// import getCurrentUser from "../get";

// const updateCurrentUser = action
//   .schema(updateCurrentUserSchema)
//   .action(async ({ parsedInput: { name, role, profileImage } }) => {
//     const user = await getCurrentUser();
//     if (!user) {
//       throw new ActionError("Current user is not defined!");
//     }
//     try {
//       const updatedCurrentUser = await db.user.update({
//         where: {
//           id: user.id,
//         },
//         data: {
//           role,
//           name,
//           profileImage,
//         },
//       });
//       return { success: "Successfully updated current user" };
//     } catch (error) {
//       throw new ActionError("Failed to update current user");
//     }
//   });

// export default updateCurrentUser;
