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
          <button @click.prevent="prevSlide_near_me"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1cb7d9] text-white text-[25px] w-[40px] h-[80px] rounded-full -translate-x-[50px]">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click.prevent="nextSlide_near_me"
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
          <button @click.prevent="prevSlide_top10"
            class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1cb7d9] text-white text-[25px] w-[40px] h-[80px] rounded-full -translate-x-[50px]">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button @click.prevent="nextSlide_top10"
            class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1cb7d9] text-white text-[25px] w-[40px] h-[80px] rounded-full translate-x-[50px]">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Part4 Content -->
    <div class="px-[20px] mt-[50px]">
      <h1 class="text-[28px] text-black">มีที่ดีๆอยากแชร์เหรอ</h1>
      <h4 class="text-black/50 w-[300px]">ข้อมูลของคุณสำคัญกับเรามาก
        เราอยากให้เว็บของเราเป็นอีกหนึ่งสังคมที่รวมผู้คนที่ชอบทำงานด้านนอกบ้าน หรือ ออฟฟิศ ได้แชร์ที่นั่งทำงานดีๆให้กัน
      </h4>
    </div>

    <div id="layout" class="px-[20px] mt-[50px]">
      <Map />
    </div>

    <div class="flex justify-between items-center px-[20px] mt-[30px] space-x-2 overflow-x-hidden">
      <button class="border-[2px] border-black/50 rounded-full" @click.prevent="openFileDialog">
        <i class="fas fa-images text-black/50 p-2"></i>
      </button>
      <!-- Hidden file input -->
      <input class="hidden" type="file" ref="fileInput" @change="handleFileChange" accept="image/*" multiple>


      <input
        class="border-[2px] border-black/50 rounded-[20px] px-2 py-1 w-[55%] placeholder:text-black/50 placeholder:text-[16px] focus:outline-none"
        placeholder="ชื่อ" v-model="cws_name_form" @input="Form_Update('name')">
      <input
        class="border-[2px] border-black/50 rounded-[20px] px-2 py-1 w-[30%] placeholder:text-black/50 placeholder:text-[16px] focus:outline-none"
        placeholder="ราคา" v-model="cws_price_form">
    </div>
    <div class="px-[20px] mt-[20px]">
      <input
        class="border-[2px] border-black/50 rounded-[20px] px-2 pb-[100px] py-1 min-h-[150px] min-w-full placeholder:text-black/50 placeholder:text-[16px] focus:outline-none"
        placeholder="เขียนรีวิวและบรรยายบรรยากาศ" v-model="cws_review_form">
    </div>

    <!-- Facilities Form -->
    <h4 class="px-[20px] mt-[20px] text-black/50 text-[16px]">สิ่งอำนวยความสะดวก</h4>
    <div class="flex justify-between items-center w-[70vw] px-[20px] mt-[10px] overflow-x-scroll">
      <!-- Utensils -->
      <div class="space-x-[15px]">
        <i class="fal fa-utensils text-[20px] text-black/50 max-w-[15px]"></i>
        <button class="text-[20px] text-black/50"
          :class="{ 'fas fa-check-square': utensils_check, 'far fa-square': !utensils_check }"
          @click.prevent="Facilities_Check('utensils')"></button>
      </div>
      <!-- Restroom -->
      <div class="space-x-[15px]">
        <i class="fal fa-restroom text-[20px] text-black/50 max-w-[15px]"></i>
        <button class="text-[20px] text-black/50"
          :class="{ 'fas fa-check-square': restroom_check, 'far fa-square': !restroom_check }"
          @click.prevent="Facilities_Check('restroom')"></button>
      </div>
      <!-- Shopping -->
      <div class="space-x-[15px]">
        <i class="fal fa-shopping-cart text-[20px] text-black/50 max-w-[15px]"></i>
        <button class="text-[20px] text-black/50"
          :class="{ 'fas fa-check-square': shopping_check, 'far fa-square': !shopping_check }"
          @click.prevent="Facilities_Check('shopping')"></button>
      </div>
    </div>

    <div class="flex justify-between items-center w-[70vw] px-[20px] mt-[10px] overflow-x-scroll">
      <!-- WiFi -->
      <div class="space-x-[15px]">
        <i class="far fa-wifi text-[20px] text-black/50 max-w-[15px]"></i>
        <button class="text-[20px] text-black/50"
          :class="{ 'fas fa-check-square': wifi_check, 'far fa-square': !wifi_check }"
          @click.prevent="Facilities_Check('wifi')"></button>
      </div>
      <!-- Outlet -->
      <div class="space-x-[15px]">
        <i class="far fa-outlet text-[20px] text-black/50 max-w-[15px]"></i>
        <button class="text-[20px] text-black/50"
          :class="{ 'fas fa-check-square': outlet_check, 'far fa-square': !outlet_check }"
          @click.prevent="Facilities_Check('outlet')"></button>
      </div>
      <!-- Air Conditioning -->
      <div class="space-x-[15px]">
        <i class="fal fa-air-conditioner text-[20px] text-black/50 max-w-[15px]"></i>
        <button class="text-[20px] text-black/50"
          :class="{ 'fas fa-check-square': air_check, 'far fa-square': !air_check }"
          @click.prevent="Facilities_Check('air')"></button>
      </div>
    </div>

    <!-- Time Form -->
    <h4 class="px-[20px] mt-[20px] text-black/50 text-[16px]">เวลาทำการ</h4>
    <!-- Open Time -->
    <div class="flex items-center px-[20px] mt-[10px] space-x-[20px]">
      <div class="w-[15px]">
        <h4 class="text-black/50 text-[16px]">อา.</h4>
      </div>
      <button class="fas fa-toggle-on text-[#1cb7d9] text-[25px]"></button>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
      <h4>-</h4>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
    </div>
    <div class="flex items-center px-[20px] mt-[10px] space-x-[20px]">
      <div class="w-[15px]">
        <h4 class="text-black/50 text-[16px]">จ.</h4>
      </div>
      <button class="fas fa-toggle-on text-[#1cb7d9] text-[25px]"></button>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
      <h4>-</h4>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
    </div>
    <div class="flex items-center px-[20px] mt-[10px] space-x-[20px]">
      <div class="w-[15px]">
        <h4 class="text-black/50 text-[16px]">อ.</h4>
      </div>
      <button class="fas fa-toggle-on text-[#1cb7d9] text-[25px]"></button>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
      <h4>-</h4>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
    </div>
    <div class="flex items-center px-[20px] mt-[10px] space-x-[20px]">
      <div class="w-[15px]">
        <h4 class="text-black/50 text-[16px]">พ.</h4>
      </div>
      <button class="fas fa-toggle-on text-[#1cb7d9] text-[25px]"></button>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
      <h4>-</h4>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
    </div>
    <div class="flex items-center px-[20px] mt-[10px] space-x-[20px]">
      <div class="w-[15px]">
        <h4 class="text-black/50 text-[16px]">พฤ.</h4>
      </div>
      <button class="fas fa-toggle-on text-[#1cb7d9] text-[25px]"></button>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
      <h4>-</h4>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
    </div>
    <div class="flex items-center px-[20px] mt-[10px] space-x-[20px]">
      <div class="w-[15px]">
        <h4 class="text-black/50 text-[16px]">ศ.</h4>
      </div>
      <button class="fas fa-toggle-on text-[#1cb7d9] text-[25px]"></button>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
      <h4>-</h4>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
    </div>
    <div class="flex items-center px-[20px] mt-[10px] space-x-[20px]">
      <div class="w-[15px]">
        <h4 class="text-black/50 text-[16px]">ส.</h4>
      </div>
      <button class="fas fa-toggle-on text-[#1cb7d9] text-[25px]"></button>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
      <h4>-</h4>
      <VueDatePicker class="max-w-[30vw]" v-model="time" time-picker @update:model-value="openTime">
        <template #trigger>
          <div
            class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
            00:00</div>
        </template>
      </VueDatePicker>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Map from '../components/MapPin.vue';
import "../node_modules/mapbox-gl/dist/mapbox-gl.css"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Cookies from 'js-cookie';

export default defineComponent({
  components: {
    Map,
    VueDatePicker
  },
  data() {
    return {
      //Data Out
    };
  },
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

    const fileInput = ref<HTMLInputElement | null>(null);

    const openFileDialog = () => {
      fileInput.value?.click();
    };

    const handleFileChange = (event: Event) => {
      const files = (event.target as HTMLInputElement).files;
      if (!files || files.length === 0) {
        // console.log('No file selected.');
        return;
      }
      const file = files[0];
      if (file.size > 2097152) {
        alert("Too large file. Limit 2MB");
      }
      // Process the selected file
      // console.log('Selected file:', file);
    };

    const cws_name_form = ref('')
    const cws_price_form = ref(0.0)
    const cws_review_form = ref('')
    //Form Update
    function Form_Update(input_name: string) {
      console.log(cws_name_form);

      switch (input_name) {
        case 'name':
          Cookies.set('cws_name_form_Cookie', cws_name_form);
          break
      }
    }

    //Facilities Form Check
    const utensils_check = ref(false);
    const restroom_check = ref(false);
    const shopping_check = ref(false);
    const wifi_check = ref(false);
    const outlet_check = ref(false);
    const air_check = ref(false);

    function Facilities_Check(facilitie: string) {
      switch (facilitie) {
        case 'utensils':
          utensils_check.value = !utensils_check.value;
          break;
        case 'restroom':
          restroom_check.value = !restroom_check.value;
          break;
        case 'shopping':
          shopping_check.value = !shopping_check.value;
          break;
        case 'wifi':
          wifi_check.value = !wifi_check.value;
          break;
        case 'outlet':
          outlet_check.value = !outlet_check.value;
          break;
        case 'air':
          air_check.value = !air_check.value;
          break;
        default:
          // Optionally handle an unknown facility
          console.warn("Unknown facility:", facilitie);
      }
    }

    //Time Picker
    const time = ref({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
    });

    const openTime = () => {
      console.log(time.value);
    }

    return {
      currentIndex_near_me,
      slides_near_me,
      currentIndex_top10,
      slides_top10,
      nextSlide_near_me,
      prevSlide_near_me,
      nextSlide_top10,
      prevSlide_top10,

      fileInput,
      openFileDialog,
      handleFileChange,

      //form data
      Form_Update,
      cws_name_form,
      cws_price_form,
      cws_review_form,

      // Facilities Check Function and Reactive References
      Facilities_Check,
      utensils_check,
      restroom_check,
      shopping_check,
      wifi_check,
      outlet_check,
      air_check,

      //Time Picker
      time,
      openTime
    };
  },
});
</script>