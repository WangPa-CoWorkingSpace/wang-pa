<template>
  <Navbar />

  <div class="min-h-screen main-gardient">
    <!--Part1 Content -->
    <div class="mx-[40px] lg:mx-[100px] 2xl:mx-[200px]">
      <div class="h-max text-black font-normal pt-[100px]">
        <h1 class="text-[40px] xl:text-[60px]">ว่างปะ ?</h1>
        <h2 class="text-[25px] xl:text-[37px]">อยากได้ที่ว่างๆทำงานอยู่เหรอ?</h2>
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
    <div
      class="flex justify-end mr-[10px] translate-y-[-40px] sm:translate-y-[-115px] sm:mr-[50px] lg:translate-y-[-150px] lg:mr-[70px] 2xl:translate-y-[-220px] 2xl:mr-[200px]">
      <div class="absolute z-0">
        <NuxtImg class="object-contain w-[170px] sm:w-[231px] lg:w-[320px] 2xl:w-[400px]" src="/img/co-work.png" />
      </div>
    </div>
    <div class="flex justify-between mt-[30px]">
      <div class="mx-[20px] sm:mx-[45px] lg:mx-[100px] 2xl:mx-[200px]">
        <NuxtImg class="w-[200px] sm:w-[200px] lg:w-[310px]" src="/img/Review.png" />
      </div>
    </div>

    <!-- Part2 Content -->
    <div class="flex justify-between items-center mt-[100px] px-[20px] xl:mt-[150px] xl:px-[40px] 2xl:px-[150px]">
      <div>
        <h4 class="font-medium text-[18px] xl:text-[24px]"><i
            class="fas fa-map-marker-alt text-[#F24E1E] text-[20px] pr-2 xl:text-[26px]"></i>ใกล้เคียงคุณ</h4>
      </div>
      <div
        class="h-[25px] w-max px-4 border-[2px] border-black rounded-[20px] text-[13px] flex justify-center items-center xl:text-[17px]">
        <h4>ดูทั้งหมด</h4>
      </div>
    </div>

    <!-- Carousel Slider Content Mobile-->
    <Carousel class="xl:hidden select-none" :itemsToShow="1" :wrapAround="true" :transition="500">
      <Slide v-for="(slide, index) in slides_data_near_me" :key="index">
        <div class="carousel__item py-8 w-[270px]">
          <div class="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.25)]">
            <NuxtImg class="rounded-t-[10px]" :src="slide.image" :alt="slide.title" width="300px" height="256px"
              objectFit='contain' loading="lazy" />
            <div class="p-4">
              <h1 class="text-black font-medium text-[20px] text-left w-full h-[30px] overflow-hidden">{{ slide.title }}
              </h1>
              <h4 class="text-[18px] text-left text-[#1cb7d9]">{{ slide.price }}</h4>
              <div class="h-[10px] w-full flex text-black/50 space-x-2 mb-5">
                <i v-for="feature in slide.features" :class="`fas fa-${feature}`" :key="feature"></i>
              </div>
              <h4 class="text-[15px] text-left text-black/50">{{ slide.openingHours }}</h4>
              <div class="flex justify-between items-center mt-[30px]">
                <div class="text-yellow-400">
                  <i v-for="star in slide.stars" :key="star" :class="`${star} fa-star`"></i>
                </div>
                <div class="h-max w-max bg-[#20DE33] text-white text-[12px] py-[3px] px-[10px] rounded-[20px]">
                  <h4>{{ slide.capacity }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <!-- Carousel Slider Content Desktop-->
    <div class="2xl:mx-[200px]">
      <Carousel class="hidden xl:block select-none" ref="near_me_slideLG" :itemsToShow="3" :wrapAround="true"
        :transition="500">
        <Slide v-for="(slide, index) in slides_data_near_me" :key="index">
          <div class="carousel__item py-8 w-[270px]">
            <div class="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.25)]">
              <NuxtImg class="rounded-t-[10px]" :src="slide.image" :alt="slide.title" width="300px" height="256px"
                objectFit='contain' loading="lazy" />
              <div class="p-4">
                <h1 class="text-black font-medium text-[20px] text-left w-full h-[30px] overflow-hidden">{{ slide.title }}
                </h1>
                <h4 class="text-[18px] text-left text-[#1cb7d9]">{{ slide.price }}</h4>
                <div class="h-[10px] w-full flex text-black/50 space-x-2 mb-5">
                  <i v-for="feature in slide.features" :class="`fas fa-${feature}`" :key="feature"></i>
                </div>
                <h4 class="text-[15px] text-left text-black/50">{{ slide.openingHours }}</h4>
                <div class="flex justify-between items-center mt-[30px]">
                  <div class="text-yellow-400">
                    <i v-for="star in slide.stars" :key="star" :class="`${star} fa-star`"></i>
                  </div>
                  <div class="h-max w-max bg-[#20DE33] text-white text-[12px] py-[3px] px-[10px] rounded-[20px]">
                    <h4>{{ slide.capacity }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="justify-center items-center space-x-[100px] hidden xl:flex">
      <button class="fad fa-arrow-circle-left text-[35px] hover:scale-[120%] transition-all duration-300"
        @click.prevent="NearMeSlideBTN('prev')"
        style="--fa-primary-color: #ffffff; --fa-secondary-color: #1cb7d9; --fa-secondary-opacity: 1;"></button>
      <button class="fad fa-arrow-circle-right text-[35px] hover:scale-[120%] transition-all duration-300"
        @click.prevent="NearMeSlideBTN('next')"
        style="--fa-primary-color: #ffffff; --fa-secondary-color: #1cb7d9; --fa-secondary-opacity: 1;"></button>
    </div>

    <!-- Part3 Content -->
    <div class="flex justify-between items-center mt-[100px] px-[20px] xl:px-[40px] 2xl:px-[150px]">
      <div>
        <h4 class="font-medium text-[18px] xl:text-[24px]"><i
            class="fas fa-trophy text-yellow-400 text-[20px] pr-2 xl:text-[26px]"></i>Top 10</h4>
      </div>
      <div
        class="h-[25px] w-max px-4 border-[2px] border-black rounded-[20px] text-[13px] flex justify-center items-center xl:text-[17px]">
        <h4>ดูทั้งหมด</h4>
      </div>
    </div>

    <!-- Carousel Slider Content Mobile-->
    <Carousel class="xl:hidden select-none" :itemsToShow="1" :wrapAround="true" :transition="500">
      <Slide v-for="(slide, index) in slides_data_top10" :key="index">
        <div class="carousel__item py-8 w-[270px]">
          <div class="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.25)]">
            <NuxtImg class="rounded-t-[10px]" :src="slide.image" :alt="slide.title" width="300px" height="256px"
              objectFit='contain' loading="lazy" />
            <div class="p-4">
              <h1 class="text-black font-medium text-[20px] text-left w-full h-[30px] overflow-hidden">{{ slide.title }}
              </h1>
              <h4 class="text-[18px] text-left text-[#1cb7d9]">{{ slide.price }}</h4>
              <div class="h-[10px] w-full flex text-black/50 space-x-2 mb-5">
                <i v-for="feature in slide.features" :class="`fas fa-${feature}`" :key="feature"></i>
              </div>
              <h4 class="text-[15px] text-left text-black/50">{{ slide.openingHours }}</h4>
              <div class="flex justify-between items-center mt-[30px]">
                <div class="text-yellow-400">
                  <i v-for="star in slide.stars" :key="star" :class="`${star} fa-star`"></i>
                </div>
                <div class="h-max w-max bg-[#20DE33] text-white text-[12px] py-[3px] px-[10px] rounded-[20px]">
                  <h4>{{ slide.capacity }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
    <!-- Carousel Slider Content Desktop-->
    <div class="2xl:mx-[200px]">
      <Carousel class="hidden xl:block select-none" ref="top10_slideLG" :itemsToShow="3" :wrapAround="true"
        :transition="500">
        <Slide v-for="(slide, index) in slides_data_top10" :key="index">
          <div class="carousel__item py-8 w-[270px]">
            <div class="bg-white rounded-[10px] shadow-[0_0_20px_0_rgba(0,0,0,0.25)]">
              <NuxtImg class="rounded-t-[10px]" :src="slide.image" :alt="slide.title" width="300px" height="256px"
                objectFit='contain' loading="lazy" />
              <div class="p-4">
                <h1 class="text-black font-medium text-[20px] text-left w-full h-[30px] overflow-hidden">{{ slide.title }}
                </h1>
                <h4 class="text-[18px] text-left text-[#1cb7d9]">{{ slide.price }}</h4>
                <div class="h-[10px] w-full flex text-black/50 space-x-2 mb-5">
                  <i v-for="feature in slide.features" :class="`fas fa-${feature}`" :key="feature"></i>
                </div>
                <h4 class="text-[15px] text-left text-black/50">{{ slide.openingHours }}</h4>
                <div class="flex justify-between items-center mt-[30px]">
                  <div class="text-yellow-400">
                    <i v-for="star in slide.stars" :key="star" :class="`${star} fa-star`"></i>
                  </div>
                  <div class="h-max w-max bg-[#20DE33] text-white text-[12px] py-[3px] px-[10px] rounded-[20px]">
                    <h4>{{ slide.capacity }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="justify-center items-center space-x-[100px] hidden xl:flex">
      <button class="fad fa-arrow-circle-left text-[35px] hover:scale-[120%] transition-all duration-300"
        @click.prevent="Top10SlideBTN('prev')"
        style="--fa-primary-color: #ffffff; --fa-secondary-color: #1cb7d9; --fa-secondary-opacity: 1;"></button>
      <button class="fad fa-arrow-circle-right text-[35px] hover:scale-[120%] transition-all duration-300"
        @click.prevent="Top10SlideBTN('next')"
        style="--fa-primary-color: #ffffff; --fa-secondary-color: #1cb7d9; --fa-secondary-opacity: 1;"></button>
    </div>

    <!-- Part4 Content -->
    <div class="px-[20px] mt-[50px] xl:px-[40px] 2xl:px-[200px]">
      <h1 class="text-[24px] text-black xl:text-[37px]">มีที่ดีๆอยากแชร์เหรอ?</h1>
      <h4 class="text-black/50 w-[300px] xl:text-[22px] xl:w-[500px]">ข้อมูลของคุณสำคัญกับเรามาก
        เราอยากให้เว็บของเราเป็นอีกหนึ่งสังคมที่รวมผู้คนที่ชอบทำงานด้านนอกบ้าน หรือ ออฟฟิศ ได้แชร์ที่นั่งทำงานดีๆให้กัน
      </h4>
    </div>

    <div id="layout" class="px-[20px] mt-[50px] xl:px-[40px] 2xl:px-[200px]">
      <Map />
    </div>

    <div
      class="flex justify-between items-center px-[20px] mt-[30px] space-x-2 overflow-x-hidden xl:px-[40px] xl:justify-start xl:overflow-visible 2xl:px-[200px]">
      <button class="border-[2px] border-black/50 rounded-full" @click.prevent="openImageDialog">
        <i class="fas text-black/50 w-[32px] h-[32px] p-2"
          :class="{ 'fa-images': !isImgUp, 'fa-file-check': isImgUp }"></i>
      </button>
      <!-- Hidden file input -->
      <input class="hidden" type="file" ref="imageInput" @change="handleImageChange" accept="image/*" multiple>


      <input
        class="border-[2px] border-black/50 rounded-[20px] px-2 py-1 w-[55%] placeholder:text-black/50 placeholder:text-[16px] focus:outline-none xl:max-w-[300px]"
        placeholder="ชื่อ" v-model="cws_name_form" @input="Form_Update('name')">
      <input
        class="border-[2px] border-black/50 rounded-[20px] px-2 py-1 w-[30%] placeholder:text-black/50 placeholder:text-[16px] focus:outline-none xl:max-w-[100px]"
        placeholder="ราคา" v-model="cws_price_form" @input="Form_Update('price')">


      <div class="hidden xl:block w-[460px] translate-y-[25px] xl:px-[40px]">
        <h4 class="px-[20px] mt-[20px] text-black/50 text-[16px]">สิ่งอำนวยความสะดวก</h4>
        <div class="flex justify-between items-center w-[300px] px-[20px] mt-[10px]">
          <!-- Utensils -->
          <div class="space-x-[15px]">
            <i class="fal fa-utensils text-[20px] text-black/50 max-w-[15px]"></i>
            <button class="text-[20px] text-[#1cb7d9]"
              :class="{ 'fas fa-check-square': utensils_check, 'far fa-square': !utensils_check }"
              @click.prevent="Facilities_Check('utensils')"></button>
          </div>
          <!-- Restroom -->
          <div class="space-x-[15px]">
            <i class="fal fa-restroom text-[20px] text-black/50 max-w-[15px]"></i>
            <button class="text-[20px] text-[#1cb7d9]"
              :class="{ 'fas fa-check-square': restroom_check, 'far fa-square': !restroom_check }"
              @click.prevent="Facilities_Check('restroom')"></button>
          </div>
          <!-- Shopping -->
          <div class="space-x-[15px]">
            <i class="fal fa-shopping-cart text-[20px] text-black/50 max-w-[15px]"></i>
            <button class="text-[20px] text-[#1cb7d9]"
              :class="{ 'fas fa-check-square': shopping_check, 'far fa-square': !shopping_check }"
              @click.prevent="Facilities_Check('shopping')"></button>
          </div>
        </div>

        <div class="flex justify-between items-center w-[300px] px-[20px] mt-[10px]">
          <!-- WiFi -->
          <div class="space-x-[15px]">
            <i class="far fa-wifi text-[20px] text-black/50 max-w-[15px]"></i>
            <button class="text-[20px] text-[#1cb7d9]"
              :class="{ 'fas fa-check-square': wifi_check, 'far fa-square': !wifi_check }"
              @click.prevent="Facilities_Check('wifi')"></button>
          </div>
          <!-- Outlet -->
          <div class="space-x-[15px]">
            <i class="far fa-outlet text-[20px] text-black/50 max-w-[15px]"></i>
            <button class="text-[20px] text-[#1cb7d9]"
              :class="{ 'fas fa-check-square': outlet_check, 'far fa-square': !outlet_check }"
              @click.prevent="Facilities_Check('outlet')"></button>
          </div>
          <!-- Air Conditioning -->
          <div class="space-x-[15px]">
            <i class="fal fa-air-conditioner text-[20px] text-black/50 max-w-[15px]"></i>
            <button class="text-[20px] text-[#1cb7d9]"
              :class="{ 'fas fa-check-square': air_check, 'far fa-square': !air_check }"
              @click.prevent="Facilities_Check('air')"></button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-[20px] mt-[20px] xl:w-[460px] xl:px-[40px] xl:mt-0 xl:translate-y-[-20px] 2xl:px-[200px]">
      <input
        class="border-[2px] border-black/50 rounded-[20px] px-2 pb-[100px] py-1 min-h-[150px] w-full placeholder:text-black/50 placeholder:text-[16px] focus:outline-none xl:w-[460px]"
        placeholder="เขียนรีวิวและบรรยายบรรยากาศ" v-model="cws_review_form" @input="Form_Update('review')">
    </div>

    <!-- Facilities Form -->
    <div class="xl:hidden">
      <h4 class="px-[20px] mt-[20px] text-black/50 text-[16px]">สิ่งอำนวยความสะดวก</h4>
      <div class="flex justify-between items-center w-[70vw] px-[20px] mt-[10px]">
        <!-- Utensils -->
        <div class="space-x-[15px]">
          <i class="fal fa-utensils text-[20px] text-black/50 max-w-[15px]"></i>
          <button class="text-[20px] text-[#1cb7d9]"
            :class="{ 'fas fa-check-square': utensils_check, 'far fa-square': !utensils_check }"
            @click.prevent="Facilities_Check('utensils')"></button>
        </div>
        <!-- Restroom -->
        <div class="space-x-[15px]">
          <i class="fal fa-restroom text-[20px] text-black/50 max-w-[15px]"></i>
          <button class="text-[20px] text-[#1cb7d9]"
            :class="{ 'fas fa-check-square': restroom_check, 'far fa-square': !restroom_check }"
            @click.prevent="Facilities_Check('restroom')"></button>
        </div>
        <!-- Shopping -->
        <div class="space-x-[15px]">
          <i class="fal fa-shopping-cart text-[20px] text-black/50 max-w-[15px]"></i>
          <button class="text-[20px] text-[#1cb7d9]"
            :class="{ 'fas fa-check-square': shopping_check, 'far fa-square': !shopping_check }"
            @click.prevent="Facilities_Check('shopping')"></button>
        </div>
      </div>

      <div class="flex justify-between items-center w-[70vw] px-[20px] mt-[10px]">
        <!-- WiFi -->
        <div class="space-x-[15px]">
          <i class="far fa-wifi text-[20px] text-black/50 max-w-[15px]"></i>
          <button class="text-[20px] text-[#1cb7d9]"
            :class="{ 'fas fa-check-square': wifi_check, 'far fa-square': !wifi_check }"
            @click.prevent="Facilities_Check('wifi')"></button>
        </div>
        <!-- Outlet -->
        <div class="space-x-[15px]">
          <i class="far fa-outlet text-[20px] text-black/50 max-w-[15px]"></i>
          <button class="text-[20px] text-[#1cb7d9]"
            :class="{ 'fas fa-check-square': outlet_check, 'far fa-square': !outlet_check }"
            @click.prevent="Facilities_Check('outlet')"></button>
        </div>
        <!-- Air Conditioning -->
        <div class="space-x-[15px]">
          <i class="fal fa-air-conditioner text-[20px] text-black/50 max-w-[15px]"></i>
          <button class="text-[20px] text-[#1cb7d9]"
            :class="{ 'fas fa-check-square': air_check, 'far fa-square': !air_check }"
            @click.prevent="Facilities_Check('air')"></button>
        </div>
      </div>
    </div>

    <!-- Time Form -->
    <h4 class="px-[20px] mt-[20px] text-black/50 text-[16px] xl:px-[40px] 2xl:px-[200px]">เวลาทำการ</h4>
    <!-- Open Time -->
    <div class="px-[20px] xl:px-[40px] 2xl:px-[200px]">
      <div class="flex items-center mt-[10px] space-x-[20px]">
        <div class="w-[10px]">
          <h4 class="text-black/50 text-[16px] xl:hidden">อา.</h4>
          <h4 class="text-black/50 text-[16px] hidden xl:block">อาทิตย์</h4>
        </div>
        <button class="fas text-[25px] xl:pl-[50px]" @click.prevent="dayToggle_BTN('sunday', openDateTime[0].sunday.open)"
          :class="{ 'fa-toggle-on text-[#1cb7d9]': openDateTime[0].sunday.open, 'fa-toggle-off text-black/50': !openDateTime[0].sunday.open }"></button>
        <div class="hidden xl:block w-[30px]">
          <h4 class="text-[16px] text-[#1cb7d9]" :class="{ 'hidden': !openDateTime[0].sunday.open }">เปิด</h4>
          <h4 class="text-[16px] text-black/50" :class="{ 'hidden': openDateTime[0].sunday.open }">ปิด</h4>
        </div>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('sunday', 'open', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].sunday.openTime}` }}</div>
          </template>
        </VueDatePicker>
        <h4>-</h4>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('sunday', 'close', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].sunday.closeTime}` }}</div>
          </template>
        </VueDatePicker>
      </div>
      <div class="flex items-center mt-[10px] space-x-[20px]">
        <div class="w-[10px]">
          <h4 class="text-black/50 text-[16px] xl:hidden">จ.</h4>
          <h4 class="text-black/50 text-[16px] hidden xl:block">จันทร์</h4>
        </div>
        <button class="fas text-[25px] xl:pl-[50px]" @click.prevent="dayToggle_BTN('monday', openDateTime[0].monday.open)"
          :class="{ 'fa-toggle-on text-[#1cb7d9]': openDateTime[0].monday.open, 'fa-toggle-off text-black/50': !openDateTime[0].monday.open }"></button>
        <div class="hidden xl:block w-[30px]">
          <h4 class="text-[16px] text-[#1cb7d9]" :class="{ 'hidden': !openDateTime[0].monday.open }">เปิด</h4>
          <h4 class="text-[16px] text-black/50" :class="{ 'hidden': openDateTime[0].monday.open }">ปิด</h4>
        </div>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('monday', 'open', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].monday.openTime}` }}</div>
          </template>
        </VueDatePicker>
        <h4>-</h4>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('monday', 'close', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].monday.closeTime}` }}</div>
          </template>
        </VueDatePicker>
      </div>
      <div class="flex items-center mt-[10px] space-x-[20px]">
        <div class="w-[10px]">
          <h4 class="text-black/50 text-[16px] xl:hidden">อ.</h4>
          <h4 class="text-black/50 text-[16px] hidden xl:block">อังคาร</h4>
        </div>
        <button class="fas text-[25px] xl:pl-[50px]"
          @click.prevent="dayToggle_BTN('tuesday', openDateTime[0].tuesday.open)"
          :class="{ 'fa-toggle-on text-[#1cb7d9]': openDateTime[0].tuesday.open, 'fa-toggle-off text-black/50': !openDateTime[0].tuesday.open }"></button>
        <div class="hidden xl:block w-[30px]">
          <h4 class="text-[16px] text-[#1cb7d9]" :class="{ 'hidden': !openDateTime[0].tuesday.open }">เปิด</h4>
          <h4 class="text-[16px] text-black/50" :class="{ 'hidden': openDateTime[0].tuesday.open }">ปิด</h4>
        </div>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('tuesday', 'open', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].tuesday.openTime}` }}</div>
          </template>
        </VueDatePicker>
        <h4>-</h4>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('tuesday', 'close', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].tuesday.closeTime}` }}</div>
          </template>
        </VueDatePicker>
      </div>
      <div class="flex items-center mt-[10px] space-x-[20px]">
        <div class="w-[10px]">
          <h4 class="text-black/50 text-[16px] xl:hidden">พ.</h4>
          <h4 class="text-black/50 text-[16px] hidden xl:block">พุธ</h4>
        </div>
        <button class="fas text-[25px] xl:pl-[50px]"
          @click.prevent="dayToggle_BTN('wednesday', openDateTime[0].wednesday.open)"
          :class="{ 'fa-toggle-on text-[#1cb7d9]': openDateTime[0].wednesday.open, 'fa-toggle-off text-black/50': !openDateTime[0].wednesday.open }"></button>
        <div class="hidden xl:block w-[30px]">
          <h4 class="text-[16px] text-[#1cb7d9]" :class="{ 'hidden': !openDateTime[0].wednesday.open }">เปิด</h4>
          <h4 class="text-[16px] text-black/50" :class="{ 'hidden': openDateTime[0].wednesday.open }">ปิด</h4>
        </div>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('wednesday', 'open', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].wednesday.openTime}` }}</div>
          </template>
        </VueDatePicker>
        <h4>-</h4>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('wednesday', 'close', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].wednesday.closeTime}` }}</div>
          </template>
        </VueDatePicker>
      </div>
      <div class="flex items-center mt-[10px] space-x-[20px]">
        <div class="w-[10px]">
          <h4 class="text-black/50 text-[16px] xl:hidden">พฤ.</h4>
          <h4 class="text-black/50 text-[16px] hidden xl:block">พฤหัสบดี</h4>
        </div>
        <button class="fas text-[25px] xl:pl-[50px]"
          @click.prevent="dayToggle_BTN('thursday', openDateTime[0].thursday.open)"
          :class="{ 'fa-toggle-on text-[#1cb7d9]': openDateTime[0].thursday.open, 'fa-toggle-off text-black/50': !openDateTime[0].thursday.open }"></button>
        <div class="hidden xl:block w-[30px]">
          <h4 class="text-[16px] text-[#1cb7d9]" :class="{ 'hidden': !openDateTime[0].thursday.open }">เปิด</h4>
          <h4 class="text-[16px] text-black/50" :class="{ 'hidden': openDateTime[0].thursday.open }">ปิด</h4>
        </div>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('thursday', 'open', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].thursday.openTime}` }}</div>
          </template>
        </VueDatePicker>
        <h4>-</h4>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('thursday', 'close', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].thursday.closeTime}` }}</div>
          </template>
        </VueDatePicker>
      </div>
      <div class="flex items-center mt-[10px] space-x-[20px]">
        <div class="w-[10px]">
          <h4 class="text-black/50 text-[16px] xl:hidden">ศ.</h4>
          <h4 class="text-black/50 text-[16px] hidden xl:block">ศุกร์</h4>
        </div>
        <button class="fas text-[25px] xl:pl-[50px]" @click.prevent="dayToggle_BTN('friday', openDateTime[0].friday.open)"
          :class="{ 'fa-toggle-on text-[#1cb7d9]': openDateTime[0].friday.open, 'fa-toggle-off text-black/50': !openDateTime[0].friday.open }"></button>
        <div class="hidden xl:block w-[30px]">
          <h4 class="text-[16px] text-[#1cb7d9]" :class="{ 'hidden': !openDateTime[0].friday.open }">เปิด</h4>
          <h4 class="text-[16px] text-black/50" :class="{ 'hidden': openDateTime[0].friday.open }">ปิด</h4>
        </div>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('friday', 'open', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].friday.openTime}` }}</div>
          </template>
        </VueDatePicker>
        <h4>-</h4>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('friday', 'close', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].friday.closeTime}` }}</div>
          </template>
        </VueDatePicker>
      </div>
      <div class="flex items-center mt-[10px] space-x-[20px]">
        <div class="w-[10px]">
          <h4 class="text-black/50 text-[16px] xl:hidden">ส.</h4>
          <h4 class="text-black/50 text-[16px] hidden xl:block">เสาร์</h4>
        </div>
        <button class="fas text-[25px] xl:pl-[50px]"
          @click.prevent="dayToggle_BTN('saturday', openDateTime[0].saturday.open)"
          :class="{ 'fa-toggle-on text-[#1cb7d9]': openDateTime[0].saturday.open, 'fa-toggle-off text-black/50': !openDateTime[0].saturday.open }"></button>
        <div class="hidden xl:block w-[30px]">
          <h4 class="text-[16px] text-[#1cb7d9]" :class="{ 'hidden': !openDateTime[0].saturday.open }">เปิด</h4>
          <h4 class="text-[16px] text-black/50" :class="{ 'hidden': openDateTime[0].saturday.open }">ปิด</h4>
        </div>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('saturday', 'open', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].saturday.openTime}` }}</div>
          </template>
        </VueDatePicker>
        <h4>-</h4>
        <VueDatePicker class="max-w-[30vw] select-none touch-manipulation xl:max-w-[150px]" v-model="time" time-picker
          @update:model-value="TimeUpdate('saturday', 'close', time)">
          <template #trigger>
            <div
              class="text-black/50 text-[16px] rounded-[20px] border-black/50 border-[2px] flex justify-center px-[10px]">
              {{ `${openDateTime[0].saturday.closeTime}` }}</div>
          </template>
        </VueDatePicker>
      </div>
    </div>
    <button
      class="flex justify-center items-center text-white text-[20px] rounded-[20px] bg-[#1cb7d9] mx-[20px] px-5 py-1 mt-[20px] xl:mx-[40px] transition-all duration-300 2xl:mx-[200px]"
      @click.prevent="UploadFormToDB" :class="{ 'disabled: bg-[#8888]': isUploaded === 'loading' }">
      <div class="flex justify-center items-center mr-2">
        <i class="fas fa-map-marker-alt" :class="{ 'fa-spin': isUploaded === 'loading' }"></i>
      </div>
      <h4>Pin เลย !</h4>
    </button>


    <!-- Part 5 Content -->
    <div
      class="flex justify-start items-center text-[24px] mt-[50px] px-[20px] font-medium xl:px-[40px] xl:text-[30px] 2xl:px-[200px]">
      <i class="far fa-code text-[#4ECB71] pr-2"></i>
      <h1>นักพัฒนา</h1>
    </div>
    <div
      class="flex justify-evenly items-center px-[20px] mt-[50px] space-x-3 xl:px-[40px] xl:space-x-[-250px] xl:justfly-center">
      <!-- Niji -->
      <div class="hover:translate-y-[-30px] transition-all duration-500">
        <NuxtImg
          class="object-fit absolute ml-[3.5px] 2xl:ml-[7px] mt-[20px] 2xl:mt-[40px] rounded-full w-[25vw] 2xl:w-[50vw] max-w-[100px] 2xl:max-w-[200px] h-[25vw] 2xl:h-[50vw] max-h-[100px] 2xl:max-h-[200px]"
          src="/img/niji.png" loading="lazy"></NuxtImg>
        <h1
          class="absolute ml-[5px] 2xl:ml-[10px] mt-[120px] 2xl:mt-[250px] font-medium text-[15px] 2xl:text-[24px] text-black">
          Niji</h1>
        <h4 class="absolute ml-[5px] 2xl:ml-[10px] mt-[140px] 2xl:mt-[280px] text-[8px] 2xl:text-[15px] text-black/50">
          Suphawinee</h4>
        <h4 class="absolute ml-[5px] 2xl:ml-[10px] mt-[150px] 2xl:mt-[295px] text-[8px] 2xl:text-[15px] text-black/50">
          Chatasawapreeda</h4>
        <div class="absolute ml-[5px] 2xl:ml-[10px] mt-[165px] 2xl:mt-[320px] h-[1px] w-[44px] 2xl:w-[50px] bg-black">
        </div>
        <h4 class="absolute ml-[5px] 2xl:ml-[10px] mt-[170px] 2xl:mt-[330px] text-[8px] 2xl:text-[15px] text-black">
          Backend Dev</h4>
        <div
          class="absolute ml-[5px] 2xl:ml-[10px] mt-[180px] 2xl:mt-[350px] w-[70px] space-x-1 text-black/50 text-[15px] 2xl:text-[15px]">
          <NuxtLink class="fab fa-facebook-square" to="https://www.facebook.com/nijiducky" target="_blank"></NuxtLink>
          <NuxtLink class="fab fa-instagram" to="https://www.instagram.com/_ducky_way_/" target="_blank"></NuxtLink>
          <NuxtLink class="fab fa-discord" to="https://discord.com/users/321924157677895680" target="_blank"></NuxtLink>
        </div>
        <NuxtImg
          class="shadow-[0_0_5px_2px_rgba(0,0,0,0.25)] rounded-[10px] w-[107px] h-[205px] 2xl:w-[214px] 2xl:h-[410px]"
          preload src="/img/dev_card_bg.png"></NuxtImg>
      </div>
      <!-- Kan -->
      <div class="hover:translate-y-[-30px] transition-all duration-500">
        <NuxtImg
          class="object-fit absolute ml-[3.5px] 2xl:ml-[7px] mt-[20px] 2xl:mt-[40px] rounded-full w-[25vw] 2xl:w-[50vw] max-w-[100px] 2xl:max-w-[200px] h-[25vw] 2xl:h-[50vw] max-h-[100px] 2xl:max-h-[200px]"
          preload src="/img/kan.png" height="100px" width="100px" loading="lazy"></NuxtImg>
        <h1
          class="absolute ml-[5px] 2xl:ml-[10px] mt-[120px] 2xl:mt-[250px] font-medium text-[15px] 2xl:text-[24px] text-black">
          Kan</h1>
        <h4 class="absolute ml-[5px] 2xl:ml-[10px] mt-[140px] 2xl:mt-[280px] text-[8px] 2xl:text-[15px] text-black/50">
          Kankawee Aramrak</h4>
        <div class="absolute ml-[5px] 2xl:ml-[10px] mt-[165px] 2xl:mt-[320px] h-[1px] w-[44px] 2xl:w-[50px] bg-black">
        </div>
        <h4 class="absolute ml-[5px] 2xl:ml-[10px] mt-[170px] 2xl:mt-[330px] text-[8px] 2xl:text-[15px] text-black">Full
          Stack Dev</h4>
        <div
          class="absolute ml-[5px] 2xl:ml-[10px] mt-[180px] 2xl:mt-[350px] w-[70px] space-x-1 text-black/50 text-[15px] 2xl:text-[15px]">
          <NuxtLink class="fab fa-facebook-square" to="https://www.facebook.com/KankaweeG49/" target="_blank"></NuxtLink>
          <NuxtLink class="fab fa-instagram" to="https://www.instagram.com/kan_g49/" target="_blank"></NuxtLink>
          <NuxtLink class="fab fa-discord" to="https://discord.com/users/605305608085831681" target="_blank"></NuxtLink>
        </div>
        <NuxtImg
          class="shadow-[0_0_5px_2px_rgba(0,0,0,0.25)] rounded-[10px] w-[107px] h-[205px] 2xl:w-[214px] 2xl:h-[410px]"
          preload src="/img/dev_card_bg.png"></NuxtImg>
      </div>
      <!-- Prite -->
      <div class="hover:translate-y-[-30px] transition-all duration-500">
        <NuxtImg
          class="object-fit absolute ml-[3.5px] 2xl:ml-[7px] mt-[20px] 2xl:mt-[40px] rounded-full w-[25vw] 2xl:w-[50vw] max-w-[100px] 2xl:max-w-[200px] h-[25vw] 2xl:h-[50vw] max-h-[100px] 2xl:max-h-[200px]"
          preload src="/img/prite.png" height="100px" width="100px" loading="lazy"></NuxtImg>
        <h1
          class="absolute ml-[5px] 2xl:ml-[10px] mt-[120px] 2xl:mt-[250px] font-medium text-[15px] 2xl:text-[24px] text-black">
          Prite</h1>
        <h4 class="absolute ml-[5px] 2xl:ml-[10px] mt-[140px] 2xl:mt-[280px] text-[8px] 2xl:text-[15px] text-black/50">
          Pannawat Aungern</h4>
        <div class="absolute ml-[5px] 2xl:ml-[10px] mt-[165px] 2xl:mt-[320px] h-[1px] w-[44px] 2xl:w-[50px] bg-black">
        </div>
        <h4 class="absolute ml-[5px] 2xl:ml-[10px] mt-[170px] 2xl:mt-[330px] text-[8px] 2xl:text-[15px] text-black">
          Designer & Writer</h4>
        <div
          class="absolute ml-[5px] 2xl:ml-[10px] mt-[180px] 2xl:mt-[350px] w-[70px] space-x-1 text-black/50 text-[15px] 2xl:text-[15px]">
          <NuxtLink class="fab fa-facebook-square" to="https://www.facebook.com/profile.php?id=100037783080563"
            target="_blank"></NuxtLink>
          <NuxtLink class="fab fa-instagram" to="https://www.instagram.com/pxnwat_t/" target="_blank"></NuxtLink>
          <NuxtLink class="fab fa-discord" to="https://discord.com/users/560017469666754560" target="_blank"></NuxtLink>
        </div>
        <NuxtImg
          class="shadow-[0_0_5px_2px_rgba(0,0,0,0.25)] rounded-[10px] w-[107px] h-[205px] 2xl:w-[214px] 2xl:h-[410px]"
          preload src="/img/dev_card_bg.png"></NuxtImg>
      </div>
    </div>

    <!-- Part6 Content -->
    <div class="mt-[70px]">
      <Footer />
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
import Compressor from 'compressorjs';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  components: {
    Map,
    VueDatePicker,
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      //Data Out
    };
  },
  async setup() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        Cookies.set('user_current_lat', position.coords.latitude.toString())
        Cookies.set('user_current_long', position.coords.longitude.toString())
      });
    }
    //Near me
    const slides_fetch = await fetch('https://wangpa.tensormik.com/wangpa-api/nearbyLocations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_lat: Cookies.get('user_current_lat'),
          user_long: Cookies.get('user_current_long')
        })
      })
      const slides_data_near_me = await slides_fetch.json();

      //Top10
      const slides_data_top10 = ref([
        {
          image: '/img/mspace.png',
          title: 'M-Space Major ...',
          price: 'ฟรี',
          features: ['wifi', 'utensils', 'toilet', 'shopping-bag'],
          openingHours: 'เปิดทุกวัน 11:00 - 23:00',
          stars: ['fas', 'fas', 'fas', 'fas', 'far'],
          capacity: 'คาดว่าน้อย'
          // Add other properties as needed for your slide
        },
        {
          image: '/img/co-work.png',
          title: 'WTF Space',
          price: '9ล้าน/ชม.',
          features: ['wifi', 'utensils', 'toilet', 'plug'],
          openingHours: 'Opening Hours',
          stars: ['fas', 'fas', 'fas', 'fas', 'far'],
          capacity: 'Capacity Status'
          // Add other properties as needed for your slide
        },
        // Add more slide objects as needed
      ]);

      //Slide button
      const top10_slideLG = ref(null)
      const near_me_slideLG = ref(null)
      function Top10SlideBTN(command: string) {
        if (top10_slideLG.value) {
          if (command === 'next') {
            //@ts-ignore
            top10_slideLG.value.next();
          } else if (command === 'prev') {
            //@ts-ignore
            top10_slideLG.value.prev();
          }
        }
      }
      function NearMeSlideBTN(command: string) {
        if (near_me_slideLG.value) {
          if (command === 'next') {
            //@ts-ignore
            near_me_slideLG.value.next();
          } else if (command === 'prev') {
            //@ts-ignore
            near_me_slideLG.value.prev();
          }
        }
      }

      //Image selector for upload
      const imageInput = ref<HTMLInputElement | null>(null);

      const openImageDialog = () => {
        imageInput.value?.click();
      };

      var isImgUp = ref(false)
      var image_compressList: any[] = []
      const handleImageChange = async (event: Event) => {
        image_compressList = [];
        let files = (event.target as HTMLInputElement).files;
        isImgUp.value = true
        if (!files || files.length === 0) {
          // console.log('No file selected.');
          return;
        }

        // สร้าง FormData
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
          if (files[i].size > 15728640) { // 15MB
            alert("Too large file. Limit 15MB");
            return;
          }

          new Compressor(files[i], {
            quality: 0.5,
            convertSize: 524288,
            convertTypes: ['image/png'],

            success(result) {
              // เพิ่มไฟล์ที่บีบอัดแล้วลงใน formData
              formData.append('images', result);

              const reader = new FileReader();
              reader.readAsDataURL(result);
              reader.onloadend = function () {
                const base64data = reader.result;
                image_compressList.push(base64data);
              };
            },
            error(err) {
              console.error(err.message);
            },
          });
        }
        files = null
      };
      let isUploaded = ref('nan');
      const uploadImages = async (formData: any, cws_id_link: number) => {
        try {
          const response_imageUrl = await fetch('https://wangpa.tensormik.com/wangpa-api/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              images: formData,
              cws_id_link: cws_id_link
            })
          });
          setTimeout(() => {
            //Reset form after pin success
            let day_List: any = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            for (let i = 0; i < day_List.length; i++) {
              ResetOpenDateTime(day_List[i])
            }
            ResetFacilities_Check(utensils_check, restroom_check, shopping_check, wifi_check, outlet_check, air_check);
            ResetSimpleForm(cws_name_form, cws_price_form, cws_review_form)
            ResetImageInputData()
          }, 5000);
        } catch (error) {
          console.error('Error during image upload:', error);
        }
      };

      const cws_name_form = ref('')
      const cws_price_form = ref('')
      const cws_review_form = ref('')
      //Form Update
      function Form_Update(input_name: string) {
        switch (input_name) {
          case 'name':
            Cookies.set('cws_name_form_Cookie', encodeURIComponent(cws_name_form.value));
            break
          case 'price':
            Cookies.set('cws_price_form_Cookie', encodeURIComponent(cws_price_form.value));
            break
          case 'review':
            Cookies.set('cws_name_review_Cookie', encodeURIComponent(cws_review_form.value));
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
        const facilityMapping: { [key: string]: Ref<boolean> } = {
          utensils: utensils_check,
          restroom: restroom_check,
          shopping: shopping_check,
          wifi: wifi_check,
          outlet: outlet_check,
          air: air_check
        };

        const facilityRef = facilityMapping[facilitie as keyof typeof facilityMapping];
        if (facilityRef) {
          facilityRef.value = !facilityRef.value;
        } else {
          console.warn("Unknown facility:", facilitie);
        }
      }

      //Time Picker
      const time = ref<Time>({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
      });
      //Set type for time
      type Time = {
        hours: number;
        minutes: number;
      };
      //Office Time Data
      const openDateTime = ref([
        {
          sunday: {
            open: false,
            openTime: 'ปิดให้บริการ',
            closeTime: 'ปิดให้บริการ'
          },
          monday: {
            open: false,
            openTime: 'ปิดให้บริการ',
            closeTime: 'ปิดให้บริการ'
          },
          tuesday: {
            open: false,
            openTime: 'ปิดให้บริการ',
            closeTime: 'ปิดให้บริการ'
          },
          wednesday: {
            open: false,
            openTime: 'ปิดให้บริการ',
            closeTime: 'ปิดให้บริการ'
          },
          thursday: {
            open: false,
            openTime: 'ปิดให้บริการ',
            closeTime: 'ปิดให้บริการ'
          },
          friday: {
            open: false,
            openTime: 'ปิดให้บริการ',
            closeTime: 'ปิดให้บริการ'
          },
          saturday: {
            open: false,
            openTime: 'ปิดให้บริการ',
            closeTime: 'ปิดให้บริการ'
          }
        }
      ]);
      function dayToggle_BTN(day: keyof typeof openDateTime.value[0], current_state: boolean) {
        if (day in openDateTime.value[0]) {
          openDateTime.value[0][day].open = !current_state;
          if (openDateTime.value[0][day].open === true) {
            openDateTime.value[0][day].openTime = '00:00'
            openDateTime.value[0][day].closeTime = '23:59'
          }
          else {
            openDateTime.value[0][day].openTime = 'ปิดให้บริการ'
            openDateTime.value[0][day].closeTime = 'ปิดให้บริการ'
          }
        } else {
          console.error(`Invalid day: ${day}`);
        }
      }

      function isValidTimeRange(openTime: string, closeTime: string): boolean {
        //First input
        if (closeTime === 'ปิดให้บริการ') return false;

        const [openHours, openMinutes] = openTime.split(':').map(Number);
        const [closeHours, closeMinutes] = closeTime.split(':').map(Number);

        const openTimeInMinutes = openHours * 60 + openMinutes;
        const closeTimeInMinutes = closeHours * 60 + closeMinutes;
        return closeTimeInMinutes >= openTimeInMinutes;
      }

      function TimeUpdate(day: string, type: string, value: Time) {
        const dayIndex = 0;
        const timeString = `${value.hours}:${value.minutes}`;
        const dayKey = day.toLowerCase() as keyof typeof openDateTime.value[0];

        if (['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].includes(dayKey)) {
          const selectedDay = openDateTime.value[dayIndex][dayKey];

          const timeTypeKey = `${type}Time` as keyof typeof selectedDay;
          if (timeTypeKey === 'openTime' || timeTypeKey === 'closeTime') {
            selectedDay[timeTypeKey] = timeString;

            if (selectedDay.openTime && selectedDay.closeTime) {
              selectedDay.open = isValidTimeRange(selectedDay.openTime, selectedDay.closeTime);

              if (!selectedDay.open && selectedDay.openTime !== 'ปิดให้บริการ' && selectedDay.closeTime !== 'ปิดให้บริการ') {
                alert('เวลาปิดต้องไม่น้อยกว่าเวลาเปิด');
              }
            }
          }
        }
      }


      //UpForm
      var upform_response: any;
      async function UploadFormToDB() {
        isUploaded.value = 'loading'
        try {
          upform_response = await fetch('https://wangpa.tensormik.com/wangpa-api/upform', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              //cws
              name: cws_name_form.value,
              lat: Cookies.get('inform-lat'),
              long: Cookies.get('inform-long'),
              review: cws_review_form.value,
              price: cws_price_form.value,
              //cws_facilities
              food: utensils_check.value,
              toilet: restroom_check.value,
              shopping: shopping_check.value,
              wifi: wifi_check.value,
              charger: outlet_check.value,
              air_con: air_check.value,
              // cws_time
              sunday_open: openDateTime.value[0].sunday.open,
              sunday_openTime: openDateTime.value[0].sunday.openTime,
              sunday_closeTime: openDateTime.value[0].sunday.closeTime,
              monday_open: openDateTime.value[0].monday.open,
              monday_openTime: openDateTime.value[0].monday.openTime,
              monday_closeTime: openDateTime.value[0].monday.closeTime,
              tuesday_open: openDateTime.value[0].tuesday.open,
              tuesday_openTime: openDateTime.value[0].tuesday.openTime,
              tuesday_closeTime: openDateTime.value[0].tuesday.closeTime,
              wednesday_open: openDateTime.value[0].wednesday.open,
              wednesday_openTime: openDateTime.value[0].wednesday.openTime,
              wednesday_closeTime: openDateTime.value[0].wednesday.closeTime,
              thursday_open: openDateTime.value[0].thursday.open,
              thursday_openTime: openDateTime.value[0].thursday.openTime,
              thursday_closeTime: openDateTime.value[0].thursday.closeTime,
              friday_open: openDateTime.value[0].friday.open,
              friday_openTime: openDateTime.value[0].friday.openTime,
              friday_closeTime: openDateTime.value[0].friday.closeTime,
              saturday_open: openDateTime.value[0].saturday.open,
              saturday_openTime: openDateTime.value[0].saturday.openTime,
              saturday_closeTime: openDateTime.value[0].saturday.closeTime
            })
          });
          const upform_responseData = await upform_response.json(); // Await the JSON response
          const cws_id_res = await upform_responseData.cws_id
          uploadImages(image_compressList, cws_id_res)
        } catch (e) {
          console.error(e)
        }
      }

      //Reset form
      function ResetImageInputData() {
        image_compressList = [];
        isUploaded.value = 'success';
        isImgUp.value = false
      }
      function ResetSimpleForm(cws_name_form: any, cws_price_form: any, cws_review_form: any) {
        cws_name_form.value = '';
        cws_price_form.value = '';
        cws_review_form.value = '';
      }
      function ResetFacilities_Check(
        utensils_check: any,
        restroom_check: any,
        shopping_check: any,
        wifi_check: any,
        outlet_check: any,
        air_check: any
      ) {
        utensils_check.value = false;
        restroom_check.value = false;
        shopping_check.value = false;
        wifi_check.value = false;
        outlet_check.value = false;
        air_check.value = false;
      }
      function ResetOpenDateTime(day: keyof typeof openDateTime.value[0]) {
        for (let i = 0; i < 7; i++) {
          if (day in openDateTime.value[0]) {
            openDateTime.value[0][day].open = false;
            openDateTime.value[0][day].openTime = 'ปิดให้บริการ';
            openDateTime.value[0][day].closeTime = 'ปิดให้บริการ';
          }
        }
      }

      return {
        slides_data_near_me,
        slides_data_top10,
        Top10SlideBTN,
        NearMeSlideBTN,
        near_me_slideLG,
        top10_slideLG,

        imageInput,
        openImageDialog,
        handleImageChange,
        isImgUp,

        //form imageUrlRes
        UploadFormToDB,
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
        TimeUpdate,
        time,
        openDateTime,
        dayToggle_BTN,

        //Pin BTN
        isUploaded
      };
    },
  });
</script>