<template>
    <div class="w-max">
        <img class="rounded-full w-[50px] h-[50px] flex justify-center" src="/img/mspace.png" alt="${dataItem.cws_name}">
        <p class="text-black text-[14px] font-medium flex justify-center">ฟรี</p>
    </div>
    <div class="w-[300px] h-[500px] bg-slate-500">
        <div class="flex justify-center items-center space-x-[5px]">
            <button class="text-white px-2 rounded-[20px] w-[70px] flex justify-center items-center" :class="{'bg-black/20': currentPopupMenu == 'img'}" @click.prevent="PopupMenuBTN('img')">
                <h4>รูปภาพ</h4>
            </button>
            <button class="text-white px-2 rounded-[20px] w-[70px] flex justify-center items-center" :class="{'bg-black/20': currentPopupMenu == 'review'}" @click.prevent="PopupMenuBTN('review')">
                <h4>รีวิว</h4>
            </button>
        </div>
        <div class="" :class="{'hidden': currentPopupMenu !== 'img'}" >This's รูป</div>
        <div class="" :class="{'hidden': currentPopupMenu !== 'review'}">This's รีวิว</div>
    </div>
</template>

<script setup lang="ts">
    let currentPopupMenu = ref('img');

    function PopupMenuBTN(menu: string) {
        currentPopupMenu.value = menu
    }
</script>