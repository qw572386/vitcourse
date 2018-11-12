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
                value2: 2,
                carouselConfig: {
                    height: 350,
                    loop: true,
                    autoplay: true,
                    arrow: 'always',
                    speed: 2000,
                    radiusDot: true
                },
                carouselList: [],
                cardList: [
                
                    {
                        src: 'https://img-ph-mirror.nosdn.127.net/S_KZHbKd1cVnNakzi7s3nw==/39125021863241218.png?imageView&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js sdfashdfsdfgjkasdfhdklsfgjfkldhsklhadfahfghsdfghasr'
                    },
                    {
                        src: 'https://edu-image.nosdn.127.net/6DEFC52F206C0D7C42468EF936AD5786.png?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: 'https://edu-image.nosdn.127.net/12AEC41745BB180734135A70FAB424D2.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: 'https://edu-image.nosdn.127.net/01C1C9410E675EBBFECECD587D161A71.jpg?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: 'https://edu-image.nosdn.127.net/B2B4D218926FB3D1D7A569B7D9EBADA4.png?imageView&thumbnail=426y240&quality=100&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: 'https://edu-image.nosdn.127.net/366CAA65B385648971812A5858624DB0.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: 'https://edu-image.nosdn.127.net/366CAA65B385648971812A5858624DB0.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    },
                    {
                        src: 'https://edu-image.nosdn.127.net/366CAA65B385648971812A5858624DB0.jpg?imageView&thumbnail=510y288&quality=100&thumbnail=223x125&quality=100',
                        id: 521314,
                        title: 'A high quality UI Toolkit based on Vue.js'
                    }
                ]
            }
        },
        methods: {
        //   ...mapActions ([
        //     'getCarousel'
        //   ]),
          view(id) {
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
