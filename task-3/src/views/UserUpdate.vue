<template>
    <div v-if="!isLoading" class="flex justify-center items-center p-6 min-h-screen bg-neutral-secondary-light">
        <div class="w-full max-w-2xl bg-white dark:bg-neutral-primary-soft shadow-2xl rounded-2xl overflow-hidden border border-default-medium">
            
            <div class="p-8 bg-gradient-to-b from-neutral-secondary-light/50 to-transparent border-b border-default-soft">
                <div class="flex flex-col items-center text-center">
                    
                    <div class="flex flex-col items-center mb-6">
                        <div class="relative">
                            <img class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" :src="user.image" alt="Profile"/>
                        </div>
                        <div class="mt-3">
                            <label class="text-[10px] font-bold text-body/40 uppercase block mb-1">Profile Image URL</label>
                            <input type="text" v-model="updatedUser.image" :placeholder="user.image" 
                                class="text-xs w-72 p-2 bg-white border border-default-soft rounded-lg focus:ring-1 focus:ring-brand outline-none text-center placeholder:text-neutral-400/50 shadow-sm" />
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap justify-center gap-2 mb-4">
                        <input v-model="updatedUser.firstName" :placeholder="user.firstName" class="text-2xl font-bold border-b-2 border-transparent focus:border-brand bg-transparent outline-none text-center w-36 placeholder:text-neutral-400/50" />
                        <input v-model="updatedUser.maidenName" :placeholder="user.maidenName || 'Midname'" class="text-2xl font-bold border-b-2 border-transparent focus:border-brand bg-transparent outline-none text-center w-32 placeholder:text-neutral-400/50" />
                        <input v-model="updatedUser.lastName" :placeholder="user.lastName" class="text-2xl font-bold border-b-2 border-transparent focus:border-brand bg-transparent outline-none text-center w-36 placeholder:text-neutral-400/50" />
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <label class="text-[10px] font-bold text-brand uppercase tracking-widest mb-1">Job Title</label>
                        <input 
                            v-model="updatedUser.company.title" 
                            :placeholder="user.company?.title" 
                            class="px-6 py-1.5 text-sm font-semibold text-brand bg-brand/5 border border-brand/20 rounded-full outline-none focus:ring-2 focus:ring-brand/30 text-center min-w-[280px] placeholder:text-brand/30" 
                        />
                    </div>
                </div>
            </div>

            <div class="px-8 pb-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 border-t border-default-medium pt-8">
                    
                    <div class="space-y-4">
                        <h3 class="text-xs font-bold text-body/40 uppercase tracking-widest border-l-2 border-brand pl-2 mb-4">Personal Details</h3>
                        
                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Username</label>
                            <input v-model="updatedUser.username" :placeholder="user.username" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>

                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Birth Date</label>
                            <input v-model="updatedUser.birthDate" :placeholder="user.birthDate" type="text" onfocus="(this.type='date')" onblur="(this.type='text')"
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex flex-col space-y-1">
                                <label class="text-[10px] font-bold text-body/60 uppercase">Age</label>
                                <input type="number" v-model="updatedUser.age" :placeholder="user.age" 
                                    class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                            </div>
                            <div class="flex flex-col space-y-1">
                                <label class="text-[10px] font-bold text-body/60 uppercase">Blood Group</label>
                                <input v-model="updatedUser.bloodGroup" :placeholder="user.bloodGroup" 
                                    class="text-sm text-danger font-bold bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-xs font-bold text-body/40 uppercase tracking-widest border-l-2 border-brand pl-2 mb-4">Work & Contact</h3>
                        
                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Department</label>
                            <input v-model="updatedUser.company.department" :placeholder="user.company?.department" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>

                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Email Address</label>
                            <input v-model="updatedUser.email" :placeholder="user.email" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>

                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">University</label>
                            <input v-model="updatedUser.university" :placeholder="user.university" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>
                    </div>
                </div>

                <div class="mt-10 p-5 bg-neutral-secondary-medium/50 rounded-2xl border border-default-medium shadow-inner">
                    <span class="text-[10px] font-bold text-body/60 uppercase tracking-tighter block mb-3">Residential Address</span>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input v-model="updatedUser.address.address" :placeholder="user.address?.address" class="md:col-span-3 p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                        <input v-model="updatedUser.address.city" :placeholder="user.address?.city" class="p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                        <input v-model="updatedUser.address.state" :placeholder="user.address?.state" class="p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                        <input v-model="updatedUser.address.country" :placeholder="user.address?.country" class="p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                    </div>
                </div>
            </div>

            <div class="px-8 py-4 bg-neutral-secondary-light/30 flex justify-between items-center border-t border-default-medium">
                <button @click="$router.back()" class="text-sm font-medium text-body hover:text-heading transition-colors">Cancel</button>
                <button @click="handleUpdate(user.id)" class="bg-warning hover:bg-warning-strong text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all transform hover:scale-105 shadow-md active:scale-95">
                    Confirm Updates
                </button>
            </div>
        </div>
    </div>
    <div v-else class="flex justify-center items-center h-screen text-body font-medium">
        Loading user for update...
    </div>
</template>
<script>
import { getUserById, updateUser } from '../services/userServices';


    export default {
        name:"UserUpdate",
        data(){
            return{
                user:{},
                isLoading: false,
                updatedUser:{
                    id:"",
                    firstName:"",
                    lastName:"",
                    maidenName:"",
                    age: 31,
                    gender: "",
                    email: "",
                    phone: "",
                    username: "",
                    birthDate: "",
                    image: "",
                    bloodGroup: "",
                    height: 0,
                    weight: 0,
                    address: {
                        address: "",
                        city: "",
                        state: "",
                        country: ""
                    },
                    university: "",
                    company: {
                        department: "",
                        name: "",
                        title: ""
                    }
                }


            }
        },
        async created(){
            try{
                this.isLoading = true;
                const response=await getUserById(this.$route.params.id);
                this.user=response.data;
                this.updatedUser = JSON.parse(JSON.stringify(response.data));
                this.isLoading = false;
            }catch(err){
                console.log(err);
                
            }
        },
        methods:{
            async handleUpdate(id){
                this.updatedUser.id=id;
                await updateUser(id,this.updatedUser);
                console.log('updated');
                this.$router.push(`/userslist/${id}`)

            }
        }
    }
</script>

<style scoped>

</style>