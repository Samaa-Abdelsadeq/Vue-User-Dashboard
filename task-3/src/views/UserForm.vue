<template>
    <div class="flex justify-center items-center p-6 min-h-screen bg-neutral-secondary-light">
        <div class="w-full max-w-2xl bg-white dark:bg-neutral-primary-soft shadow-2xl rounded-2xl overflow-hidden border border-default-medium">
            
            <div class="p-8 bg-gradient-to-b from-neutral-secondary-light/50 to-transparent border-b border-default-soft">
                <div class="flex flex-col items-center text-center">
                    
                    <div class="flex flex-col items-center mb-6">
                        <div class="relative">
                            <img class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg bg-neutral-secondary-medium" 
                                :src="newUser.image || 'https://dummyjson.com/icon/placeholder/150'" alt="Preview"/>
                        </div>
                        <div class="mt-3">
                            <label class="text-[10px] font-bold text-body/40 uppercase block mb-1">Profile Image URL</label>
                            <input type="text" v-model="newUser.image" placeholder="https://example.com/photo.jpg" 
                                class="text-xs w-72 p-2 bg-white border border-default-soft rounded-lg focus:ring-1 focus:ring-brand outline-none text-center placeholder:text-neutral-400/50 shadow-sm" />
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap justify-center gap-2 mb-4">
                        <input v-model="newUser.firstName" placeholder="First Name" class="text-xl font-bold border-b-2 border-transparent focus:border-brand bg-transparent outline-none text-center w-36 placeholder:text-neutral-400/50" />
                        <input v-model="newUser.maidenName" placeholder="Middle Name" class="text-xl font-bold border-b-2 border-transparent focus:border-brand bg-transparent outline-none text-center w-32 placeholder:text-neutral-400/50" />
                        <input v-model="newUser.lastName" placeholder="Last Name" class="text-xl font-bold border-b-2 border-transparent focus:border-brand bg-transparent outline-none text-center w-36 placeholder:text-neutral-400/50" />
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <label class="text-[10px] font-bold text-brand uppercase tracking-widest mb-1">Professional Title</label>
                        <input 
                            v-model="newUser.company.title" 
                            placeholder="e.g. Quality Assurance Engineer" 
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
                            <input v-model="newUser.username" placeholder="johndoe123" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>

                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Birth Date</label>
                            <input v-model="newUser.birthDate" placeholder="YYYY-MM-DD" type="date"
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Gender</label>
                            <select 
                                v-model="newUser.gender" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex flex-col space-y-1">
                                <label class="text-[10px] font-bold text-body/60 uppercase">Age</label>
                                <input type="number" v-model="newUser.age" placeholder="25" 
                                    class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                            </div>
                            <div class="flex flex-col space-y-1">
                                <label class="text-[10px] font-bold text-body/60 uppercase">Blood Group</label>
                                <select 
                                    v-model="newUser.bloodGroup" 
                                    class="text-xs text-danger font-medium bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" >
                                >
                                    <option value="" disabled>Select Blood Group</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-xs font-bold text-body/40 uppercase tracking-widest border-l-2 border-brand pl-2 mb-4">Work & Contact</h3>
                        
                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Department</label>
                            <input v-model="newUser.company.department" placeholder="Engineering" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>

                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">Email Address</label>
                            <input v-model="newUser.email" placeholder="email@example.com" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>

                        <div class="flex flex-col space-y-1">
                            <label class="text-[10px] font-bold text-body/60 uppercase">University</label>
                            <input v-model="newUser.university" placeholder="University Name" 
                                class="text-sm text-heading bg-neutral-secondary-light/30 p-2 rounded border border-transparent focus:border-brand/30 outline-none placeholder:text-neutral-400/50" />
                        </div>
                    </div>
                </div>

                <div class="mt-10 p-5 bg-neutral-secondary-medium/50 rounded-2xl border border-default-medium shadow-inner">
                    <span class="text-[10px] font-bold text-body/60 uppercase tracking-tighter block mb-3">Residential Address</span>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input v-model="newUser.address.address" placeholder="Street Address" class="md:col-span-3 p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                        <input v-model="newUser.address.city" placeholder="City" class="p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                        <input v-model="newUser.address.state" placeholder="State" class="p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                        <input v-model="newUser.address.country" placeholder="Country" class="p-2 text-sm bg-white rounded border border-default-soft outline-none focus:ring-1 focus:ring-brand placeholder:text-neutral-400/50" />
                    </div>
                </div>
            </div>

            <div class="px-8 py-4 bg-neutral-secondary-light/30 flex justify-between items-center border-t border-default-medium">
                <button @click="cancelReroute" class="text-sm font-medium text-body hover:text-heading transition-colors">Cancel</button>
                <button @click="addUserMethod" class="bg-success hover:bg-success-strong text-white px-10 py-2.5 rounded-xl text-sm font-bold transition-all transform hover:scale-105 shadow-md active:scale-95">
                    Save New User
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { addUser } from '../services/userServices';

    export default {
        name:"UserForm",
        data(){
            return{
                isLoading:true,
                newUser:{
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
        methods:{
            async addUserMethod(){
                try{
                    this.isLoading=true;
                    await addUser(this.newUser);
                    this.isLoading=false;
                    this.$router.push(`/userslist`)
                }catch(err){
                    console.log(err);
                    
                }
            },
            cancelReroute(){
                this.$router.push('/userslist')
            }
        }


    }
</script>

<style scoped>

</style>