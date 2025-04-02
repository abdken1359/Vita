<template>
    <div>
        <button class=" p-3 hover:bg-red-200 ml-4 dark:hover:bg-neutral-700" @click="toggle()"
        :aria-label="isDark?'Click to enable light mode':'Click to enable dark mode'"
        >
            <Icon :name="isDark?'heroicons:moon-solid':'heroicons:sun-16-solid'" class="text-md"/>

        </button>
    </div>
</template>
<script setup lang="ts">
const isDark=useDark()
const toggle=useToggle(isDark);
</script>