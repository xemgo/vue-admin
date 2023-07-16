<template>
    <div class="flex justify-center align-center">
        <ul class="divide-y divide-gray-200">
            <li v-for="person in people" :key="person.email" class="py-4 flex">
                <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ person.name }}</p>
                    <p class="text-sm text-gray-500">{{ person.email }}</p>
                    <button @click="isActive"
                        class="flex justify-center bg-white text-black text-xs p-1 m-1 border-solid border-2 border-sky-500">OnClick</button>

                </div>
            </li>
        </ul>
        <p>{{ active ? isim : "Değil" }}</p>

    </div>
</template>
 
<script>
const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]


export default {
    setup() {
        return {
            people,
        }
    },
    data() {


        return {

            isim: "Engin",
            active: true

        }
    },

    methods: {
        Change() {
            this.isim = "isim değişti";
        },
        isActive() {
        
            this.active = !this.active;
            console.log(this.active);
        }
    }
}
</script>