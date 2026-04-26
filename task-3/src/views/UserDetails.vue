<template>
    <div class="flex justify-center items-center p-6 min-h-screen bg-neutral-secondary-light">
        <div v-if="deleted" class="flex justify-center items-center h-screen">
            <p> User Deleted...</p>
        </div>
        <div v-else-if="isLoading" class="flex justify-center items-center h-screen">
            <p>Loading User Data...</p>
        </div>
        <div v-else-if=" user.id" class="w-full max-w-2xl bg-white dark:bg-neutral-primary-soft shadow-xl rounded-2xl overflow-hidden border border-default-medium">
        
        <div class="p-4 flex justify-between items-center border-b border-default-medium">
            <button @click="usersListReroute" class="flex items-center gap-2 text-body hover:text-brand transition-all font-medium group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
            </button>
            <div class="flex gap-2">
                <button @click="updatePage(user.id)" class="bg-warning hover:bg-warning-strong text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Update</button>
                <button @click="deleteUser(user.id)" class="bg-danger hover:bg-danger-strong text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Delete</button>
            </div>
        </div>

        <div class="p-8">
            <div class="flex flex-col items-center text-center mb-8">
                <div class="relative">
                    <img class="w-32 h-32 rounded-full object-cover border-4 border-brand/10 shadow-md" :src="user.image" alt="Profile image"/>
                </div>
                <h5 class="mt-4 text-2xl font-bold tracking-tight text-heading">{{ user.firstName }} {{ user.maidenName }} {{ user.lastName }}</h5>
                <span class="px-3 py-1 mt-2 text-xs font-semibold text-brand bg-brand/10 rounded-full uppercase tracking-wider">{{ user.company.title }}</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 border-t border-default-medium pt-8">
            
                <div class="space-y-3">
                    <h3 class="text-xs font-bold text-body/50 uppercase tracking-widest mb-4">Personal Details</h3>
                    <div class="flex justify-between border-b border-default-soft pb-1">
                        <span class="text-body font-medium">User ID</span>
                        <span class="text-heading">#{{ user.id }}</span>
                    </div>
                    <div class="flex justify-between border-b border-default-soft pb-1">
                        <span class="text-body font-medium">Age / Gender</span>
                        <span class="text-heading">{{ user.age }} / {{ user.gender }}</span>
                    </div>
                    <div class="flex justify-between border-b border-default-soft pb-1">
                        <span class="text-body font-medium">Birthday</span>
                        <span class="text-heading">{{ user.birthDate }}</span>
                    </div>
                    <div class="flex justify-between border-b border-default-soft pb-1">
                        <span class="text-body font-medium">Blood Group</span>
                        <span class="text-heading text-danger font-bold">{{ user.bloodGroup }}</span>
                    </div>
                </div>

                <div class="space-y-3">
                    <h3 class="text-xs font-bold text-body/50 uppercase tracking-widest mb-4">Contact & Education</h3>
                    <div class="flex flex-col">
                        <span class="text-xs text-body font-medium">Email Address</span>
                        <span class="text-heading truncate">{{ user.email }}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs text-body font-medium">Company</span>
                        <span class="text-heading">{{ user.company.name }}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs text-body font-medium">University</span>
                        <span class="text-heading truncate">{{ user.university }}</span>
                    </div>
                </div>
            </div>
            <div class="mt-8 p-4 bg-neutral-secondary-medium rounded-xl border border-default-medium">
                <span class="text-xs font-bold text-body/50 uppercase tracking-widest block mb-1">Physical Address</span>
                <p class="text-heading text-sm">{{ user.address.address }}, {{ user.address.city }}, {{ user.address.state }}, {{ user.address.country }}</p>
            </div>
        </div>
        </div>


    </div>
</template>

<script>
import { getUserById } from '../services/userServices';
import {deleteUserAction} from '../composables/userActions'

    export default {
        name:"UserDetails",
        data(){
            return{
                user:{},
                isLoading:true,
                deleted:false
            }
        },
        async created(){
            try{
                this.isLoading = true;
                const reponse=await getUserById(this.$route.params.id);
                this.user=reponse.data;
                this.isLoading = false;
            }catch(err){
                console.log(err);
                
            }
        },
        methods:{
            async deleteUser(id){
                try{
                    await deleteUserAction(id);
                    this.deleted=true;
                    this.rerouteFunc();
                
                }catch(err){
                    console.log(err);
                }
            },
            rerouteFunc(){
                setTimeout(()=>
                    this.$router.push('/userslist')
                ,3000)
            },
            updatePage(id){
                this.$router.push(`/userupdate/${id}`)
            },
            usersListReroute(){
                this.$router.push('/userslist')
            }
            
        }
    }
</script>

<style scoped>

</style>