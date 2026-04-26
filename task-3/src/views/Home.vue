<template>
    <div>
        <section class="relative bg-blue-700 py-20 px-6 text-center text-white h-screen">
        <div class="max-w-3xl mx-auto flex flex-col justify-center items-center h-full gap-4">
            <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
            Manage Your Team with Ease
            </h1>
            <p class="text-lg md:text-xl text-blue-100 mb-10">
            A centralized platform to track, add, and manage user profiles seamlessly. 
            Built for efficiency and modern design.
            </p>
            
            <router-link 
            to="/userform" 
            class="inline-block bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all w-fit"
            >
            + Add New User
            </router-link>
        </div>

        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>