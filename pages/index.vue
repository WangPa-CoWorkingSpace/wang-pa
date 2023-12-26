<template>
  <Navbar />

  <div class="min-h-screen">
    <!--Part1 Content -->
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
      <div class="absolute z-0">
        <NuxtImg class="object-contain" preload src="/img/co-work.png" loading="lazy" height="170px" width="130px" />
      </div>
    </div>
    <div class="flex justify-between mt-[30px]">
      <div class="ml-[20px]">
        <NuxtImg preload src="/img/Review.png" loading="lazy" sizes="200px" />
      </div>
    </div>

    <!-- Part2 Content -->
    <div class="flex justify-between items-center mt-[100px] px-[20px]">
      <div>
        <h4 class="font-medium text-[18px]"><i
            class="fas fa-map-marker-alt text-[#F24E1E] text-[20px] pr-2"></i>ใกล้เคียงคุณ</h4>
      </div>
      <div
        class="h-[25px] w-max px-4 border-[2px] border-black rounded-[20px] text-[13px] flex justify-center items-center">
        <h4>ดูทั้งหมด</h4>
      </div>
    </div>

    <!-- Carousel Slider Content -->
    <div class="flex-1 flex items-center justify-center">
      <div class="w-full max-w-[300px] mx-auto px-4 py-8">
        <div class="relative bg-slate-600 rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.25)]"
          style="scroll-snap-type: x mandatory;">
          <div class="flex" style="scroll-snap-align: start;">
            <!-- Slider Item 1 -->
            <div v-for="(slide, index) in slides_near_me" :key="index" class="scroll-snap-center shrink-0 w-full"
              :class="{ 'hidden': index !== currentIndex_near_me }">
              <div class="bg-white rounded-[10px]">
                <NuxtImg class="rounded-t-[10px]" :src="slide.image" :alt="slide.alt" width="300px" height="256px"
                  objectFit='contain' loading="lazy" />
                <div class="p-4">
                  <h1 class="text-gray-900 font-medium text-2xl w-full h-[30px] overflow-hidden">{{ slide.title }}</h1>
                  <h4 class="text-[18px] text-[#1cb7d9]">{{ slide.description }}</h4>
                  <div class="h-[10px] w-full flex text-black/50 space-x-2 mb-5">
                    <i v-for="feature in slide.features" :class="`fas fa-${feature}`" :key="feature"></i>
                  </div>
                  <h4 class="text-[15px] text-black/50">{{ slide.openingHours }}</h4>
                  <div class="flex justify-between items-center mt-[30px]">
                    <div class="text-yellow-400">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                    <div class="h-max w-max bg-[#20DE33] text-white text-[12px] py-[3px] px-[10px] rounded-[20px]">
                      <h4>{{ slide.capacity }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel Controls -->
          <button @click="prevSlide_near_me"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1cb7d9] text-white text-[25px] w-[40px] h-[80px] rounded-full -translate-x-[50px]">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="nextSlide_near_me"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1cb7d9] text-white text-[25px] w-[40px] h-[80px] rounded-full translate-x-[50px]">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Part3 Content -->
    <div class="flex justify-between items-center mt-[100px] px-[20px]">
      <div>
        <h4 class="font-medium text-[18px]"><i class="fas fa-trophy text-yellow-400 text-[20px] pr-2"></i>Top 10</h4>
      </div>
      <div
        class="h-[25px] w-max px-4 border-[2px] border-black rounded-[20px] text-[13px] flex justify-center items-center">
        <h4>ดูทั้งหมด</h4>
      </div>
    </div>

    <!-- Carousel Slider Content -->
    <div class="flex-1 flex items-center justify-center">
      <div class="w-full max-w-[300px] mx-auto px-4 py-8">
        <div class="relative bg-slate-600 rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.25)]"
          style="scroll-snap-type: x mandatory;">
          <div class="flex" style="scroll-snap-align: start;">
            <!-- Slider Item 1 -->
            <div v-for="(slide, index) in slides_top10" :key="index" class="scroll-snap-center shrink-0 w-full"
              :class="{ 'hidden': index !== currentIndex_top10 }">
              <div class="bg-white rounded-[10px]">
                <NuxtImg class="rounded-t-[10px]" :src="slide.image" :alt="slide.alt" width="300px" height="256px"
                  objectFit='contain' loading="lazy" />
                <div class="p-4">
                  <h1 class="text-gray-900 font-medium text-2xl w-full h-[30px] overflow-hidden">{{ slide.title }}</h1>
                  <h4 class="text-[18px] text-[#1cb7d9]">{{ slide.description }}</h4>
                  <div class="h-[10px] w-full flex text-black/50 space-x-2 mb-5">
                    <i v-for="feature in slide.features" :class="`fas fa-${feature}`" :key="feature"></i>
                  </div>
                  <h4 class="text-[15px] text-black/50">{{ slide.openingHours }}</h4>
                  <div class="flex justify-between items-center mt-[30px]">
                    <div class="text-yellow-400">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                    <div class="h-max w-max bg-[#20DE33] text-white text-[12px] py-[3px] px-[10px] rounded-[20px]">
                      <h4>{{ slide.capacity }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel Controls -->
          <button @click="prevSlide_top10"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1cb7d9] text-white text-[25px] w-[40px] h-[80px] rounded-full -translate-x-[50px]">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click="nextSlide_top10"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1cb7d9] text-white text-[25px] w-[40px] h-[80px] rounded-full translate-x-[50px]">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Part4 Content -->
    <div class="px-[20px] mt-[50px]">
      <h1 class="text-[28px] text-black">มีที่ดีๆอยากแชร์เหรอ</h1>
      <h4 class="text-black/50 w-[300px]">ข้อมูลของคุณสำคัญกับเรามาก เราอยากให้เว็บของเราเป็นอีกหนึ่งสังคมที่รวมผู้คนที่ชอบทำงานด้านนอกบ้าน หรือ ออฟฟิศ ได้แชร์ที่นั่งทำงานดีๆให้กัน</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    //Near me
    const currentIndex_near_me = ref(0);
    const slides_near_me = ref([
      {
        image: '/img/mspace.png',
        alt: 'Co-working space',
        title: 'M-Space Major ...',
        description: 'ฟรี',
        features: ['wifi', 'utensils', 'toilet', 'shopping-bag'],
        openingHours: 'เปิดทุกวัน 11:00 - 23:00',
        capacity: 'คาดว่าน้อย'
        // Add other properties as needed for your slide
      },
      {
        image: '/img/co-work.png',
        alt: 'co working space',
        title: 'WTF Space',
        description: '9ล้าน/ชม.',
        features: ['wifi', 'utensils', 'toilet', 'plug'],
        openingHours: 'Opening Hours',
        capacity: 'Capacity Status'
        // Add other properties as needed for your slide
      },
      // Add more slide objects as needed
    ]);

    //Top10
    const currentIndex_top10 = ref(0);
    const slides_top10 = ref([
      {
        image: '/img/mspace.png',
        alt: 'Co-working space',
        title: 'M-Space Major ...',
        description: 'ฟรี',
        features: ['wifi', 'utensils', 'toilet', 'shopping-bag'],
        openingHours: 'เปิดทุกวัน 11:00 - 23:00',
        capacity: 'คาดว่าน้อย'
        // Add other properties as needed for your slide
      },
      {
        image: '/img/co-work.png',
        alt: 'co working space',
        title: 'WTF Space',
        description: '9ล้าน/ชม.',
        features: ['wifi', 'utensils', 'toilet', 'plug'],
        openingHours: 'Opening Hours',
        capacity: 'Capacity Status'
        // Add other properties as needed for your slide
      },
      // Add more slide objects as needed
    ]);

    function nextSlide_near_me() {
      currentIndex_near_me.value = (currentIndex_near_me.value + 1) % slides_near_me.value.length;
    }

    function prevSlide_near_me() {
      currentIndex_near_me.value = (currentIndex_near_me.value - 1 + slides_near_me.value.length) % slides_near_me.value.length;
    }

    function nextSlide_top10() {
      currentIndex_top10.value = (currentIndex_top10.value + 1) % slides_top10.value.length;
    }

    function prevSlide_top10() {
      currentIndex_top10.value = (currentIndex_top10.value - 1 + slides_top10.value.length) % slides_top10.value.length;
    }

    return {
      currentIndex_near_me,
      slides_near_me,
      currentIndex_top10,
      slides_top10,
      nextSlide_near_me,
      prevSlide_near_me,
      nextSlide_top10,
      prevSlide_top10
    };
  },
});
</script>
