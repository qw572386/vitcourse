<template>
    <div class="vit-main">
        <vit-carousel :carouselConfig="carouselConfig" :carouselList="carouselList" @on-select="view"></vit-carousel>
        <div class="vit-main-content">
            <vit-cate :cardList="cardList"  @on-select="view">
                <h3 slot="vit-cate-title" class="vit-main-content-cate-title"><span class="vit-icon icon-shizhan-l vit-icon-l"></span>实 / 战 / 推 / 荐<span class="vit-icon icon-shizhan-r vit-icon-r"></span></h3>
            </vit-cate>
        </div>
    </div>
</template>

<script>
    // import { mapActions } from 'vuex'
    import { getCarousel } from '@/api/app'
    import vitCarousel from '_c/vitCarousel'
    import vitCate from '_c/vitCate'
    export default {
        components: {
            vitCarousel,
            vitCate
        },
        data () {
            return {
                carouselConfig: {
                    height: 350,
                    loop: true,
                    autoplay: true,
                    arrow: 'always',
                    speed: 2000,
                    radiusDot: true
                },
                carouselList: [],
                cardList: []
            }
        },
        methods: {
        //   ...mapActions ([
        //     'getCarousel'
        //   ]),
          view(id) {
              console.log(id)
            this.$router.push({path: `/detail/${id}`})
          }
        },
        mounted () {
          getCarousel().then(res => {
            this.carouselList = res.data
          })
        }
    }
</script>

<style lang="less" scoped>
.vit-main{
    &-content{
        padding-top: 10px;
        &-cate{
            &-title{
                color: #93999F;
                letter-spacing: .6px;
                line-height: 36px;
                text-align: center;
            }
        }
    }
    &-aside{
    }
}
</style>
