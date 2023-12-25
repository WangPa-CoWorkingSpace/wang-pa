<template>
  <Navbar />
  <div class="min-h-screen">
    <div class="ml-[40px]">
      <div class="h-max text-black font-normal pt-[100px]">
        <h1 class="text-[40px]">ว่างปะ ?</h1>
        <h2 class="text-[25px]">อยากได้ที่ว่างๆทำงานอยู่เหรอ?</h2>
      </div>
      <div>
        <button class="w-[190px] h-max px-3 py-[2px] rounded-[20px] text-black/50 border-black/50 border-[1px] mt-3">
          <h4><i class="fad fa-search pr-2"
              style="--fa-primary-color: #1cb7d9; --fa-primary-opacity: 1; --fa-secondary-color: #1cb7d9;"></i>ค้นหาสถานที่ใกล้เคียง
          </h4>
        </button>
      </div>
      <div>
        <button class="w-[190px] h-max px-3 py-[2px] rounded-[20px] border-black border-[1px] mt-3">
          <h4><i class="fas fa-map-marker-alt text-[#F24E1E] pr-2"></i>ช่วยแชร์ที่ดีๆให้คนอื่น
          </h4>
        </button>
      </div>
    </div>
    <div class="flex justify-end mr-[10px]">
      <div class="absolute">
        <NuxtImg src="/img/co-work.png" sizes="170px" />
      </div>
    </div>
    <div class="flex justify-between mt-[30px]">
      <div class="ml-[20px]">
        <NuxtImg src="/img/Review.png" sizes="200px" />
      </div>
    </div>
  </div>
</template>