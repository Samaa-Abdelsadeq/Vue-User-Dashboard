import { deleteUser } from "../services/userServices";

export async function deleteUserAction(id){
                try{
                await deleteUser(id);
                }catch(err){
                    console.log(err);
                    
                }
            }

