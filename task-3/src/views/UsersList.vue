<template>
    <div>
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base flex flex-col gap-4">
            <div class="p-5 text-3xl font-medium text-left rtl:text-right text-heading">
                    <h1 class="pb-2">
                    Our Users
                    </h1>
                    <p class="mt-1.5 text-sm font-normal text-body">View, modify, and manage all registered users in one place. Use the table below to browse key details or perform quick administrative actions like editing and deletion.</p>
            </div>
            <!-- search bar -->

            <form @submit.prevent class="flex items-center max-w-xl mx-auto mb-6">   
                <div class="relative w-100 flex items-center bg-neutral-secondary-medium border border-default-medium rounded-base px-3 py-2 focus-within:ring-2 focus-within:ring-brand shadow-xs">
                    
                    <svg class="w-5 h-5 text-body shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                    <input 
                        v-model="search" 
                        type="text" 
                        class="w-full ml-2 bg-transparent border-none text-heading text-sm focus:ring-0 p-0 placeholder:text-body" 
                        placeholder="Search users..." 
                    />
                </div>
            </form>
            <!-- table of users -->
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium text-center border-blue-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Full Name
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Age
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Gender
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Job Title
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="filterUsers.length===0">
                        <td v-if="search===''" colspan="5" class="text-center"> No users founds</td>
                        <td v-else colspan="5" class="text-center"> No users with Name {{ search }} found</td>
                    </tr>
                    <template v-else>
                        <tr v-for="user in filterUsers" :key="user.id"  class="bg-neutral-primary-soft border-b border-default text-center border-blue-400">
                            
                            <td class="px-6 py-4">
                                {{ user.firstName+' '+user.lastName }}
                            </td>
                            <td class="px-6 py-4">
                                {{ user.age }}
                            </td>
                            <td class="px-6 py-4">
                                {{user.gender}}
                            </td>
                            <td class="px-6 py-4">
                                {{user.company?.title}}
                            </td>
                            <td class="px-6 py-4 flex justify-evenly">
                                <button type="button" @click="viewUser(user.id)" class="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">View</button>
                                <button type="button" @click="updatePage(user.id)" class="text-white bg-warning box-border border border-transparent hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Update</button>
                                <button type="button" @click="deleteUser(user.id)" class="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Delete</button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import { getAllUsers } from '../services/userServices';
import {deleteUserAction} from '../composables/userActions'
    export default {
        name:"UsersList",
        data(){
            return{
            users:[],
            isLoading:true,
            search:"",
            }
        },
        async created(){
            try{
                this.isLoading=true;
                const response=await getAllUsers();
                this.users=response.data;
                this.isLoading = false
            }catch(err){
                this.isLoading=false,
                console.log(err);
                
            }
        },
        computed:{
            filterUsers(){
                const searchWord=this.search.toLowerCase()
                return this.users.filter((user)=>(user.firstName.toLowerCase().includes(searchWord) || user.lastName.toLowerCase().includes(searchWord)));
            }
        },
        methods:{
            async deleteUser(id){
                try{
                await deleteUserAction(id);
                this.users=this.users.filter((user)=>user.id!==id)
                }catch(err){
                    console.log(err);
                }
            },
            viewUser(id){
                this.$router.push(`/userslist/${id}`)
            },
            updatePage(id){
                this.$router.push(`/userupdate/${id}`)
            },

            
        }
    }
</script>

<style scoped>

</style>