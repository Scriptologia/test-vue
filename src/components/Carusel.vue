<template>
    <swiper
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            :grabCursor="true"
            :effect="'creative'"
            :pagination="{ clickable: true }"
            :navigation="{ clickable: true }"
            :creativeEffect="{
      prev: {
        shadow: true,
        translate: ['-7%', 0, -1],
        rotate:[0,0,-4],
        scale:.93
      },
      next: {
        shadow: true,
        translate: ['120%', 0, 0],
      },
      limitProgress:2,
      shadowPerProgress: true
    }"
            :modules="modules"
            class="mySwiper2"
    >
        <swiper-slide class="bg-light">
            <div class=" text-center">
            <h4 class="d-inline text-primary">Слайдер 1 заголовок</h4>
            <div class="d-flex text-dark pt-3 flex-wrap">
                <ul class="my-wiper-list px-5">
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                </ul>
                <ul class="my-wiper-list px-5">
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                    <li>Lorem ipsum.</li>
                </ul>
            </div>
            </div>
        </swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide class="bg-light">
            <div class="text-center d-flex flex-column">
            <h4 class="d-inline text-primary">Start Using It Now</h4>
                <button type="button" class="btn btn-primary rounded-pill align-self-center px-4">Get started</button>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
    import {Swiper, SwiperSlide} from "swiper/vue/swiper-vue";
    import { Navigation, Pagination, EffectCreative } from "swiper";
    import 'swiper/swiper.scss';
    import "swiper/swiper-bundle.css";
    import "swiper/swiper-vars.scss";
    import "../css/style.css";

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Navigation, Pagination, EffectCreative],
            };
        },
    };
</script>
<style lang="scss">
    .swiper{
        overflow: visible !important;
    }
    .mySwiper2{width:500px;height:400px;
        @media screen and (max-width: 768px) {
            width:100%;
            height:fit-content;
        }
    }
    .swiper-slide {border-radius: 10px;font-weight: initial; font-size:initial;height: auto;}
    .my-wiper-list {
        list-style: none;
        & li:before {
            content: "✓";
            display: inline-block;
            margin-right:5px;
            width: 1.3em;
        }
    }
    .swiper-pagination-horizontal{bottom:-30px !important;}
    .swiper-button-prev{left:-40px;}
    .swiper-button-next {right:-40px;visibility: visible}
</style>