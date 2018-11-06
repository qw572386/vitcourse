<template>
    <Carousel class="vit-carousel" 
        :height="carouselConfig.height" 
        loop 
        autoplay
        :autoplay-speed="carouselConfig.speed"
        :dots="carouselConfig.dots"
        :radius-dot="carouselConfig.radiusDot"
        :trigger="carouselConfig.trigger"
        :arrow="carouselConfig.arrow"
        :easing="carouselConfig.easing">
        <CarouselItem v-for="(item, index) in carouselList" :key="`carouselitem${index}`" class="vit-carousel-item">
            <div class="vit-carousel-item-content" @click="handleClick(item.id)"
            :style="{backgroundImage: 'url('+ item.bgUrl +')'}">
                
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
    export default {
        name: 'vitCarousel',
        props: {
            carouselConfig: {
                type: Object,
                default: () => {
                    height: 100;
                    loop: true;
                    autoplay: true;
                    speed: 2000;
                    dots: 'inside';
                    radiusDot: false;
                    trigger: 'click';
                    arrow: 'hover';
                    easing: 'ease';
                }
            },
            carouselList: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                
            }
        },
        methods: {
            handleClick (id) {
                this.$emit('on-click', id)
            }
        }
    }
</script>

<style lang="less" scoped>
.vit-carousel{
    &-item{
        &-content{
            height: 100%;
            background-position: center;
            background-size: cover;
        }
    }
}
</style>
